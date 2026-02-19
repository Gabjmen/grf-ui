/**
 * Simple signal implementation.
 * @param initialValue the value that needs to be tracked for reactivity.
 * @returns the value given as a parameter.
 */
export function signal<T>(initialValue: T): { value: T } {
  let _value = initialValue;

  function notify() {}

  return {
    get value() {
      return _value;
    },
    set value(v) {
      _value = v;
      notify();
    },
  };
}
