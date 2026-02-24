export class GrfElement extends HTMLElement {
  public html: string = ``;

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
    if (this.shadowRoot) return;   
    this.attachShadow({ mode: "open" });
  }

  public addToMetadata(htmlContent: string, cssContent: string): void {
    const json = JSON.stringify(`<style>${cssContent}</style> ${htmlContent}`);
    jsonComponentCollection.push(json);
    console.log(jsonComponentCollection);
  }

  public onInit(): void {
    console.log('HTML value: ', this.html);
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

var jsonComponentCollection: string[] = [];

export function isReadyForSSR(): boolean {
  return typeof window !== "undefined" && typeof customElements != "undefined";
}

// Globals END
