using dotnet_ssr_engine.Models;

namespace dotnet_ssr_engine.Interfaces;

public interface ISsrEngineService
{
    public List<GrfHtmlElement> AddDeclarativeShadowDomToElement(List<GrfHtmlElement> htmlElement);
}