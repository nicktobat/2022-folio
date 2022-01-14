import { c as create_ssr_component, v as validate_component } from "../../chunks/index-abd7ce05.js";
import { B as Back } from "../../chunks/Back-27686a65.js";
import { d as dev, b as browser } from "../../chunks/env-df325643.js";
import "../../chunks/Icon-3e43faec.js";
var utilization_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-178i481-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-178i481-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}main.svelte-178i481.svelte-178i481{padding:64px 64px 80px;min-height:504px}main.svelte-178i481 .content.svelte-178i481{display:flex;align-items:center}main.svelte-178i481 .content .top.svelte-178i481{max-width:800px}main.svelte-178i481 .content .top h2.svelte-178i481{margin-bottom:16px}main.svelte-178i481 .content .top p.svelte-178i481{font-size:24px;line-height:40px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Utilization = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Utilization Reports</title>`, ""}`, ""}

<main class="${"svelte-178i481"}">${validate_component(Back, "Back").$$render($$result, {}, {}, {})}

  <div class="${"content svelte-178i481"}"><div class="${"top svelte-178i481"}"><h2 class="${"svelte-178i481"}">Utilization Reports</h2>
      <p class="${"svelte-178i481"}">Dynamic, flexible, real-time reporting on the building blocks of your company: Component Utilization Reports leverage powerful filtering on your entire dataset for supremely segmented analytics.</p></div></div>


</main>`;
});
export { Utilization as default, hydrate, prerender, router };
