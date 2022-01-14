import { c as create_ssr_component, b as add_attribute, e as escape, i as each, v as validate_component } from "../../../chunks/index-abd7ce05.js";
import { I as Icon } from "../../../chunks/Icon-3e43faec.js";
import { d as dev, b as browser } from "../../../chunks/env-df325643.js";
var Work_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-taq17h-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-taq17h-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}a.svelte-taq17h.svelte-taq17h.svelte-taq17h{display:block;max-width:800px;cursor:pointer}article.svelte-taq17h.svelte-taq17h.svelte-taq17h{display:flex;flex-direction:row;align-items:flex-start;max-width:800px;height:auto;border:4px solid var(--theme-color, black);border-radius:8px;background-color:rgba(var(--bg-color), 0.12);overflow:hidden;margin-bottom:40px}article.svelte-taq17h .imgWrap.svelte-taq17h.svelte-taq17h{height:272px;width:272px}article.svelte-taq17h .imgWrap img.svelte-taq17h.svelte-taq17h{height:272px;width:272px;object-fit:cover}article.svelte-taq17h section.svelte-taq17h.svelte-taq17h{display:flex;flex-flow:column nowrap;padding:32px 40px}article.svelte-taq17h section.svelte-taq17h>.svelte-taq17h:not(:first-child){margin-top:20px}article.svelte-taq17h section p.svelte-taq17h.svelte-taq17h{font-size:18px;line-height:24px}article.svelte-taq17h section ul.svelte-taq17h.svelte-taq17h{list-style:none;display:flex}article.svelte-taq17h section ul li.svelte-taq17h.svelte-taq17h{padding:0 8px;font-size:14px;line-height:24px;border-radius:24px;color:#fafafa;background-color:#111}article.svelte-taq17h section ul li.svelte-taq17h.svelte-taq17h:not(:first-child){margin-left:8px}article.svelte-taq17h section div.svelte-taq17h.svelte-taq17h{display:flex}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { name } = $$props;
  let { desc } = $$props;
  let { src } = $$props;
  let { color } = $$props;
  let { bgColor } = $$props;
  let { tags: tags2 = [] } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.tags === void 0 && $$bindings.tags && tags2 !== void 0)
    $$bindings.tags(tags2);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", href, 0)} class="${"svelte-taq17h"}"><article style="${"--theme-color: " + escape(color) + "; --bg-color: " + escape(bgColor)}" class="${"svelte-taq17h"}"><div class="${"imgWrap svelte-taq17h"}"><img${add_attribute("src", src, 0)} alt="${"preview img"}" class="${"svelte-taq17h"}"></div>
    <section class="${"svelte-taq17h"}"><h2 class="${"svelte-taq17h"}">${escape(name)}</h2>
      <p class="${"svelte-taq17h"}">${escape(desc)}</p>
      <ul class="${"svelte-taq17h"}">${each(tags2, (tag) => {
    return `<li class="${"svelte-taq17h"}">${escape(tag)}</li>`;
  })}</ul>
      <div class="${"svelte-taq17h"}"><p class="${"svelte-taq17h"}">View Project</p>
        ${validate_component(Icon, "Icon").$$render($$result, { title: "arrow-right" }, {}, {})}</div></section></article>
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-18mf466-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-18mf466-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}section.svelte-18mf466{margin-top:64px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
let tags = {
  kinis: ["Mobile App", "Health", "SaaS", "UI Library"],
  reconcile: ["Fintech", "Product", "Feature", "SaaS"],
  utilize: ["PLM", "Product", "Feature", "SaaS"]
};
const Prod = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Product Design | Nicholas Tobat</title>`, ""}`, ""}

<main><header><div class="${"text"}"><h1>Product Design</h1>
      <h3>My day job is all about moving rectangles around.</h3></div></header>
  
  <section class="${"svelte-18mf466"}">${validate_component(Work, "Work").$$render($$result, {
    href: "/prod/kinis",
    name: "Kinis App",
    desc: "Leading design and product management for a brand-new fitness and wellness application.",
    src: "/kinispreview.png",
    color: "#1A1A1A",
    bgColor: "26, 26, 26",
    tags: tags.kinis
  }, {}, {})}
    ${validate_component(Work, "Work").$$render($$result, {
    name: "Reconciliation",
    desc: "An intuitive interface for matching and posting book and bank transactions.",
    src: "/reconcilepreview.jpg",
    color: "#006064",
    bgColor: "0, 96, 100",
    tags: tags.reconcile
  }, {}, {})}
    ${validate_component(Work, "Work").$$render($$result, {
    name: "Utilization Reports",
    desc: "A robust reporting tool for the building blocks of your company: components.",
    src: "/utilizepreview.png",
    color: "#007AFF",
    bgColor: "0, 122, 255",
    tags: tags.utilize
  }, {}, {})}</section>
</main>`;
});
export { Prod as default, hydrate, prerender, router };
