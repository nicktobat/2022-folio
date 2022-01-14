import { c as create_ssr_component, v as validate_component } from "../../chunks/index-abd7ce05.js";
import { B as Back } from "../../chunks/Back-27686a65.js";
import { d as dev, b as browser } from "../../chunks/env-df325643.js";
import "../../chunks/Icon-3e43faec.js";
var achieve_svelte_svelte_type_style_lang = "";
const css = {
  code: '@keyframes svelte-w7isx7-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-w7isx7-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}.content.svelte-w7isx7.svelte-w7isx7{padding:64px 64px 80px;min-height:504px}.content.svelte-w7isx7 .text.svelte-w7isx7{max-width:480px}.content.svelte-w7isx7 .text p.svelte-w7isx7{margin-top:16px;font-family:"Forum"}',
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Achieve = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Achievements</title>`, ""}`, ""}

<div class="${"content svelte-w7isx7"}">${validate_component(Back, "Back").$$render($$result, {}, {}, {})}

  <div class="${"text svelte-w7isx7"}"><h2>Achievements</h2>
    <p class="${"svelte-w7isx7"}">I am a fully self-taught designer, life-long learner, and adventure-seeker. My journey in design began when I moved to San Francisco in 2014, where I learned to delight in the process and intersection of discovery and creation. Since then, my adventures have taken me around the world and back again. I strive to produce work that makes the terms &quot;useful&quot; and &quot;beautiful&quot; redundant.
    </p></div>


</div>`;
});
export { Achieve as default, hydrate, prerender, router };
