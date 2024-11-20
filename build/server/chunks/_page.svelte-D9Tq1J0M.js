import { I as push, Y as ensure_array_like, K as pop } from './index-ByIwMlcW.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let scores = [];
  let username = "";
  let contact = "";
  let score = 0;
  let xten = 0;
  const each_array = ensure_array_like(scores);
  $$payload.out += `<header><h1 class="text-2xl font-bold text-center">Coding Lab</h1></header> <div class="flex flex-col lg:flex-row lg:justify-between"><form class="lg:basis-1/2"><div class="border border-slate-100 shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-md bg-white px-3 py-4 m-4 bg-opacity-70 hover:bg-opacity-100 transition-all"><h2 class="font-semibold text-xl text-center pb-1 mb-3 border-b border-slate-300 border-dashed">점수 등록</h2> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">이름</p></h3> <label for="username"></label><input class="config border rounded-sm p-2 w-full h-12 text-xl" name="username" id="username"${attr("value", username)}></div> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">연락처</p></h3> <label for="contact"></label><input class="config border rounded-sm p-2 w-full h-12 text-xl" name="contact" id="contact"${attr("value", contact)}></div> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">점수</p></h3> <label for="score"></label><input class="config border rounded-sm p-2 w-full h-12 text-xl" name="score" id="score"${attr("value", score)}></div> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">X-Ten 개수</p></h3> <label for="xten"></label> <input class="config border rounded-sm p-2 w-full h-12 text-xl" name="xten" id="xten"${attr("value", xten)}></div> <input type="submit" class="bg-white text-slate-900 border border-slate-200 shadow-xl hover:bg-gray-50 ease-in-out duration-200 rounded-md px-4 w-full" value="등록"> <p id="error" class="text-red-600 text-center mt-2" style="display: none">모든 정보를 입력해주세요</p></div></form> <form class="lg:basis-1/2"><div class="border border-slate-100 shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-md bg-white px-3 py-4 m-4 bg-opacity-70 hover:bg-opacity-100 transition-all"><h2 class="font-semibold text-xl text-center pb-1 mb-3 border-b border-slate-300 border-dashed">점수 불러오기</h2> <input type="submit" value="데이터 불러오기" class="bg-white text-slate-900 border border-slate-200 shadow-xl hover:bg-gray-50 ease-in-out duration-200 rounded-md px-4 w-full"> <div class="mb-4 last:mb-0 mt-5" id="getScore"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let score2 = each_array[$$index];
    $$payload.out += `<div${attr("id", score2.id.toString())} class="border-grey-100 border-2 m-1 rounded-xl p-1"><h5>ID: ${escape_html(score2.id)}</h5> <h5>이름: ${escape_html(score2.username)}</h5> <h5>연락처: ${escape_html(score2.contact)}</h5> <h5>점수: ${escape_html(score2.score)}</h5> <h5>X-ten: ${escape_html(score2.xten)}</h5></div>`;
  }
  $$payload.out += `<!--]--></div></div></form></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D9Tq1J0M.js.map
