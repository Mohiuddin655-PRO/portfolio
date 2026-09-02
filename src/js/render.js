/**
 * Section renderers — each one turns a slice of `content.js` into markup
 * and mounts it. Add a section by writing one renderer and one mount point
 * in index.html; nothing else needs to change.
 */

import {
  BOUNDARIES, CAPABILITIES, CASES, CONTACT, DOMAINS, EDUCATION,
  FACTS, LIFECYCLE, PACKAGES, PROFILE, SERVICES, TERMS, TIMELINE
} from "./content.js";

import { chip, each, esc, label, link, list, metric, mount, rows, tags, textRows, when } from "./dom.js";

const renderHero = () =>
  mount("hero", `
    <div>
      <span class="status"><span class="status__dot"></span>${esc(PROFILE.status)}</span>
      <h1 class="hero__name">${esc(PROFILE.name).replace(" ", "&nbsp;")}</h1>
      <p class="hero__role">${esc(PROFILE.role)}</p>
      <p class="hero__pitch">${esc(PROFILE.pitch)}</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="mailto:${esc(PROFILE.email)}">Start a project</a>
        ${link("WhatsApp", PROFILE.whatsapp, "btn")}
        ${link("Upwork", PROFILE.upwork, "btn")}
        ${link("GitHub", PROFILE.github, "btn")}
      </div>
    </div>
    <div class="panel"><div class="rows">${textRows(FACTS)}</div></div>`);

const renderServices = () =>
  mount("services", each(SERVICES, (service) => `
    <article class="stack">
      <h2 class="case__name">${esc(service.title)}</h2>
      ${when(service.lead, (lead) => `<p class="lead">${esc(lead)}</p>`)}
      ${when(service.items, list)}
      ${when(service.tags, tags)}
    </article>`));

const renderCases = () =>
  mount("cases", each(CASES, (item) => `
    <article class="case">
      <div class="case__head">
        <h2 class="case__name">${esc(item.name)}</h2>
        ${label(item.tag)}
      </div>
      <p class="lead">${esc(item.role)}</p>
      ${when(item.note, (note) => `<p class="note">${esc(note)}</p>`)}
      ${when(item.metrics, (metrics) => `<div class="case__metrics">${each(metrics, metric)}</div>`)}
      ${when(item.items, tags)}
      ${when(item.links, (links) =>
        `<div class="case__links">${each(links, ([text, href]) => link(text, href))}</div>`)}
    </article>`));

const renderLifecycle = () =>
  mount("lifecycle", each(LIFECYCLE, ([title, detail], index) => `
    <div class="step">
      <span class="step__n">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 class="step__t">${esc(title)}</h3>
        <p class="step__d">${esc(detail)}</p>
      </div>
    </div>`));

const renderCapabilities = () =>
  mount("capabilities", each(CAPABILITIES, (group) => `
    <section class="cap">
      <div class="cap__head">
        <h3 class="cap__t">${esc(group.title)}</h3>
        ${chip(group.level)}
      </div>
      ${tags(group.tags)}
      ${when(group.note, (note) => `<p class="cap__note">${esc(note)}</p>`)}
    </section>`));

const renderDomains = () => {
  mount("domains", tags(DOMAINS));
  mount("boundaries", each(BOUNDARIES, (text) => `<p class="note">${esc(text)}</p>`));
};

const renderPackages = () =>
  mount("packages", each(PACKAGES, ([name, version, href]) => `
    <a class="pkg" href="${esc(href)}" target="_blank" rel="noopener">
      <span class="pkg__n">${esc(name)}</span>
      <span class="pkg__v">${esc(version)}</span>
    </a>`));

const renderTimeline = () =>
  mount("timeline", each(TIMELINE, (job) => `
    <article class="job">
      <span class="job__when">${esc(job.when)}</span>
      <h3 class="job__org">${esc(job.org)}</h3>
      <span class="job__role">${esc(job.role)}</span>
      ${list(job.items)}
    </article>`));

const renderEducation = () =>
  mount("education", each(EDUCATION, (entry) => `
    <div class="stack">
      <h3 class="step__t">${esc(entry.title)}</h3>
      <span class="job__role">${esc(entry.meta)}</span>
      ${when(entry.body, (body) => `<p class="note">${esc(body)}</p>`)}
    </div>`));

const renderFooter = () => {
  mount("foot-name", esc(`${PROFILE.name} — ${PROFILE.role}`));
  mount("foot-place", esc(PROFILE.location));
};

const renderTerms = () => mount("terms", textRows(TERMS));

const renderContact = () =>
  mount("contact", rows(CONTACT.map(([key, text, href]) => [key, href ? link(text, href) : esc(text)])));

/** Render every section. Called once on load. */
export function renderSite() {
  renderHero();
  renderServices();
  renderCases();
  renderLifecycle();
  renderCapabilities();
  renderDomains();
  renderPackages();
  renderTimeline();
  renderEducation();
  renderTerms();
  renderContact();
  renderFooter();
}
