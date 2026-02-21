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

export function isReadyForSSR(): boolean {
  return typeof window !== "undefined" && typeof customElements != "undefined";
}
