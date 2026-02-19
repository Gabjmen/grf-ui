import { declareElement, GrfElement } from "@grf-ui/engine";

@declareElement("grf-button")
export class GrfButton extends GrfElement {
  public override onInit(): void {
    console.log("init test");
  }

  public override onDestroy(): void {
    console.log("destroy test");
  }
}
