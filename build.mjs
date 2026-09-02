/**
 * Production build — optional. The site runs fine unbuilt.
 *
 * What it does:
 *   1. Bundles + minifies the ES modules into dist/assets/app.js
 *   2. Concatenates + minifies the six CSS files into dist/assets/app.css
 *   3. Copies index.html with the six <link> tags and the module <script>
 *      rewritten to those two files, and minifies the HTML lightly
 *   4. Copies assets/
 *
 * Result: two requests instead of eight, no source comments shipped.
 *
 *   npm install && npm run build && npm run preview
 */

import { build } from "esbuild";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

// CSS load order is the cascade order — keep it identical to index.html.
const CSS_FILES = [
  "tokens.css", "base.css", "layout.css",
  "components.css", "sections.css", "responsive.css"
];

const OUT = "dist";

await rm(OUT, { recursive: true, force: true });
await mkdir(`${OUT}/assets`, { recursive: true });

/* 1 — JavaScript ---------------------------------------------------------- */
await build({
  entryPoints: ["src/js/main.js"],
  bundle: true,
  minify: true,
  format: "esm",
  target: ["es2020"],
  outfile: `${OUT}/assets/app.js`
});

/* 2 — CSS ----------------------------------------------------------------- */
const css = (
  await Promise.all(CSS_FILES.map((file) => readFile(`src/css/${file}`, "utf8")))
).join("\n");

await build({
  stdin: { contents: css, loader: "css", resolveDir: "src/css" },
  minify: true,
  outfile: `${OUT}/assets/app.css`
});

/* 3 — HTML ---------------------------------------------------------------- */
const html = (await readFile("index.html", "utf8"))
  .replace(/\s*<!--[\s\S]*?-->/g, "")
  .replace(
    /(\s*<link rel="stylesheet" href="src\/css\/[^"]+">)+/,
    '\n  <link rel="stylesheet" href="assets/app.css">'
  )
  .replace(
    '<script type="module" src="src/js/main.js"></script>',
    '<script type="module" src="assets/app.js"></script>'
  )
  .replace(/\n\s*\n/g, "\n");

await writeFile(`${OUT}/index.html`, html);

/* 4 — Static assets ------------------------------------------------------- */
await cp("assets", `${OUT}/assets`, { recursive: true });

console.log(`Built ${OUT}/ — run "npm run preview" to check it.`);
