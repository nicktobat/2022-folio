import { c as create_ssr_component } from "../../chunks/index-abd7ce05.js";
import { d as dev, b as browser } from "../../chunks/env-df325643.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Contact</title>`, ""}`, ""}

<div class="${"content"}"></div>`;
});
export { Contact as default, hydrate, prerender, router };
