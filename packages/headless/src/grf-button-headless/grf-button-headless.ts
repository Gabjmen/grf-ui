import { GrfElement } from "@grf-ui/engine";

export class GrfButtonHeadless extends GrfElement {
  protected grfClick(event: Event) {
    
  }

  protected attachEvents() {
    this.shadowRoot?.addEventListener("click", (e: Event) => {
      this.grfClick(e);

      this.emit("grfClick", { details: e });
    });
  }

  public override onInit(): void {
    this.attachEvents();
    super.onInit();
  }

  public override onDestroy(): void {
    super.onDestroy();
  }
}
