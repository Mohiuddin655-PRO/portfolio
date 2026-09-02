/** Entry point. The module is deferred, so the DOM is already parsed. */
import { renderSite } from "./render.js";
import { initTheme } from "./theme.js";

initTheme();
renderSite();
