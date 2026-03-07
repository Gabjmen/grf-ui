import { DeclareElement } from "@grf-ui/engine";
import { GrfButtonHeadless } from "@grf-ui/headless";
import htmlContent from "./grf-button.html";
import cssContent from "./grf-button.css";
import { injectTokens, tokenSheet } from "@grf-ui/tokens";

@DeclareElement("grf-button")
export class GrfButton extends GrfButtonHeadless {
  /**
   *
   */
  constructor() {
    super();
  }

  public override onInit(): void {
    // These are not needed if using SSR

    if (!this.isSsr) {
      this.attachShadowDom();
    }

    // This is only needed in development for hot-reload of the styles.
    if (DEV_ENV) {
      this.hydrateStyles();
    }

    if (!this.isSsr) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(cssContent);
      injectTokens(this.shadowRoot!);
      this.shadowRoot!.adoptedStyleSheets = [tokenSheet, sheet];
    }

    // No SSR served html? Add it on the client.
    if (this.shadowRoot!.childNodes.length === 0) {
      this.shadowRoot!.innerHTML = `${htmlContent}`;
    }

    super.onInit();
  }

  public override onDestroy(): void {
    super.onDestroy();
  }
}
