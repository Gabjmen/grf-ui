using System.Text.Json.Serialization;

namespace dotnet_ssr_engine.Models;

public class GrfElementMetadata
{
    [JsonPropertyName("name")]
    public string Name { get; set; }
    
    [JsonPropertyName("html")]
    public string Html { get; set; }
    
    [JsonPropertyName("css")]
    public string Css { get; set; }
}