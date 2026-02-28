// ReSharper disable ConvertToPrimaryConstructor
// ReSharper disable ForeachCanBePartlyConvertedToQueryUsingAnotherGetEnumerator

using AngleSharp;

namespace dotnet_ssr_engine.Services;

public class SsrEngineService
{
    private readonly SsrRegistry _ssrRegistry;

    public SsrEngineService(SsrRegistry ssrRegistry)
    {
        _ssrRegistry = ssrRegistry;
    }

    public string Render(string html)
    {
        if (string.IsNullOrEmpty(html)) return html;

        try
        {
            var context = BrowsingContext.New(Configuration.Default);
            var document = context.OpenAsync(req => req.Content(html)).Result;
            
            // Inject grf-tokens into <head>.
            var head = document.Head;
            if (head == null) return html;
            
            var styleTokens = document.CreateElement("style");
            //styleTokens.SetAttribute("type", "text/css");
            styleTokens.TextContent = _ssrRegistry.GrfTokens;
            
            head.Prepend(styleTokens);

            foreach (var element in _ssrRegistry.GrfElements)
            {
                var nodes = document.QuerySelectorAll(element.Name);

                foreach (var node in nodes)
                {
                    var template = document.CreateElement("template");
                    template.SetAttribute("shadowrootmode", "open");
                    template.InnerHtml = $"<style>{element.Css}</style>{element.Html}";
                
                    node.AppendChild(template);
                }
            }

            return document.DocumentElement.OuterHtml;
        }
        catch
        {
            return html;
        }
    }
}