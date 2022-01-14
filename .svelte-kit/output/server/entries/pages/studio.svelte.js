import { c as create_ssr_component, i as each, e as escape, n as null_to_empty, b as add_attribute, v as validate_component } from "../../chunks/index-abd7ce05.js";
import { d as dev, b as browser } from "../../chunks/env-df325643.js";
var Tabs_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "@keyframes svelte-bcouwt-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-bcouwt-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}ul.chips.svelte-bcouwt.svelte-bcouwt{padding:0;margin:0;display:flex;justify-content:flex-start;align-items:center;overflow-x:auto}ul.chips.svelte-bcouwt button.svelte-bcouwt{color:#111;background-color:#fafafa;border:2px solid #111;margin-right:16px;font-size:18px;line-height:24px;padding:20px 24px;border-radius:64px;transition:all 400ms;cursor:pointer;text-decoration:none;white-space:nowrap}ul.chips.svelte-bcouwt button.svelte-bcouwt:hover{background-color:rgba(0, 0, 0, 0.24)}ul.chips.svelte-bcouwt button.active.svelte-bcouwt{background-color:#111;color:#fafafa}ul.chips.svelte-bcouwt button.active.svelte-bcouwt:hover{background-color:rgba(0, 0, 0, 0.76)}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { activeTabValue } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  $$result.css.add(css$6);
  return `<ul class="${"chips svelte-bcouwt"}">${Array.isArray(items) ? `${each(items, (item, i) => {
    return `<button class="${escape(null_to_empty(activeTabValue === i ? "active" : "")) + " svelte-bcouwt"}">${escape(item.text)}
      </button>`;
  })}` : ``}
</ul>`;
});
var Dropdown_svelte_svelte_type_style_lang = "";
var IXD_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '@keyframes svelte-uiq9z6-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-uiq9z6-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}h4.svelte-uiq9z6.svelte-uiq9z6{font-family:"Forum";font-size:20px;line-height:28px;margin-bottom:40px}article.svelte-uiq9z6.svelte-uiq9z6{display:flex;margin:-24px 0 0 -24px}article.svelte-uiq9z6 .imgWrap.svelte-uiq9z6{position:relative;margin:24px}article.svelte-uiq9z6 .imgWrap img.svelte-uiq9z6{width:245px;height:542px;padding:16px 20px}article.svelte-uiq9z6 .imgWrap img.gif.svelte-uiq9z6{display:none}article.svelte-uiq9z6 .imgWrap:hover img.gif.svelte-uiq9z6{display:inline}article.svelte-uiq9z6 .imgWrap:hover img.image.svelte-uiq9z6{display:none}article.svelte-uiq9z6 .imgWrap div.phone.svelte-uiq9z6{position:absolute;top:0;left:0;width:284px;height:574px;background-image:url("ixd/iphonex_2.png");background-size:100% 100%;z-index:9}',
  map: null
};
const IXD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender2 = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender2 !== void 0)
    $$bindings.prerender(prerender2);
  $$result.css.add(css$5);
  return `<h4 class="${"svelte-uiq9z6"}">The following motion animations were created in InVision Studio. Hover or tap to check &#39;em out.</h4>
<article class="${"svelte-uiq9z6"}"><div class="${"imgWrap svelte-uiq9z6"}"><img class="${"image svelte-uiq9z6"}" src="${"/ixd/nike.png"}" alt="${"nike"}">
    <img class="${"gif svelte-uiq9z6"}" src="${"/ixd/nike.gif"}" alt="${"nike"}">
    <div class="${"phone svelte-uiq9z6"}"></div></div>

  <div class="${"imgWrap svelte-uiq9z6"}"><img class="${"image svelte-uiq9z6"}" src="${"/ixd/reserve.png"}" alt="${"reserve"}">
    <img class="${"gif svelte-uiq9z6"}" src="${"/ixd/reserve.gif"}" alt="${"reserve"}">
    <div class="${"phone svelte-uiq9z6"}"></div></div>

  <div class="${"imgWrap svelte-uiq9z6"}"><img class="${"image svelte-uiq9z6"}" src="${"/ixd/menu.png"}" alt="${"menu"}">
    <img class="${"gif svelte-uiq9z6"}" src="${"/ixd/menu.gif"}" alt="${"menu"}">
    <div class="${"phone svelte-uiq9z6"}"></div></div>
</article>`;
});
var Graphics_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '@keyframes svelte-4i8aka-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-4i8aka-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}h4.svelte-4i8aka.svelte-4i8aka{font-family:"Forum";font-size:20px;line-height:28px;margin-bottom:40px}article.svelte-4i8aka.svelte-4i8aka{display:flex;flex-flow:row wrap;max-width:1280px;margin:-24px 0 0 -24px}article.svelte-4i8aka .imgWrap.svelte-4i8aka{position:relative;width:360px;height:360px;overflow:hidden;margin:24px;border:2px solid #111;border-radius:16px;padding:4px;cursor:zoom-in;transition:transform 600ms}article.svelte-4i8aka .imgWrap img.svelte-4i8aka{width:360px;height:360px;border-radius:12px;object-fit:cover;user-select:none}article.svelte-4i8aka .imgWrap.svelte-4i8aka:hover{transform:scale(1.1)}#lightbox.svelte-4i8aka.svelte-4i8aka{display:none;width:100vw;height:calc(100vh - 80px);position:fixed;top:0;left:0;background:repeating-linear-gradient(135deg, transparent 0px, transparent 2px, black 2px, black 3px), repeating-linear-gradient(45deg, transparent 0px, transparent 2px, black 2px, black 3px);padding:40px 24px;cursor:zoom-out;z-index:9999}#lightbox.svelte-4i8aka img.svelte-4i8aka{opacity:0;padding:40px 24px;max-height:calc(100% - 48px);transition:opacity 600ms 200ms;user-select:none}#lightbox.boxed.svelte-4i8aka.svelte-4i8aka{display:flex;align-items:center;justify-content:center}#lightbox.boxed.svelte-4i8aka img.svelte-4i8aka{opacity:1}',
  map: null
};
const Graphics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender2 = true;
  let src;
  document.querySelector("#lightbox");
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender2 !== void 0)
    $$bindings.prerender(prerender2);
  $$result.css.add(css$4);
  return `<h4 class="${"svelte-4i8aka"}">The following graphic designs were created in Affinity Designer. Tap to expand.</h4>
<article class="${"svelte-4i8aka"}"><div class="${"imgWrap svelte-4i8aka"}"><img class="${"image svelte-4i8aka"}" src="${"/graphix/scooby.png"}" alt="${"scooby"}"></div>

	<div class="${"imgWrap svelte-4i8aka"}"><img class="${"image svelte-4i8aka"}" src="${"/graphix/gods.png"}" alt="${"gods"}"></div>

	<div class="${"imgWrap svelte-4i8aka"}"><img class="${"image svelte-4i8aka"}" src="${"/graphix/howl.png"}" alt="${"howl"}"></div>

	<div class="${"imgWrap svelte-4i8aka"}"><img class="${"image svelte-4i8aka"}" src="${"/graphix/cig.png"}" alt="${"cig"}"></div>

	<div class="${"imgWrap svelte-4i8aka"}"><img class="${"image svelte-4i8aka"}" src="${"/graphix/basenji.png"}" alt="${"basenji"}"></div>

	<div class="${"imgWrap svelte-4i8aka"}"><img class="${"image svelte-4i8aka"}" src="${"/graphix/oasis.png"}" alt="${"oasis"}"></div></article>

<div id="${"lightbox"}" class="${["svelte-4i8aka", ""].join(" ").trim()}"><img${add_attribute("src", src, 0)} alt="${"expanded view"}" class="${"svelte-4i8aka"}">
</div>`;
});
var DS_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@keyframes svelte-1phmfbo-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-1phmfbo-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}",
  map: null
};
const DS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section>Design Systems.
</section>`;
});
var Misc_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@keyframes svelte-1phmfbo-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-1phmfbo-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}",
  map: null
};
const Misc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section>Misc.
</section>`;
});
var TabsContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-djmm9f-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-djmm9f-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}#wrapper.svelte-djmm9f.svelte-djmm9f{padding:0 0 64px 0}.transitioner.svelte-djmm9f.svelte-djmm9f{display:grid;grid-template-rows:1;grid-template-columns:1}.transitioner.svelte-djmm9f>.svelte-djmm9f{grid-row:1;grid-column:1}",
  map: null
};
const TabsContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabItems = [
    { id: "0", text: "Interaction Design" },
    { id: "1", text: "Graphics" },
    { id: "2", text: "Design Systems" },
    { id: "3", text: "Miscellaneous" }
  ];
  let currentTab;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="${"wrapper"}" class="${"svelte-djmm9f"}">${`${validate_component(Tabs, "Tabs").$$render($$result, {
      items: tabItems,
      activeTabValue: currentTab
    }, {
      activeTabValue: ($$value) => {
        currentTab = $$value;
        $$settled = false;
      }
    }, {})}`}</div>



<div class="${"transitioner svelte-djmm9f"}">${currentTab === 0 ? `<div class="${"content svelte-djmm9f"}">${validate_component(IXD, "IXD").$$render($$result, {}, {}, {})}</div>` : ``}

  ${currentTab === 1 ? `<div class="${"content svelte-djmm9f"}">${validate_component(Graphics, "Graphics").$$render($$result, {}, {}, {})}</div>` : ``}

  ${currentTab === 2 ? `<div class="${"content svelte-djmm9f"}">${validate_component(DS, "DS").$$render($$result, {}, {}, {})}</div>` : ``}

  ${currentTab === 3 ? `<div class="${"content svelte-djmm9f"}">${validate_component(Misc, "Misc").$$render($$result, {}, {}, {})}</div>` : ``}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var studio_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-18mf466-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-18mf466-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}section.svelte-18mf466{margin-top:64px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Studio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Studio | Nicholas Tobat</title>`, ""}`, ""}

<main><header><div class="${"text"}"><h1>Studio</h1>
      <h3>I make stuff sometimes, in a variety of mediums.</h3></div></header>

  <section class="${"svelte-18mf466"}">${validate_component(TabsContent, "TabsContent").$$render($$result, {}, {}, {})}</section>

</main>`;
});
export { Studio as default, hydrate, prerender, router };
