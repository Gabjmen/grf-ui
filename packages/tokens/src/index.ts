const gammaRayTokens = `
  :root {
    --grf-color-primary: #7C3AED;
    --grf-color-secondary: #06B6D4;
    --grf-color-background: #0F172A;
    --grf-color-surface: #1E293B;
    --grf-color-error: #ff4d4d;
    --grf-clr-text-main: #F8FAFC;
    --grf-glow-primary: 0 0 15px 2px rgba(124, 58, 237, 0.4);
    --grf-radius-md: 6px;
    --grf-transition-std: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    --grf-font-family: system-ui, sans-serif;
    --grf-font-size-base: 16px;
    --grf-font-size-small: 14px;
    --grf-font-size-large: 18px;

    --grf-spacing-xs: 4px;
    --grf-spacing-sm: 8px;
    --grf-spacing-md: 16px;
    --grf-spacing-lg: 24px;
    --grf-spacing-xl: 32px;

    --grf-border-radius-sm: 4px;
    --grf-border-radius-md: 8px;
    --grf-border-radius-lg: 16px;

    --grf-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
    --grf-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --grf-shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.08);

    @keyframes gr-ionize {
      0% { left: -100%; opacity: 0; }
      50% { opacity: 0.5; }
      100% { left: 100%; opacity: 0; }
    }
  }
`;

export const tokenSheet = new CSSStyleSheet();
tokenSheet.replaceSync(gammaRayTokens.replace(":root", ":host, :root"));

/**
 * Injects the design tokens in the component.
 */
export function injectTokens(shadowRoot?: ShadowRoot) {
  if (shadowRoot) {
    shadowRoot.adoptedStyleSheets = [
      ...shadowRoot.adoptedStyleSheets,
      tokenSheet,
    ];
  }
}
