var app=function(t){"use strict";function e(){}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let h;function b(t){h=t}const y=[],x=[],v=[],w=[],k=Promise.resolve();let j=!1;function _(t){v.push(t)}const T=new Set;let E=0;function N(){const t=h;do{for(;E<y.length;){const t=y[E];E++,b(t),A(t.$$)}for(b(null),y.length=0,E=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];T.has(e)||(T.add(e),e())}v.length=0}while(y.length);for(;w.length;)w.pop()();j=!1,T.clear(),b(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const C=new Set;function M(t,e){t&&t.i&&(C.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),undefined.c.push((()=>{C.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function D(t){t&&t.c()}function S(t,e,r,s){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),s||_((()=>{const e=a.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(_)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(y.push(t),j||(j=!0,k.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,n,c,s,i,a,u,f=[-1]){const m=h;b(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(m?m.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:n.target||m.$$.root};u&&u(d.root);let p=!1;if(d.ctx=c?c(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),p&&B(t,e)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();n.intro&&M(t.$$.fragment),S(t,n.target,n.anchor,n.customElement),N()}b(m)}class O{$destroy(){G(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var L={light:{background:"#fafafa",default:"#000000",description:"#3d3d3d",nextText:"#4a5ef7",projectName:"#121212",projectDescription:"#303030",socialGithub:"#2b2b2b",socialTwitter:"#0366fc",socialMail:"#03b1fc"},dark:{background:"#151515",default:"#ffffff",description:"#dbdbdb",nextText:"#fad20c",projectName:"#e8e8e8",projectDescription:"#c9c9c9",socialGithub:"#cccccc",socialTwitter:"#0366fc",socialMail:"#0081bd"}}[window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"];function q(t){let n,r,c,s,$,h,b,y,x,v;return{c(){n=u("div"),r=u("p"),c=f("tsukiroku"),s=m(),$=u("p"),$.textContent="Student developers in South Korea.",h=m(),b=u("p"),y=f("projects"),p(r,"class","title bounce svelte-1oiyfx8"),g(r,"color",L.default),p(r,"id","title"),p($,"class","description svelte-1oiyfx8"),p(b,"class","goto-project svelte-1oiyfx8"),g(b,"color",L.nextText),p(n,"class","container svelte-1oiyfx8"),p(n,"id",t[0])},m(e,o){a(e,n,o),i(n,r),i(r,c),i(n,s),i(n,$),i(n,h),i(n,b),i(b,y),x||(v=[d(r,"click",t[1]),d(b,"click",t[2])],x=!0)},p(t,[e]){1&e&&p(n,"id",t[0])},i:e,o:e,d(t){t&&l(n),x=!1,o(v)}}}function F(t,e,n){let{id:r="#title"}=e;return t.$$set=t=>{"id"in t&&n(0,r=t.id)},[r,()=>{const t=document.getElementById("title");t.style.animationName="none",requestAnimationFrame((()=>setTimeout((()=>t.style.animationName=""),0)))},()=>{location.href="#projects",document.getElementsByClassName("goto-project")[0].style.animationPlayState="paused"}]}class K extends O{constructor(t){super(),I(this,t,F,q,s,{id:0})}}function Y(t){let n,r,o,c;return{c(){n=u("p"),r=f("Github ->"),p(n,"class","github svelte-z6165o"),g(n,"color",L.nextText)},m(e,s){a(e,n,s),i(n,r),o||(c=d(n,"click",t[0]),o=!0)},p:e,i:e,o:e,d(t){t&&l(n),o=!1,c()}}}function z(t){return[()=>location.href=ot]}class R extends O{constructor(t){super(),I(this,t,z,Y,s,{})}}function U(t){let n,r,o,c,s,d,h,b,y,x;return{c(){n=u("div"),r=u("a"),o=u("p"),c=f(t[0]),d=m(),h=u("p"),b=f(t[1]),y=m(),x=u("br"),p(o,"class","name svelte-4gtae"),g(o,"color",L.projectName),p(o,"id",s=`project-${t[0]}`),p(r,"href",t[2]),p(r,"class","svelte-4gtae"),p(h,"class","description svelte-4gtae"),g(h,"color",L.projectDescription),p(x,"class","svelte-4gtae"),p(n,"class","project svelte-4gtae")},m(t,e){a(t,n,e),i(n,r),i(r,o),i(o,c),i(n,d),i(n,h),i(h,b),i(n,y),i(n,x)},p(t,[e]){1&e&&$(c,t[0]),1&e&&s!==(s=`project-${t[0]}`)&&p(o,"id",s),4&e&&p(r,"href",t[2]),2&e&&$(b,t[1])},i:e,o:e,d(t){t&&l(n)}}}function W(t,e,n){let{name:r}=e,{description:o}=e,{url:c}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name),"description"in t&&n(1,o=t.description),"url"in t&&n(2,c=t.url)},[r,o,c]}class H extends O{constructor(t){super(),I(this,t,W,U,s,{name:0,description:1,url:2})}}function J(t){let n,r,o,c,s,$,h,b,y,x,v,w,k,j,_,T,E,N,A,C,B;return s=new H({props:{name:"type",description:"Type level programming.",url:`${ot}type`}}),h=new H({props:{name:"gist",description:"Asynchronous gist API wrapper.",url:"https://github.com/recalculated/gist"}}),y=new H({props:{name:"twitter-readme-profile",description:"Your twitter profile in README.",url:"https://github.com/recalculated/twitter-readme-profile"}}),v=new H({props:{name:"tsukiroku.github.io",description:"Personal website.",url:`${ot}tsukiroku.github.io`}}),k=new H({props:{name:"discord-interaction-template",description:"Discord interaction template.",url:`${ot}discord-interaction-template`}}),_=new H({props:{name:"share",description:"CLI based, simple file sharing.",url:`${ot}share`}}),{c(){n=u("div"),r=u("p"),o=f("Projects"),c=m(),D(s.$$.fragment),$=m(),D(h.$$.fragment),b=m(),D(y.$$.fragment),x=m(),D(v.$$.fragment),w=m(),D(k.$$.fragment),j=m(),D(_.$$.fragment),T=m(),E=u("p"),N=f("socials"),p(r,"class","title svelte-7j5jji"),g(r,"color",L.default),p(r,"id","projects"),p(n,"class","project svelte-7j5jji"),p(E,"class","goto-socials svelte-7j5jji"),g(E,"color",L.nextText)},m(e,l){a(e,n,l),i(n,r),i(r,o),i(n,c),S(s,n,null),i(n,$),S(h,n,null),i(n,b),S(y,n,null),i(n,x),S(v,n,null),i(n,w),S(k,n,null),i(n,j),S(_,n,null),a(e,T,l),a(e,E,l),i(E,N),A=!0,C||(B=d(E,"click",t[0]),C=!0)},p:e,i(t){A||(M(s.$$.fragment,t),M(h.$$.fragment,t),M(y.$$.fragment,t),M(v.$$.fragment,t),M(k.$$.fragment,t),M(_.$$.fragment,t),A=!0)},o(t){P(s.$$.fragment,t),P(h.$$.fragment,t),P(y.$$.fragment,t),P(v.$$.fragment,t),P(k.$$.fragment,t),P(_.$$.fragment,t),A=!1},d(t){t&&l(n),G(s),G(h),G(y),G(v),G(k),G(_),t&&l(T),t&&l(E),C=!1,B()}}}function Q(t){return[()=>{location.href="#socials",document.getElementsByClassName("goto-socials")[0].style.animationPlayState="paused"}]}class V extends O{constructor(t){super(),I(this,t,Q,J,s,{})}}function X(t){let n,r,o,c,s,d,h;return{c(){n=u("div"),r=u("a"),o=u("p"),c=f(t[0]),d=m(),h=u("br"),p(o,"class","name svelte-1g62sxm"),g(o,"color",t[2]),p(o,"id",s=`social-${t[0]}`),p(r,"href",t[1]),p(r,"class","svelte-1g62sxm"),p(h,"class","svelte-1g62sxm"),p(n,"class","social svelte-1g62sxm")},m(t,e){a(t,n,e),i(n,r),i(r,o),i(o,c),i(n,d),i(n,h)},p(t,[e]){1&e&&$(c,t[0]),4&e&&g(o,"color",t[2]),1&e&&s!==(s=`social-${t[0]}`)&&p(o,"id",s),2&e&&p(r,"href",t[1])},i:e,o:e,d(t){t&&l(n)}}}function Z(t,e,n){let{name:r}=e,{url:o}=e,{color:c}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name),"url"in t&&n(1,o=t.url),"color"in t&&n(2,c=t.color)},[r,o,c]}class tt extends O{constructor(t){super(),I(this,t,Z,X,s,{name:0,url:1,color:2})}}function et(t){let n,r,o,c,s,d,$,h,b,y,x,v,w,k;return s=new tt({props:{name:"@tsukiroku",url:ot,color:L.socialGithub}}),$=new tt({props:{name:"@recalculated",url:"https://github.com/recalculated",color:L.socialGithub}}),b=new tt({props:{name:"Twitter",url:"https://twitter.com/tsukiroku_t",color:L.socialTwitter}}),x=new tt({props:{name:"YouTube",url:"https://www.youtube.com/channel/UCD6IAnWoshkwFcChabKD8gw",color:L.socialMail}}),w=new tt({props:{name:"Mail",url:"mailto:tsukiroku@yahoo.com",color:L.socialMail}}),{c(){n=u("div"),r=u("p"),o=f("Socials"),c=m(),D(s.$$.fragment),d=m(),D($.$$.fragment),h=m(),D(b.$$.fragment),y=m(),D(x.$$.fragment),v=m(),D(w.$$.fragment),p(r,"class","title svelte-1mdan9y"),g(r,"color",L.default),p(r,"id","socials"),p(n,"class","socials svelte-1mdan9y")},m(t,e){a(t,n,e),i(n,r),i(r,o),i(n,c),S(s,n,null),i(n,d),S($,n,null),i(n,h),S(b,n,null),i(n,y),S(x,n,null),i(n,v),S(w,n,null),k=!0},p:e,i(t){k||(M(s.$$.fragment,t),M($.$$.fragment,t),M(b.$$.fragment,t),M(x.$$.fragment,t),M(w.$$.fragment,t),k=!0)},o(t){P(s.$$.fragment,t),P($.$$.fragment,t),P(b.$$.fragment,t),P(x.$$.fragment,t),P(w.$$.fragment,t),k=!1},d(t){t&&l(n),G(s),G($),G(b),G(x),G(w)}}}class nt extends O{constructor(t){super(),I(this,t,null,et,s,{})}}function rt(t){let n,r,o,c,s,i,u,f;return n=new K({}),o=new R({}),s=new V({}),u=new nt({}),{c(){D(n.$$.fragment),r=m(),D(o.$$.fragment),c=m(),D(s.$$.fragment),i=m(),D(u.$$.fragment)},m(t,e){S(n,t,e),a(t,r,e),S(o,t,e),a(t,c,e),S(s,t,e),a(t,i,e),S(u,t,e),f=!0},p:e,i(t){f||(M(n.$$.fragment,t),M(o.$$.fragment,t),M(s.$$.fragment,t),M(u.$$.fragment,t),f=!0)},o(t){P(n.$$.fragment,t),P(o.$$.fragment,t),P(s.$$.fragment,t),P(u.$$.fragment,t),f=!1},d(t){G(n,t),t&&l(r),G(o,t),t&&l(c),G(s,t),t&&l(i),G(u,t)}}}document.body.style.backgroundColor=L.background;const ot="https://github.com/tsukiroku/";var ct=new class extends O{constructor(t){super(),I(this,t,null,rt,s,{})}}({target:document.body});return t.default=ct,t.github=ot,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
