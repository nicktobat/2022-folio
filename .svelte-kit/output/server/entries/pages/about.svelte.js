import { c as create_ssr_component, v as validate_component } from "../../chunks/index-abd7ce05.js";
import { B as Back } from "../../chunks/Back-27686a65.js";
import { d as dev, b as browser } from "../../chunks/env-df325643.js";
import "../../chunks/Icon-3e43faec.js";
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: '@keyframes svelte-ro7pi6-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-ro7pi6-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}main.svelte-ro7pi6.svelte-ro7pi6{padding:64px 64px 80px;min-height:504px}main.svelte-ro7pi6 .content.svelte-ro7pi6{display:flex;align-items:center;padding:0 6px}main.svelte-ro7pi6 .content .portrait img.svelte-ro7pi6{max-width:360px;height:auto;padding:4px;border:1px solid #111;background-color:#fafafa;box-shadow:-4px 4px #fafafa, -5px 5px #111, 4px -4px white, 5px -5px #111}main.svelte-ro7pi6 .content .text.svelte-ro7pi6{max-width:480px;margin-left:40px}main.svelte-ro7pi6 .content .text p.svelte-ro7pi6{margin-top:16px;font-family:"Forum"}',
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<main class="${"svelte-ro7pi6"}">${validate_component(Back, "Back").$$render($$result, {}, {}, {})}

  <div class="${"content svelte-ro7pi6"}"><div class="${"portrait"}"><img src="${"/portrait.jpg"}" alt="${"Portrait of Nick"}" class="${"svelte-ro7pi6"}"></div>
    <div class="${"text svelte-ro7pi6"}"><h2>I&#39;m Nick.</h2>
      <p class="${"svelte-ro7pi6"}">I am a fully self-taught designer, life-long learner, and adventure-seeker. My journey in design began when I moved to San Francisco in 2014, where I learned to delight in the process and intersection of discovery and creation. Since then, my adventures have taken me around the world and back again. I strive to produce work that makes the terms &quot;useful&quot; and &quot;beautiful&quot; redundant.
      </p></div></div>


</main>`;
});
export { About as default, hydrate, prerender, router };
