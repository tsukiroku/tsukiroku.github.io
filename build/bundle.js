var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function x(){return p(" ")}function u(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function f(t){d=t}const m=[],g=[],h=[],$=[],b=Promise.resolve();let v=!1;function y(t){h.push(t)}const w=new Set;let k=0;function _(){const t=d;do{for(;k<m.length;){const t=m[k];k++,f(t),j(t.$$)}for(f(null),m.length=0,k=0;g.length;)g.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];w.has(e)||(w.add(e),e())}h.length=0}while(m.length);for(;$.length;)$.pop()();v=!1,w.clear(),f(t)}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const T=new Set;function L(t,e){t&&t.i&&(T.delete(t),t.i(e))}function C(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function E(t){t&&t.c()}function H(t,n,l,o){const{fragment:c,on_mount:i,on_destroy:a,after_update:p}=t.$$;c&&c.m(n,l),o||y((()=>{const n=i.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),p.forEach(y)}function M(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,b.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,s,l,o,c,a,p,x=[-1]){const u=d;f(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(u?u.$$.context:[])),callbacks:n(),dirty:x,skip_bound:!1,root:s.target||u.$$.root};p&&p(m.root);let g=!1;if(m.ctx=l?l(e,s.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),g&&z(e,t)),n})):[],m.update(),g=!0,r(m.before_update),m.fragment=!!o&&o(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();s.intro&&L(e.$$.fragment),H(e,s.target,s.anchor,s.customElement),_()}f(u)}class N{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,r,l,x;return{c(){n=a("button"),r=p(e[1]),u(n,"class","text-white bg-teal-700 hover:bg-teal-800 focus:ring-blue-300 rounded-lg px-24 py-2 mr-2 mb-2 md:px-16 md:py-2.5 md:mr-2 md:mb-2")},m(t,i){var a,p,u,d;c(t,n,i),o(n,r),l||(p="click",u=function(){s(e[0])&&e[0].apply(this,arguments)},(a=n).addEventListener(p,u,d),x=()=>a.removeEventListener(p,u,d),l=!0)},p(t,[n]){e=t,2&n&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,e[1])},i:t,o:t,d(t){t&&i(n),l=!1,x()}}}function I(t,e,n){let{onClick:r}=e,{button:s}=e;return t.$$set=t=>{"onClick"in t&&n(0,r=t.onClick),"button"in t&&n(1,s=t.button)},[r,s]}class O extends N{constructor(t){super(),A(this,t,I,P,l,{onClick:0,button:1})}}function S(e){let n,r,s,l,p,d,f,m,g,h;return f=new O({props:{button:"Projects",onClick:e[0]}}),g=new O({props:{button:"Github",onClick:e[1]}}),{c(){n=a("div"),r=a("div"),r.innerHTML='<p class="text-white text-5xl md:text-7xl">Hello</p> \n        <img class="w-14 h-14 md:w-24 md:h-24 pb-3 pl-3 md:pb-5 md:pl-5 bg-transparent animate-wave" src="https://twemoji.maxcdn.com/v/latest/svg/1f44b.svg" alt="twemoji"/>',s=x(),l=a("div"),l.innerHTML='<p class="text-gray-300 text-2xl md:text-3xl">다람쥐 헌 쳇바퀴에 타고파</p>',p=x(),d=a("div"),E(f.$$.fragment),m=x(),E(g.$$.fragment),u(r,"class","flex select-none"),u(l,"class","flex select-none"),u(d,"class","flex flex-col md:flex-row pt-7 select-none"),u(n,"class","flex flex-col justify-center items-center h-screen font-bold")},m(t,e){c(t,n,e),o(n,r),o(n,s),o(n,l),o(n,p),o(n,d),H(f,d,null),o(d,m),H(g,d,null),h=!0},p:t,i(t){h||(L(f.$$.fragment,t),L(g.$$.fragment,t),h=!0)},o(t){C(f.$$.fragment,t),C(g.$$.fragment,t),h=!1},d(t){t&&i(n),M(f),M(g)}}}function q(t){return[()=>window.location.href="#projects",()=>window.open("https://github.com/tsukiroku")]}class B extends N{constructor(t){super(),A(this,t,q,S,l,{})}}function D(e){let n;return{c(){n=a("div"),n.innerHTML='<div class="flex"><a href="https://github.com/tsukiroku/tiny"><p class="text-white hover:text-gray-300 text-4xl pb-7 md:text-6xl md:pl-7">Tiny Interpreter</p></a></div> \n    <div class="flex pb-5"><a href="https://github.com/tsukiroku/tiny"><img class="w-[50rem] bg-transparent" src="../../../resources/projects_tiny.png" alt="tiny"/></a></div> \n    <div class="flex pb-5 md:pl-7"><p class="text-gray-300 text-xl md:text-2xl">이름 그대로</p> \n        <p class="text-green-400 text-xl md:text-2xl pl-1.5">TINY</p> \n        <p class="text-gray-300 text-xl md:text-2xl">한 인터프리터 프로젝트입니다.</p></div> \n    <div class="flex text-zinc-500 text-xl md:text-2xl md:pl-7"><p class="text-amber-400">CLI &amp; REPL</p> \n        <p class="pr-2">,</p> \n        <a href="https://tsukiroku.github.io/tiny"><p class="text-orange-400 hover:text-orange-500">웹 Playground</p></a> \n        <p>로 사용해보실 수 있습니다.</p></div>',u(n,"class","flex flex-col justify-center h-screen items-center selection:text-stone-400 font-bold"),u(n,"id","projects")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class G extends N{constructor(t){super(),A(this,t,null,D,l,{})}}function R(e){let n;return{c(){n=a("div"),n.innerHTML='<div class="flex" id="projects"><a href="https://github.com/tsukiroku/type"><p class="text-white hover:text-gray-300 text-4xl pb-7 md:text-6xl md:pr-7">Type</p></a></div> \n    <div class="flex pb-5 md:pr-7"><p class="text-green-400 text-xl md:text-2xl">타입스크립트</p> \n        <p class="text-gray-300 text-xl md:text-2xl pl-1.5">의 타입 시스템을 이용한</p> \n        <p class="text-green-400 text-xl md:text-2xl pl-1.5">타입 레벨 (Type Level)</p> \n        <p class="text-gray-300 text-xl md:text-2xl pl-1.5">프로젝트입니다.</p></div>',u(n,"class","flex flex-col justify-center h-screen items-center selection:text-stone-400 font-bold"),u(n,"id","type")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class Y extends N{constructor(t){super(),A(this,t,null,R,l,{})}}function F(e){let n;return{c(){n=a("div"),n.innerHTML='<div class="flex"><a href="https://github.com/tsukiroku/discord-interaction-template"><p class="text-white hover:text-gray-300 text-4xl pb-7 md:text-6xl md:pr-7">Discord interaction template</p></a></div> \n    <div class="flex pb-5 md:pr-7"><p class="text-gray-300 text-xl md:text-2xl">디스코드</p> \n        <p class="text-green-400 text-xl md:text-2xl pl-1.5">인터렉션(상호작용)</p> \n        <p class="text-gray-300 text-xl md:text-2xl">을 위한 템플릿입니다.</p></div> \n    <div class="flex text-zinc-500 text-xl md:text-2xl md:pr-7"><p>슬래시 명령어 등록 및</p></div> \n    <div class="flex text-zinc-500 text-xl md:text-2xl md:pr-7"><p class="text-amber-400">슬래시 명령어</p> \n        <p class="pr-2">,</p> \n        <p class="text-amber-400">버튼</p> \n        <p class="pr-2">,</p> \n        <p class="text-amber-400">선택 메뉴</p> \n        <p class="pr-2">,</p> \n        <p class="text-amber-400">컨텍스트 메뉴</p> \n        <p class="pr-2">,</p> \n        <p class="text-amber-400 pr-1">텍스트 인풋 모달</p></div> \n    <div class="flex text-zinc-500 text-xl md:text-2xl md:pr-7"><p>등의 상호작용 예제가 제공됩니다.</p></div>',u(n,"class","flex flex-col justify-center h-screen items-center selection:text-stone-400 font-bold"),u(n,"id","dexample")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class J extends N{constructor(t){super(),A(this,t,null,F,l,{})}}function K(e){let n,r,s,l,o,a,p,u;return n=new B({}),s=new G({}),o=new J({}),p=new Y({}),{c(){E(n.$$.fragment),r=x(),E(s.$$.fragment),l=x(),E(o.$$.fragment),a=x(),E(p.$$.fragment)},m(t,e){H(n,t,e),c(t,r,e),H(s,t,e),c(t,l,e),H(o,t,e),c(t,a,e),H(p,t,e),u=!0},p:t,i(t){u||(L(n.$$.fragment,t),L(s.$$.fragment,t),L(o.$$.fragment,t),L(p.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),C(s.$$.fragment,t),C(o.$$.fragment,t),C(p.$$.fragment,t),u=!1},d(t){M(n,t),t&&i(r),M(s,t),t&&i(l),M(o,t),t&&i(a),M(p,t)}}}return new class extends N{constructor(t){super(),A(this,t,null,K,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
