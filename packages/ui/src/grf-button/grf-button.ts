import { DeclareElement } from "@grf-ui/engine";
import { GrfButtonHeadless } from "@grf-ui/headless";
import htmlContent from './grf-button.html';
import cssContent from './grf-button.css';
import { injectTokens, tokenSheet } from "@grf-ui/tokens";
import { getSsrElement } from "@grf-ui/engine";

@DeclareElement("grf-button")
export class GrfButton extends GrfButtonHeadless {
  /**
   *
   */
  constructor() {
    super();
  }

  public override onInit(): void {
    this.attachShadowDom();

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssContent);

    injectTokens(this.shadowRoot!);

    this.shadowRoot!.adoptedStyleSheets = [tokenSheet, sheet];
    this.html = `${htmlContent}`;

    this.addToMetadata(htmlContent, cssContent);

    this.parent = this.parentNode;
    this.parent?.addEventListener("click", this.onClick)

    super.onInit();
  }

  protected onClick() {
    getSsrElement();
  }

  public override onDestroy(): void {
    super.onDestroy();
  }
}
