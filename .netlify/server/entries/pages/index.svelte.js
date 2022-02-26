var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_3adfe52b = require("../../chunks/index-3adfe52b.js");
var import_fuse = require("fuse.js");
[
  {
    name: "apple",
    verdict: "good",
    evidence: [
      {
        foodName: "apple",
        verdictSupported: "good",
        sourceName: "American Kennel Club",
        sourceURL: new URL("https://www.akc.org/expert-advice/nutrition/can-dogs-eat-apples/"),
        quote: "Yes, apples are good for dogs. Apples are a great source of vitamin C, vitamin A, potassium, and antioxidants. They\u2019re chock full of fiber, especially in the peels, which helps dogs maintain a healthy weight while assisting with their digestion.",
        caveats: ["Eating an excess of apples can lead to your dog experiencing a bellyache or diarrhea, so always serve them in moderation."]
      },
      {
        foodName: "apple",
        verdictSupported: "good",
        sourceName: "Purina",
        sourceURL: new URL("https://www.purina.com/articles/dog/nutrition/can-dogs-eat-apples"),
        quote: "Dogs can have apples. They are a good fruit to include in your treating routine.",
        caveats: [
          "Dogs should not eat the seeds in apples... That means you can\u2019t serve your dog a whole apple.",
          "[Apples should only make up] 10 percent of your dog's daily calories."
        ]
      }
    ],
    aka: ["apples"]
  },
  {
    name: "grape",
    verdict: "bad",
    evidence: [
      {
        foodName: "grape",
        verdictSupported: "bad",
        sourceName: "American Kennel Club",
        sourceURL: new URL("https://www.akc.org/expert-advice/nutrition/can-dogs-eat-grapes/"),
        quote: "No, dogs should never eat grapes. Grapes and raisins are known to be highly toxic to dogs..."
      }
    ],
    aka: ["grapes", "raisin", "raisins"]
  }
];
const subscriber_queue = [];
function writable(value, start = import_index_3adfe52b.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_3adfe52b.a)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_3adfe52b.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_3adfe52b.n;
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
const focusedFood = writable({});
const Search = (0, import_index_3adfe52b.c)(($$result, $$props, $$bindings, slots) => {
  let { currentQuery = "..." } = $$props;
  if ($$props.currentQuery === void 0 && $$bindings.currentQuery && currentQuery !== void 0)
    $$bindings.currentQuery(currentQuery);
  return `<datalist id="${"search-suggestions"}"></datalist>
<input type="${"text"}" id="${"searchbar"}"${(0, import_index_3adfe52b.b)("placeholder", currentQuery, 0)} list="${"search-suggestions"}" autocomplete="${"off"}">`;
});
const DISCLAIMER = "<strong>DISCLAIMER</strong> Not medical advice. DogEatBad.com is a non-professional site intended for quick access to more knowledgeable sources. When in doubt, consult a veterinarian. Content quoted is owned by their respective sources as cited; no infringement is intended, so kindly ask for removal before suing.";
var foodCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1nwslj1{border-radius:50%;aspect-ratio:1.69;border-width:15}",
  map: null
};
const FoodCard = (0, import_index_3adfe52b.c)(($$result, $$props, $$bindings, slots) => {
  let $focusedFood, $$unsubscribe_focusedFood;
  $$unsubscribe_focusedFood = (0, import_index_3adfe52b.d)(focusedFood, (value) => $focusedFood = value);
  let { id } = $$props;
  const cardElem = document.getElementById("focused-food-card");
  if (!$focusedFood.name)
    cardElem.setAttribute("hidden", "true");
  const drawFocusedFoodCard = () => {
    cardElem.setAttribute("hidden", "false");
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  {
    drawFocusedFoodCard();
  }
  $$unsubscribe_focusedFood();
  return `<div${(0, import_index_3adfe52b.b)("id", id, 0)} class="${"svelte-1nwslj1"}"><h1>${(0, import_index_3adfe52b.e)($focusedFood.name)}</h1>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-4ekamv{padding:10%;max-width:900}",
  map: null
};
const Routes = (0, import_index_3adfe52b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-4ekamv"}"><h1 id="${"action-header"}"><span id="${"eponym"}">Dog ate</span>
        ${(0, import_index_3adfe52b.v)(Search, "Search").$$render($$result, {}, {}, {})}</h1> 
    ${(0, import_index_3adfe52b.v)(FoodCard, "FoodCard").$$render($$result, { id: "focused-food-card" }, {}, {})}
    <footer id="${"disclaimer"}"><!-- HTML_TAG_START -->${DISCLAIMER}<!-- HTML_TAG_END --></footer>
</main>`;
});
module.exports = __toCommonJS(stdin_exports);
