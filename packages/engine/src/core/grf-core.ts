import { jsonComponentCollection } from "./grf-ssr";

export class GrfElement extends HTMLElement {
  public html: string = ``;
  public parent: ParentNode | null = null;

  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  /**
   * Attach a shadow root.
   * @param customElemet
   */
  public attachShadowDom() {
    if (this.shadowRoot) {
      console.log("Hydrating exisitng Shadow DOM")
      return;
    }
    this.attachShadow({ mode: "open" });
  }

  public addToMetadata(htmlContent: string, cssContent: string): void {
    const name = "grf-button";
    const content = `<style>${cssContent}</style>\n${htmlContent}`;
    jsonComponentCollection.push({
      name: name,
      content: content,
    });
  }

  public onInit(): void {
    if (this.shadowRoot && this.shadowRoot.childNodes.length === 0) {
      this.shadowRoot.innerHTML = this.html;
    }
  }

  public onDestroy(): void {}

  connectedCallback() {
    this.onInit();
  }

  disconnectedCallback() {
    this.onDestroy();
  }
}

// Globals START

// Globals END
