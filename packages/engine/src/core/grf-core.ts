// Globals START

declare global {
  const DEV_ENV: boolean;
}

// Globals END

export class GrfElement extends HTMLElement {
  public parent: ParentNode | null = null;
  public isSsr: boolean = false;

  /**
   * Constructor.
   */
  constructor() {
    super();

    // If shadowRoot exists it means the component was SSR'ed.
    if (this.shadowRoot) {
      this.isSsr = true;
    }
  }

  /**
   * Attach a shadow root.
   */
  public attachShadowDom() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
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

  /**
   * Prevents styles duplication by removing the SSR injected styles when client-side adoptedStyleSheets are applied.
   */
  protected hydrateStyles() {
    if (this.isSsr && this.shadowRoot) {
      const ssrStyles = this.shadowRoot.querySelectorAll("style");
      ssrStyles.forEach((x) => x.remove());
      this.isSsr = false;
    }
  }

  public onInit(): void {}

  public onDestroy(): void {}

  connectedCallback() {
    this.onInit();
  }

  disconnectedCallback() {
    this.onDestroy();
  }
}
