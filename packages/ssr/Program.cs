using System.Text;
using System.Text.Json;
using dotnet_ssr_engine.Models;
using dotnet_ssr_engine.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSingleton<SsrEngineService>();
builder.Services.AddSingleton<SsrRegistry>();
builder.Services.AddReverseProxy().LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var registry = scope.ServiceProvider.GetRequiredService<SsrRegistry>();

    if (!File.Exists("metadata.json")) throw new FileNotFoundException("metadata.json not found");
    if (!File.Exists("tokens.json")) throw new FileNotFoundException("tokens.css not found");

    var json = File.ReadAllText("metadata.json");
    var css = File.ReadAllText("tokens.json");

    registry.GrfElements = JsonSerializer.Deserialize<List<GrfElementMetadata>>(json) ?? [];
    registry.GrfTokens = JsonSerializer.Deserialize<string>(css) ?? string.Empty;
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors(cors => cors
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

var ssrEngineService = app.Services.GetRequiredService<SsrEngineService>();

app.Use(async (context, next) =>
{
    var originalBody = context.Response.Body;
    var buffer = new MemoryStream();
    context.Response.Body = buffer;

    await next(context);

    buffer.Seek(0, SeekOrigin.Begin);
    var html = await new StreamReader(buffer).ReadToEndAsync();

    if (context.Response.ContentType?.Contains("text/html") == true)
    {
        var renderedHtml = ssrEngineService.Render(html);
        context.Response.Body = originalBody;
        context.Response.ContentLength = Encoding.UTF8.GetByteCount(renderedHtml);
        await context.Response.WriteAsync(renderedHtml);
    }
    else
    {
        buffer.Seek(0, SeekOrigin.Begin);
        context.Response.Body = originalBody;
        await buffer.CopyToAsync(originalBody);
    }
    
    buffer.Dispose();
});

app.MapControllers();
app.MapReverseProxy();

app.Run();