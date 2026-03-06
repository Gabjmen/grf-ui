// Locals START

// Locals END

// Globals START

export function isReadyForSSR(): boolean {
  return typeof window !== "undefined" && typeof customElements != "undefined";
}

// Globals END
