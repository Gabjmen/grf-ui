// Locals START

import { GrfHtmlElement } from "../models/grfHtmlElement";

var uri = "http://localhost:5186/api/ssrengine/get-ssr-elements";

// Locals END

// Globals START

export var jsonComponentCollection: GrfHtmlElement[] = [];

export function isReadyForSSR(): boolean {
  return typeof window !== "undefined" && typeof customElements != "undefined";
}

export function getSsrElement() {
  fetch(uri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonComponentCollection),
  })
    .then((respone) => respone.json())
    .catch((error) =>
      console.error("Could not get SSR ready GrfElement.", error),
    );
}

// Globals END
