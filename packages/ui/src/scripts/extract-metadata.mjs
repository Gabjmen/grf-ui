import fs from "fs";
import path from "path";

const outputPathMetadata = path.resolve(process.cwd(), "../ssr/metadata.json");
const outputPathTokens = path.resolve(process.cwd(), "../ssr/tokens.json");
const inputPathTokens = path.resolve(
  process.cwd(),
  "../tokens/src/styles/tokens.css",
);

const registry = [
  {
    name: "grf-button",
    html: fs.readFileSync("./src/grf-button/grf-button.html", "utf-8"),
    css: fs.readFileSync("./src/grf-button/grf-button.css", "utf-8"),
  },
];

const tokens = fs.readFileSync(inputPathTokens, "utf-8");

fs.writeFileSync(outputPathMetadata, JSON.stringify(registry, null, 2));
fs.writeFileSync(outputPathTokens, JSON.stringify(tokens, null, 2));
