import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape, d as createEventDispatcher, n as null_to_empty, f as noop, h as safe_not_equal, i as each, t as tick } from "../../chunks/index-abd7ce05.js";
import { I as Icon } from "../../chunks/Icon-3e43faec.js";
import { b as base } from "../../chunks/paths-6758d194.js";
var logo = "/2022-folio/_app/assets/logo-c93b601c.svg";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var NavLink_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '@keyframes svelte-16thw0k-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-16thw0k-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}a.svelte-16thw0k.svelte-16thw0k{display:block;position:relative;height:40px;width:40px;border-radius:4px;display:flex;align-items:center;justify-content:center;transition:background-color 400ms}a.active.svelte-16thw0k.svelte-16thw0k{background-color:rgba(255, 255, 255, 0.24)}a.active.svelte-16thw0k.svelte-16thw0k:hover{background-color:rgba(255, 255, 255, 0.32)}a.svelte-16thw0k.svelte-16thw0k:hover{background-color:rgba(255, 255, 255, 0.12)}a.svelte-16thw0k:hover span.ttText.svelte-16thw0k{visibility:visible;opacity:1}a.svelte-16thw0k.svelte-16thw0k:not(:last-child){margin-bottom:40px}a.svelte-16thw0k>svg{fill:#fafafa}a.svelte-16thw0k span.ttText.svelte-16thw0k{display:block;width:max-content;visibility:hidden;opacity:0;position:absolute;left:64px;font-size:14px;line-height:16px;color:#fafafa;background-color:#111;padding:4px 8px;border-radius:4px;z-index:99;transition:opacity 600ms 400ms}a.svelte-16thw0k span.ttText.svelte-16thw0k::after{content:" ";position:absolute;top:50%;right:100%;margin-top:-4px;border-width:4px;border-style:solid;border-color:transparent #111 transparent transparent}',
  map: null
};
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { href } = $$props;
  let { name } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$6);
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)} class="${["svelte-16thw0k", $page.url.pathname.includes(href) ? "active" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { title }, {}, {})}
  <span class="${"ttText svelte-16thw0k"}">${escape(name)}</span>
</a>`;
});
var SideNav_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '@keyframes svelte-fkv5bo-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-fkv5bo-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}nav.container.svelte-fkv5bo.svelte-fkv5bo{width:64px;background-color:#111;position:fixed;top:0;left:0;border-right:1px solid #fafafa;height:calc(100vh - 104px);padding:40px 8px 64px;display:flex;flex-flow:column nowrap;align-items:center;justify-content:space-between;z-index:999}nav.container.svelte-fkv5bo #logo a.svelte-fkv5bo{background-color:#fafafa;display:block;height:40px;width:40px;border-radius:4px;display:flex;align-items:center;justify-content:center}nav.container.svelte-fkv5bo #logo a:hover span.ttText.svelte-fkv5bo{visibility:visible;opacity:1}nav.container.svelte-fkv5bo span.ttText.svelte-fkv5bo{display:block;width:max-content;visibility:hidden;opacity:0;position:absolute;left:84px;font-size:14px;line-height:16px;color:#fafafa;background-color:#111;padding:4px 8px;border-radius:4px;z-index:99;transition:opacity 600ms 400ms}nav.container.svelte-fkv5bo span.ttText.svelte-fkv5bo::after{content:" ";position:absolute;top:50%;right:100%;margin-top:-4px;border-width:4px;border-style:solid;border-color:transparent #111 transparent transparent}',
  map: null
};
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<nav class="${"container svelte-fkv5bo"}"><div id="${"logo"}"><a href="${"/"}" class="${"svelte-fkv5bo"}"><img${add_attribute("src", logo, 0)} alt="${"Logo"}">
      <span class="${"ttText svelte-fkv5bo"}">Home</span></a></div>
  <div id="${"links"}">${validate_component(NavLink, "NavLink").$$render($$result, {
    name: "Product Design",
    href: base + "/prod",
    title: "design"
  }, {}, {})}
    ${validate_component(NavLink, "NavLink").$$render($$result, {
    name: "Studio",
    href: "/studio",
    title: "studio"
  }, {}, {})}
    
    ${validate_component(NavLink, "NavLink").$$render($$result, {
    name: "Blue Sky",
    href: "/bluesky",
    title: "sky"
  }, {}, {})}</div>
</nav>`;
});
var Snackbar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '@keyframes svelte-fy5aju-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-fy5aju-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}article.svelte-fy5aju.svelte-fy5aju{background-color:#111;color:#fafafa;padding:0.75rem 1.5rem;border-radius:0.2rem;display:flex;align-items:center;margin:0 auto 0.5rem auto;width:20rem}article.svelte-fy5aju .text.svelte-fy5aju{font-family:"Days One"}button.svelte-fy5aju.svelte-fy5aju{color:#fafafa;background:transparent;border:0 none;padding:0;margin:0 0 0 auto;line-height:1;font-size:1rem;fill:#fafafa;cursor:pointer}',
  map: null
};
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { type = "error" } = $$props;
  let { dismissible = true } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  $$result.css.add(css$4);
  return `<article class="${escape(null_to_empty(type)) + " svelte-fy5aju"}" role="${"alert"}"><div class="${"text svelte-fy5aju"}">${slots.default ? slots.default({}) : ``}</div>

  ${dismissible ? `<button class="${"close svelte-fy5aju"}">${validate_component(Icon, "Icon").$$render($$result, { title: "close" }, {}, {})}</button>` : ``}
</article>`;
});
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const toasts = writable([]);
var Snackbars_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@keyframes svelte-6gbjsu-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-6gbjsu-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}section.svelte-6gbjsu{position:fixed;bottom:24px;left:0;right:0;width:100%;display:flex;margin-top:1rem;justify-content:center;flex-direction:column;z-index:1000}",
  map: null
};
const Snackbars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  $$result.css.add(css$3);
  $$unsubscribe_toasts();
  return `${$toasts ? `<section class="${"svelte-6gbjsu"}">${each($toasts, (toast) => {
    return `${validate_component(Snackbar, "Snackbar").$$render($$result, {
      type: toast.type,
      dismissible: toast.dismissible
    }, {}, {
      default: () => {
        return `${escape(toast.message)}`;
      }
    })}`;
  })}</section>` : ``}`;
});
var Clipboard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "textarea.svelte-w8w2mp{left:0;bottom:0;margin:0;padding:0;opacity:0;width:1px;height:1px;border:none;display:block;position:absolute}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { text } = $$props;
  let textarea;
  async function copy() {
    textarea.select();
    document.execCommand("Copy");
    await tick();
    textarea.blur();
    dispatch("copy");
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `${slots.default ? slots.default({ copy }) : ``}
<textarea class="${"svelte-w8w2mp"}"${add_attribute("this", textarea, 0)}>${escape(text)}</textarea>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@keyframes svelte-1iof2ed-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-1iof2ed-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}footer.svelte-1iof2ed.svelte-1iof2ed{margin:0 80px;padding:0 64px 40px 64px;width:calc(100% - 208px);font-family:"Forum"}footer.svelte-1iof2ed hr.svelte-1iof2ed{margin:40px 0}footer.svelte-1iof2ed div.sections.svelte-1iof2ed{margin:0 64px;display:flex;align-items:center;max-width:100%}footer.svelte-1iof2ed div.sections section p.svelte-1iof2ed,footer.svelte-1iof2ed div.sections section a.svelte-1iof2ed{font-size:18px;line-height:24px;color:#111}footer.svelte-1iof2ed div.sections section.svelte-1iof2ed:not(:first-child){margin-left:160px}footer.svelte-1iof2ed div.sections section.svelte-1iof2ed:last-child{flex-grow:2;display:flex;justify-content:flex-end;align-items:flex-end;align-self:end}footer.svelte-1iof2ed div.sections section:last-child a.svelte-1iof2ed{padding:8px;border-radius:8px;transition:background-color 600ms;cursor:pointer;height:32px}footer.svelte-1iof2ed div.sections section:last-child a .svelte-1iof2ed:globla(svg){height:32px;width:32px}footer.svelte-1iof2ed div.sections section:last-child a.svelte-1iof2ed:hover{background-color:rgba(0, 0, 0, 0.12)}footer.svelte-1iof2ed div.sections section.links .link.svelte-1iof2ed{display:flex;align-items:center;cursor:pointer}footer.svelte-1iof2ed div.sections section.links .link.svelte-1iof2ed:not(:last-child){margin-bottom:4px}footer.svelte-1iof2ed div.sections section.links .link button.svelte-1iof2ed{border:0;height:40px;width:40px;background-color:unset;border-radius:8px;padding:8px;transition:background-color 600ms;cursor:pointer}footer.svelte-1iof2ed div.sections section.links .link button.svelte-1iof2ed:hover{background-color:rgba(0, 0, 0, 0.12)}footer.svelte-1iof2ed div.sections section.links .link a.svelte-1iof2ed{text-decoration:underline;display:inline-block;padding:8px;border-radius:8px;transition:background-color 600ms;cursor:pointer}footer.svelte-1iof2ed div.sections section.links .link a.svelte-1iof2ed:hover{background-color:rgba(0, 0, 0, 0.12)}footer.darkmode.svelte-1iof2ed.svelte-1iof2ed{background-color:#111}footer.darkmode.svelte-1iof2ed div.sections section a.svelte-1iof2ed,footer.darkmode.svelte-1iof2ed div.sections section p.svelte-1iof2ed{color:#fafafa}footer.darkmode.svelte-1iof2ed div.sections section.links .link button.svelte-1iof2ed:hover{background-color:rgba(255, 255, 255, 0.12)}footer.darkmode.svelte-1iof2ed div.sections section.links .link button.svelte-1iof2ed svg{fill:#fafafa}footer.darkmode.svelte-1iof2ed div.sections section.links .link a.svelte-1iof2ed:hover{background-color:rgba(255, 255, 255, 0.12)}footer.darkmode.svelte-1iof2ed div.sections section:last-child a.svelte-1iof2ed svg{fill:#fafafa}footer.darkmode.svelte-1iof2ed div.sections section:last-child a.svelte-1iof2ed:hover{background-color:rgba(255, 255, 255, 0.12)}@media screen and (max-width: 600px){footer.svelte-1iof2ed div.sections.svelte-1iof2ed{flex-flow:column}footer.svelte-1iof2ed div.sections section.svelte-1iof2ed:not(:first-child){margin-top:32px;margin-left:unset}footer.svelte-1iof2ed div.sections section.svelte-1iof2ed:last-child{justify-content:flex-start}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.url.pathname);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<footer class="${["svelte-1iof2ed", $page.url.pathname.includes("/prod/") ? "darkmode" : ""].join(" ").trim()}"><hr class="${"svelte-1iof2ed"}">

  <div class="${"sections svelte-1iof2ed"}"><section class="${"svelte-1iof2ed"}"><p class="${"svelte-1iof2ed"}">This website is typeset in Forum &amp; Days One,<br class="${"svelte-1iof2ed"}">
        deployed through Github Pages, designed in Figma,<br class="${"svelte-1iof2ed"}">
        and developed in Svelte by yours truly.
        <br class="${"svelte-1iof2ed"}"><br class="${"svelte-1iof2ed"}">
        Last updated November 30 2021.
      </p></section>
    <section class="${"links svelte-1iof2ed"}"><div class="${"link svelte-1iof2ed"}">${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "ntobat@gmail.com" }, {}, {
    default: ({ copy }) => {
      return `<button title="${"Copy"}" class="${"svelte-1iof2ed"}">${validate_component(Icon, "Icon").$$render($$result, { title: "copy" }, {}, {})}</button>`;
    }
  })}
        <a href="${"//mailto:ntobat@gmail.com"}" target="${"_blank"}" title="${"Visit Link"}" class="${"svelte-1iof2ed"}">ntobat@gmail.com</a></div>
      <div class="${"link svelte-1iof2ed"}">${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "linkedin.com/in/nicktobat" }, {}, {
    default: ({ copy }) => {
      return `<button title="${"Copy"}" class="${"svelte-1iof2ed"}">${validate_component(Icon, "Icon").$$render($$result, { title: "copy" }, {}, {})}</button>`;
    }
  })}
        <a href="${"//linkedin.com/in/nicktobat"}" target="${"_blank"}" title="${"Visit Link"}" class="${"svelte-1iof2ed"}">linkedin.com/in/nicktobat</a></div>
      <div class="${"link svelte-1iof2ed"}">${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "github.com/nicktobat" }, {}, {
    default: ({ copy }) => {
      return `<button title="${"Copy"}" class="${"svelte-1iof2ed"}">${validate_component(Icon, "Icon").$$render($$result, { title: "copy" }, {}, {})}</button>`;
    }
  })}
        <a href="${"//github.com/nicktobat"}" target="${"_blank"}" title="${"Visit Link"}" class="${"svelte-1iof2ed"}">github.com/nicktobat</a></div></section>
    <section class="${"svelte-1iof2ed"}"><a href="${"/"}" class="${"svelte-1iof2ed"}">${validate_component(Icon, "Icon").$$render($$result, {
    title: "logo",
    width: "32px",
    height: "32px"
  }, {}, {})}</a></section></div>
  
  ${validate_component(Snackbars, "Snackbars").$$render($$result, {}, {}, {})}

</footer>`;
});
var PageTransitions_svelte_svelte_type_style_lang = "";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1phmfbo-btn-animate{0%{box-shadow:6px 6px #FF5429}12.25%{box-shadow:-6px 6px #FF5429, 10px -4px #2969FF}25%{box-shadow:-6px -6px #FF5429}37.5%{box-shadow:6px 6px #FF5429, -10px -4px #FF5429}50%{box-shadow:6px -6px #FFBF29}62.5%{box-shadow:-6px -6px #FF5429, 10px 4px #2969FF}75%{box-shadow:-6px 6px #FF5429}87.5%{box-shadow:6px -6px #FF5429, -10px 4px #FF5429}100%{box-shadow:6px 6px #FFBF29}}@keyframes svelte-1phmfbo-block-animate{0%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}33%{box-shadow:-32px -16px #111, -32px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) rotateY(20deg) rotateX(5deg) translate(16px) scale(1.05)}66%{box-shadow:-16px -16px #111, -16px 16px #111, 32px 16px #111, 32px -16px #111;transform:perspective(6000px) rotateY(-20deg) rotateX(-5deg) translate(-16px) scale(1.05)}100%{box-shadow:-16px -16px #111, -16px 16px #111, 16px 16px #111, 16px -16px #111;transform:perspective(6000px) scale(1.05)}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $page.url.pathname === $$props.href;
  $$unsubscribe_page();
  return `${validate_component(SideNav, "SideNav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
