/**
 * DOM helpers — small, generic, and reused by every section renderer.
 * Nothing here knows anything about the portfolio's content.
 */

const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Escape a value before it is placed into an HTML string. */
export const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ENTITIES[c]);

/** Write HTML into the element with the given id. Silent if it is absent. */
export function mount(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/** Map an array to HTML and join it — the pattern every renderer uses. */
export const each = (items, fn) => items.map(fn).join("");

/** <ul> of escaped strings. */
export const list = (items, className = "bullets") =>
  `<ul class="${className}">${each(items, (item) => `<li>${esc(item)}</li>`)}</ul>`;

/** Pill cloud of escaped strings. */
export const tags = (items) =>
  `<div class="tags">${each(items, (item) => `<span class="tag">${esc(item)}</span>`)}</div>`;

/**
 * Key/value rows. Values are passed through untouched, so callers escape
 * plain text themselves and may pass trusted markup (e.g. a link).
 */
export const rows = (pairs) =>
  each(pairs, ([key, value]) =>
    `<div class="row"><span class="row__k">${esc(key)}</span><span class="row__v">${value}</span></div>`
  );

/** Rows whose values are plain text. */
export const textRows = (pairs) => rows(pairs.map(([key, value]) => [key, esc(value)]));

/** A single approved figure with its caption. */
export const metric = ([figure, caption]) =>
  `<div class="metric">
     <span class="metric__n">${esc(figure)}</span>
     <span class="metric__c">${esc(caption)}</span>
   </div>`;

/** Capability level chip. "Production" is copper; anything else is jade. */
export const chip = (level) =>
  `<span class="chip chip--${level === "Production" ? "prod" : "hands"}">${esc(level)}</span>`;

/** Neutral chip, for a case-study label. */
export const label = (text) => `<span class="chip">${esc(text)}</span>`;

/** External link, safe by default. */
export const link = (text, href, className = "link") =>
  `<a class="${className}" href="${esc(href)}" target="_blank" rel="noopener">${esc(text)}</a>`;

/** Optional block: renders nothing when the value is missing. */
export const when = (value, fn) => (value ? fn(value) : "");
