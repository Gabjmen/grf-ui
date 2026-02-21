import { GrfElement } from "@grf-ui/engine";

export class GrfButtonHeadless extends GrfElement {
  public override onInit(): void {
    console.log("init test");
    super.onInit();
  }

  public override onDestroy(): void {
    console.log("destroy test");
    super.onDestroy();
  }
}
