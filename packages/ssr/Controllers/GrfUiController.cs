using dotnet_ssr_engine.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_ssr_engine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GrfUiController : ControllerBase
    {
        [HttpPost("get-ssr-elements")]
        public async Task<ActionResult<GrfHtmlElement>> GetSsrReadyElement([FromBody] List<GrfHtmlElement> htmlElement)
        {
            return Ok("test");
        }
    }
}
