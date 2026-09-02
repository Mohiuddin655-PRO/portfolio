# Mohi Uddin — Portfolio

Personal portfolio site. No framework, no runtime dependencies: plain HTML, CSS
custom properties, and ES modules. The optional build step exists only to bundle
and minify.

---

## Run it

The site uses ES modules, so it needs a server — opening `index.html` from the
file system will not work.

**VS Code (easiest):** install the *Live Server* extension (already recommended
in `.vscode/extensions.json`), then right-click `index.html` → **Open with Live
Server**.

**Terminal:**

```bash
npm run dev        # serves the folder at http://localhost:5173
```

---

## Project structure

```
.
├── index.html            # Document shell. Mount points only — no copy.
├── build.mjs             # Optional production build (esbuild)
├── assets/
│   └── favicon.svg
└── src/
    ├── css/
    │   ├── tokens.css        # Color, type, space, motion — all variables
    │   ├── base.css          # Reset and document defaults
    │   ├── layout.css        # .wrap, .section, .spec, .stack, .grid-*
    │   ├── components.css    # .chip, .panel, .row, .tag, .btn, .metric…
    │   ├── sections.css      # Hero, case study, lifecycle, timeline, footer
    │   └── responsive.css    # Media queries, loaded last
    └── js/
        ├── content.js        # ← ALL site content lives here
        ├── dom.js            # Generic render helpers (esc, list, tags, rows…)
        ├── render.js         # One renderer per section
        └── main.js           # Entry point
```

**Load order is the cascade order.** `responsive.css` is linked last so its
rules win without a single `!important`. If you add a stylesheet, add its
`<link>` in the right place in `index.html` *and* to `CSS_FILES` in `build.mjs`.

---

## Editing the site

### Change any wording, figure, link or list item

Open `src/js/content.js`. It is the single source of truth — name, pitch, quick
facts, services, case studies, lifecycle, capabilities, domains, packages,
timeline, education, terms and contact rows. `index.html` holds no copy except
the section rail labels.

### Add a capability group

```js
// src/js/content.js → CAPABILITIES
{
  title: "New group",
  level: "Production",          // "Production" (copper chip) or "Hands-on" (jade chip)
  tags: ["Thing one", "Thing two"],
  note: "Optional qualifier shown under the tags."
}
```

### Add a case study

```js
// src/js/content.js → CASES
{
  tag: "Category",
  name: "Product name",
  role: "Your role in one line.",
  note: "Optional clarification.",
  metrics: [["$0,000", "What the figure is"]],
  items: ["Capability", "Capability"],
  links: [["Store name", "https://…"]]
}
```

Every field except `tag`, `name` and `role` is optional — `when()` skips
anything missing, so no empty blocks are rendered.

### Add a whole new section

1. Add the data to `content.js`.
2. Write one renderer in `render.js` and call it from `renderSite()`.
3. Add the `<section>` with a matching mount-point `id` to `index.html`.

### Restyle

Change the variables in `src/css/tokens.css`. The accent, for example, is three
values (`--copper`, `--copper-lift`, `--copper-dim`) plus one wash; swapping
them recolors the entire site. `--jade` is reserved for status and capability
level — do not reuse it decoratively.

---

## Build (optional)

```bash
npm install
npm run build      # → dist/
npm run preview    # serves dist/ at http://localhost:4173
```

The build bundles and minifies the modules into `dist/assets/app.js`,
concatenates and minifies the stylesheets into `dist/assets/app.css`, and
rewrites `index.html` to point at them — eight requests down to two.

---

## Deploy

Any static host. Deploy the repository root as-is, or `dist/` after a build.

| Host | Setting |
| --- | --- |
| GitHub Pages | Settings → Pages → deploy from branch, root |
| Netlify | Build command `npm run build`, publish directory `dist` |
| Vercel | Framework preset "Other", output directory `dist` |
| Firebase Hosting | `firebase init hosting`, public directory `dist` |

Unbuilt deploys work too: leave the build command empty and publish the root.

---

## Content rules

The copy follows the master professional profile dossier. Keep these when
editing:

- Only **Lovora** and **Pro.Cal / Dr.Cal AI** are named publicly. Other clients
  and apps stay confidential.
- Commercial figures are used exactly as approved — never converted into annual
  revenue, profit, income or valuation.
- Capability levels are literal. Basic-level skills are not listed at all, and
  nothing is promoted to a level it has not shipped at.
- Native iOS is presented as integrations and platform features, not as full
  standalone native iOS specialization.
- No invented testimonials, awards, certifications, publisher profiles or links.

## Before going live

- [ ] Open both store links in `CASES` → Lovora and confirm they resolve.
- [ ] Check the page at 375 px, 900 px and 1440 px.
- [ ] Set a real Open Graph image if you want link previews.
