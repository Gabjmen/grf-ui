using dotnet_ssr_engine.Models;
using dotnet_ssr_engine.Services;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_ssr_engine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SsrEngineController : ControllerBase
    {
        private readonly SsrEngineService _service;

        public SsrEngineController(SsrEngineService service)
        {
            _service = service;
        }
        
        [HttpPost("get-ssr-elements")]
        public List<GrfHtmlElement> GetSsrReadyElement([FromBody] List<GrfHtmlElement> htmlElement)
        {
            return null;
        }
    }
}
