import { GrfButton } from "../grf-button/grf-button";

/**
 * Call this function to register the components and prevent them from beeing tree-shaken by the bundler
 * if they are not explicitly imported and initialized.
 */
export function registerGrfElements() {
  //return [GrfButton];
  if (!customElements.get("grf-button")) {
    customElements.define("grf-button", GrfButton);
  }
}
