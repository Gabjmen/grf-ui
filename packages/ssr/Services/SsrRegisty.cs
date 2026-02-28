using dotnet_ssr_engine.Models;

namespace dotnet_ssr_engine.Services;

public class SsrRegistry
{
    public List<GrfElementMetadata> GrfElements { get; set; } = [];
    public string GrfTokens { get; set; } = string.Empty;
}