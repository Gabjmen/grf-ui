import { DeclareElement } from "@grf-ui/engine";
import { GrfButtonHeadless } from "@grf-ui/headless";
import htmlContent from './grf-button.html';
import cssContent from './grf-button.css';

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
    this.shadowRoot!.adoptedStyleSheets = [sheet];

    this.html = `${htmlContent}`;

    super.onInit();
  }

  public override onDestroy(): void {
    super.onDestroy();
  }
}
