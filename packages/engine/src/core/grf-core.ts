export class GrfElement extends HTMLElement {
  /**
   * Constructor.
   */
  constructor() {
    super();
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
