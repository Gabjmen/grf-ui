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
   */
  public attachShadowDom() {
    if (this.shadowRoot) {
      console.log("Hydrating exisitng Shadow DOM");
      return;
    }
    this.attachShadow({ mode: "open" });
  }

  /**
   * This is a wrapper for `dispatchEvent`.
   * @param name the name of the event.
   * @param detail the event itself.
   */
  public emit(name: string, detail: unknown) {
    this.dispatchEvent(
        new CustomEvent(name, {
          detail,
          bubbles: true,
          composed: true,
        }),
      );
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
