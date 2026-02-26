using dotnet_ssr_engine.Interfaces;
using dotnet_ssr_engine.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_ssr_engine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SsrEngineController : ControllerBase
    {
        private readonly ISsrEngineService _service;

        public SsrEngineController(ISsrEngineService service)
        {
            _service = service;
        }
        
        [HttpPost("get-ssr-elements")]
        public List<GrfHtmlElement> GetSsrReadyElement([FromBody] List<GrfHtmlElement> htmlElement)
        {
            return _service.AddDeclarativeShadowDomToElement(htmlElement);
        }
    }
}
