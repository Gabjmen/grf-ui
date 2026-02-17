import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("grf-button")
export class GrfButton extends LitElement {
  @property({ type: String })
  accessor btnTitle: string = '';

  protected override render() {
    return html`<button>${this.btnTitle}</button>`;
  }
}
