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
    // this.attachShadowDom();

    // const sheet = new CSSStyleSheet();
    // sheet.replaceSync(cssContent);

    // injectTokens(this.shadowRoot!);
    // this.shadowRoot!.adoptedStyleSheets = [tokenSheet, sheet];

    // this.html = `${htmlContent}`;

    // this.parent = this.parentNode;
    // this.parent?.addEventListener("click", this.onClick);

    super.onInit();
  }

  public override onDestroy(): void {
    super.onDestroy();
  }
}
