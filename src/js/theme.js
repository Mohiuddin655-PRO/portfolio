/**
 * THEME — dark/light switching.
 *
 * Dark is the base palette in tokens.css; light is an override selected by
 * `data-theme="light"` on <html>. The active theme is resolved twice:
 *
 *   1. The blocking script in <head> resolves and stamps it before first
 *      paint, so there is no flash of the wrong theme.
 *   2. This module re-resolves on load, keeps the toggle and the browser
 *      theme-color in sync, and follows the OS while no explicit choice
 *      has been stored.
 *
 * Keep the resolution rule here identical to the inline script's.
 */

const STORAGE_KEY = "theme";
const LIGHT_QUERY = "(prefers-color-scheme: light)";

/** Browser UI color per theme — must match --ink in tokens.css. */
const THEME_COLOR = { dark: "#0B0D12", light: "#F4F5F8" };

const media = window.matchMedia(LIGHT_QUERY);

/** The stored choice, or null when the visitor has never picked one. */
function storedTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null; // Private mode or blocked storage — fall back to the OS.
  }
}

const systemTheme = () => (media.matches ? "light" : "dark");

const activeTheme = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

/** Paint a theme and bring the toggle and browser chrome with it. */
function apply(theme) {
  document.documentElement.dataset.theme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = THEME_COLOR[theme];

  const button = document.getElementById("theme-toggle");
  if (button) {
    // The label names the action, not the state — it is what a screen
    // reader announces, and the icon shows the same thing visually.
    const next = theme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${next} theme`);
    button.setAttribute("title", `Switch to ${next} theme`);
  }
}

/** Switch themes, remember the choice, and crossfade the change. */
function toggle() {
  const next = activeTheme() === "dark" ? "light" : "dark";

  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Unwritable storage still switches — it just will not be remembered.
  }

  const root = document.documentElement;
  root.classList.add("theme-switching");
  apply(next);
  window.setTimeout(() => root.classList.remove("theme-switching"), 260);
}

/** Wire the toggle and start following the OS. Called once on load. */
export function initTheme() {
  apply(storedTheme() ?? systemTheme());

  const button = document.getElementById("theme-toggle");
  if (button) button.addEventListener("click", toggle);

  // An explicit choice wins until it is made again; otherwise track the OS.
  media.addEventListener("change", () => {
    if (!storedTheme()) apply(systemTheme());
  });
}
