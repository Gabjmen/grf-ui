using dotnet_ssr_engine.Interfaces;
using dotnet_ssr_engine.Models;

namespace dotnet_ssr_engine.Services;

public class SsrEngineService : ISsrEngineService
{
    private const string _templateOpenTag = "<template shadowrootmode=\"open\">";
    private const string _templateCloseTag = "</template>";
    
    public List<GrfHtmlElement> AddDeclarativeShadowDomToElement(List<GrfHtmlElement> htmlElements)
    {
        foreach (var elem in htmlElements)
        {
            var dsdPayload = $"<{elem.Name}>" +
                             $"<template shadowrootmode=\"open\">{elem.Content}</template>" +
                             $"</{elem.Name}>";
            
            elem.Content = dsdPayload;
        }

        return htmlElements;
    }
}