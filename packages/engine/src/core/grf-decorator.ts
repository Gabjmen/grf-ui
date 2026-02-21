import { isReadyForSSR } from "./grf-core";

/**
 * Use this decorator to define the custom elements you create.
 * @param elementName
 * @returns
 */
export function DeclareElement(
  elementName: string,
): (constructor: CustomElementConstructor) => void {
  return function (constructor: CustomElementConstructor): void {
    constructor.prototype.registeredTag = elementName;

    // Without this condition the demo (Angular v21 app using SSR mode) would crash.
    if (isReadyForSSR()) {
      if (!customElements.get(elementName)) {
        customElements.define(elementName, constructor);
        console.log(
          `Defined this component: ${elementName}, ${constructor.name}`,
        );
      }
    } else {
      console.log(`Skipping registration for ${elementName} (SSR/Node environment)`);
    }
  };
}
