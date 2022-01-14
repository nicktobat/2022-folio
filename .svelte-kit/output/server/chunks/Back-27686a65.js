import { c as create_ssr_component, v as validate_component } from "./index-abd7ce05.js";
import { I as Icon } from "./Icon-3e43faec.js";
var Back_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1nwgcdz-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-1nwgcdz-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}div.svelte-1nwgcdz.svelte-1nwgcdz{padding:0 0 80px 0}div.svelte-1nwgcdz a.svelte-1nwgcdz{fill:#ff5429;height:64px;padding:0 24px;border:2px solid #ff5429;border-radius:8px;width:fit-content;display:flex;align-items:center;transition-property:color, background-color, fill;transition-duration:400ms}div.svelte-1nwgcdz a span.svelte-1nwgcdz{padding-left:12px}div.svelte-1nwgcdz a.svelte-1nwgcdz:hover{background-color:#ff5429;color:#fafafa;fill:#fafafa}",
  map: null
};
const Back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-1nwgcdz"}"><a href="${"/"}" class="${"svelte-1nwgcdz"}">${validate_component(Icon, "Icon").$$render($$result, { title: "arrow-left" }, {}, {})}
    <span class="${"svelte-1nwgcdz"}">Back</span></a>
</div>`;
});
export { Back as B };
