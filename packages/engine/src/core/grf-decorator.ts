/**
 * Use this decorator to define the custom elements you create.
 * @param elementName
 * @returns
 */
export function declareElement(
  elementName: string,
): (constructor: CustomElementConstructor) => void {
  return function (constructor: CustomElementConstructor): void {
    constructor.prototype.registeredTag = elementName;

    if (!customElements.get(elementName)) {
      customElements.define(elementName, constructor);
      console.log(`Defined this component: ${elementName}, ${constructor.name}`);
    }
  };
}
