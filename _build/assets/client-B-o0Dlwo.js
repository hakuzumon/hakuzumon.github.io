const __vite__fileDeps=["assets/_...404_-DUYVcV2b.js","assets/routing-DXBUw-N3.js","assets/components-Dro7JrPp.js","assets/about-6s4VW_6B.js","assets/Counter-B3N4pNo9.js","assets/index-BC7X7foe.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as Z,a as R,b as J,d as X,e as p,g as Y,R as Q,u as ee,s as O,f as te,S as H,o as ne,h as re,i as oe,j as ae,k as ie,l as W,m as se,n as le,p as ue,q as ce,r as de,t as fe,v as y,w as A,x as S,y as j,z as _,A as $,B as he,C as me,D as pe,E as z,F as ge,G as be,H as we}from"./routing-DXBUw-N3.js";const C="Invariant Violation",{setPrototypeOf:Ee=function(e,n){return e.__proto__=n,e}}=Object;class N extends Error{framesToPop=1;name=C;constructor(n=C){super(typeof n=="number"?`${C}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),Ee(this,N.prototype)}}function L(e,n){if(!e)throw new N(n)}const ve=/^[A-Za-z]:\//;function ye(e=""){return e&&e.replace(/\\/g,"/").replace(ve,n=>n.toUpperCase())}const $e=/^[/\\]{2}/,ke=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Re=/^[A-Za-z]:$/,Ae=function(e){if(e.length===0)return".";e=ye(e);const n=e.match($e),t=P(e),r=e[e.length-1]==="/";return e=Se(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Re.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!P(e)?`/${e}`:e)},V=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":Ae(n.replace(/\/\/+/g,"/"))};function Se(e,n){let t="",r=0,o=-1,i=0,l=null;for(let a=0;a<=e.length;++a){if(a<e.length)l=e[a];else{if(l==="/")break;l="/"}if(l==="/"){if(!(o===a-1||i===1))if(i===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(o+1,a)}`:t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else l==="."&&i!==-1?++i:i=-1}return t}const P=function(e){return ke.test(e)};function _e(e){return`virtual:${e}`}function Ce(e){return e.handler?.endsWith(".html")?P(e.handler)?e.handler:V(e.root,e.handler):`#vinxi/handler/${e.name}`}const Le=new Proxy({},{get(e,n){return L(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:_e(Ce({name:n})),baseURL:"/hakuzumon.github.io/_build",chunks:new Proxy({},{get(t,r){L(typeof r=="string","Chunk expected");let o=V("/hakuzumon.github.io/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(t,r){L(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Le;const xe=e=>n=>{const{base:t}=n,r=Z(()=>n.children),o=R(()=>J(r(),n.base||""));let i;const l=X(e,o,()=>i,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(l),p(Q.Provider,{value:l,get children(){return p(Pe,{routerState:l,get root(){return n.root},get load(){return n.rootLoad},get children(){return[R(()=>(i=Y())&&null),p(Ne,{routerState:l,get branches(){return o()}})]}})}})};function Pe(e){const n=e.routerState.location,t=e.routerState.params,r=R(()=>e.load&&ee(()=>{O(!0),e.load({params:t,location:n,intent:te()||"initial"}),O(!1)}));return p(H,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>p(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Ne(e){const n=[];let t;const r=R(ne(e.routerState.matches,(o,i,l)=>{let a=i&&o.length===i.length;const c=[];for(let s=0,h=o.length;s<h;s++){const g=i&&i[s],b=o[s];l&&g&&b.route.key===g.route.key?c[s]=l[s]:(a=!1,n[s]&&n[s](),oe(w=>{n[s]=w,c[s]=ae(e.routerState,c[s-1]||e.routerState.base,M(()=>r()[s+1]),()=>e.routerState.matches()[s])}))}return n.splice(o.length).forEach(s=>s()),l&&a?l:(t=c[0],c)}));return M(()=>r()&&t)()}const M=e=>()=>p(H,{get when(){return e()},keyed:!0,children:n=>p(re.Provider,{value:n,get children(){return n.outlet()}})});function Te([e,n],t,r){return[e,r?o=>n(r(o)):n]}function Ie(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function De(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=Te(ie(t(e.get()),{equals:(o,i)=>o.value===i.value&&o.state===i.state}),void 0,o=>(!n&&e.set(o),o));return e.init&&W(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),xe({signal:r,create:e.create,utils:e.utils})}function Oe(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function ze(e,n){const t=Ie(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const Me=new Map;function Ue(e=!0,n=!1,t="/_server",r){return o=>{const i=o.base.path(),l=o.navigatorFactory(o.base);let a={};function c(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function s(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const d=u.composedPath().find(D=>D instanceof Node&&D.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const m=c(d),f=m?d.href.baseVal:d.href;if((m?d.target.baseVal:d.target)||!f&&!d.hasAttribute("state"))return;const v=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||v&&v.includes("external"))return;const k=m?new URL(f,document.baseURI):new URL(f);if(!(k.origin!==window.location.origin||i&&k.pathname&&!k.pathname.toLowerCase().startsWith(i.toLowerCase())))return[d,k]}function h(u){const d=s(u);if(!d)return;const[m,f]=d,I=o.parsePath(f.pathname+f.search+f.hash),v=m.getAttribute("state");u.preventDefault(),l(I,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function g(u){const d=s(u);if(!d)return;const[m,f]=d;typeof r=="function"&&(f.pathname=r(f.pathname)),a[f.pathname]||o.preloadRoute(f,m.getAttribute("preload")!=="false")}function b(u){const d=s(u);if(!d)return;const[m,f]=d;typeof r=="function"&&(f.pathname=r(f.pathname)),!a[f.pathname]&&(a[f.pathname]=setTimeout(()=>{o.preloadRoute(f,m.getAttribute("preload")!=="false"),delete a[f.pathname]},200))}function w(u){const d=s(u);if(!d)return;const[,m]=d;typeof r=="function"&&(m.pathname=r(m.pathname)),a[m.pathname]&&(clearTimeout(a[m.pathname]),delete a[m.pathname])}function T(u){if(u.defaultPrevented)return;let d=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const f=new URL(d,le);if(d=o.parsePath(f.pathname+f.search),!d.startsWith(t))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const m=Me.get(d);if(m){u.preventDefault();const f=new FormData(u.target);u.submitter&&u.submitter.name&&f.append(u.submitter.name,u.submitter.value),m.call({r:o,f:u.target},f)}}se(["click","submit"]),document.addEventListener("click",h),e&&(document.addEventListener("mouseover",b),document.addEventListener("mouseout",w),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",T),W(()=>{document.removeEventListener("click",h),e&&(document.removeEventListener("mouseover",b),document.removeEventListener("mouseout",w),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",T)})}}function Fe(e){const n=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=de();return De({get:n,set({value:r,replace:o,scroll:i,state:l}){o?window.history.replaceState(ue(l),"",r):window.history.pushState(l,"",r),ze(window.location.hash.slice(1),i),ce()},init:r=>Oe(window,"popstate",fe(r,o=>{if(o&&o<0)return!t.confirm(o);{const i=n();return!t.confirm(i.value,{state:i.state})}})),create:Ue(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function qe(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Be=$("<style>"),He=$("<link>"),We=$("<script> ");const je={style:e=>(()=>{var n=y(Be);return A(n,S(()=>e.attrs),!1,!0),j(n,()=>e.children),_(),n})(),link:e=>(()=>{var n=y(He);return A(n,S(()=>e.attrs),!1,!1),_(),n})(),script:e=>e.attrs.src?(()=>{var n=y(We);return A(n,S(()=>e.attrs,{get id(){return e.key}}),!1,!0),_(),n})():null};function Ve(e,n){let{tag:t,attrs:{key:r,...o}={key:void 0},children:i}=e;return je[t]({attrs:{...o,nonce:n},key:r,children:i})}function Ke(e,n,t,r="default"){return he(async()=>{{const i=(await e.import())[r],a=(await n.inputs?.[e.src].assets()).filter(s=>s.tag==="style"||s.attrs.rel==="stylesheet");return typeof window<"u"&&qe(a),{default:s=>[...a.map(h=>Ve(h)),p(i,s)]}}})}const E={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ge(e={}){const n={options:e,rootNode:K(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)U(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>Ze(n,t(r)),insert:(r,o)=>U(n,t(r),o),remove:r=>Je(n,t(r))}}function Ze(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let i=!1,l=null,a=e.rootNode,c=null;for(let s=0;s<r.length;s++){const h=r[s];a.wildcardChildNode!==null&&(l=a.wildcardChildNode,c=r.slice(s).join("/"));const g=a.children.get(h);if(g===void 0){if(a&&a.placeholderChildren.length>1){const b=r.length-s;a=a.placeholderChildren.find(w=>w.maxDepth===b)||null}else a=a.placeholderChildren[0]||null;if(!a)break;a.paramName&&(o[a.paramName]=h),i=!0}else a=g}return(a===null||a.data===null)&&l!==null&&(a=l,o[a.paramName||"_"]=c,i=!0),a?i?{...a.data,params:i?o:void 0}:a.data:null}function U(e,n,t){let r=!0;const o=n.split("/");let i=e.rootNode,l=0;const a=[i];for(const c of o){let s;if(s=i.children.get(c))i=s;else{const h=Xe(c);s=K({type:h,parent:i}),i.children.set(c,s),h===E.PLACEHOLDER?(s.paramName=c==="*"?`_${l++}`:c.slice(1),i.placeholderChildren.push(s),r=!1):h===E.WILDCARD&&(i.wildcardChildNode=s,s.paramName=c.slice(3)||"_",r=!1),a.push(s),i=s}}for(const[c,s]of a.entries())s.maxDepth=Math.max(a.length-c,s.maxDepth||0);return i.data=t,r===!0&&(e.staticRoutesMap[n]=i),i}function Je(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const i of r)if(o=o.children.get(i),!o)return t;if(o.data){const i=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(i),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function K(e={}){return{type:e.type||E.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Xe(e){return e.startsWith("**")?E.WILDCARD:e[0]===":"||e==="*"?E.PLACEHOLDER:E.NORMAL}const Ye="modulepreload",Qe=function(e){return"/hakuzumon.github.io/_build/"+e},F={},x=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=Promise.all(t.map(a=>{if(a=Qe(a),a in F)return;F[a]=!0;const c=a.endsWith(".css"),s=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Ye,c||(h.as="script",h.crossOrigin=""),h.href=a,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((g,b)=>{h.addEventListener("load",g),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>n()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},G=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>x(()=>import("./_...404_-DUYVcV2b.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/hakuzumon.github.io/hakuzumon.github.io/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>x(()=>import("./about-6s4VW_6B.js"),__vite__mapDeps([3,1,4,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/hakuzumon.github.io/hakuzumon.github.io/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>x(()=>import("./index-BC7X7foe.js"),__vite__mapDeps([5,1,4,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/hakuzumon.github.io/hakuzumon.github.io/src/routes/index.tsx"}],et=tt(G.filter(e=>e.page));function tt(e){function n(t,r,o,i){const l=Object.values(t).find(a=>o.startsWith(a.id+"/"));return l?(n(l.children||(l.children=[]),r,o.slice(l.id.length)),t):(t.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function nt(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ge({routes:G.reduce((e,n)=>{if(!nt(n))return e;let t=n.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function rt(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&Ke(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return et.map(e)}let q;const ot=()=>q||(q=rt());var at=$('<nav class=bg-sky-800><ul class="container flex items-center p-3 text-gray-200"><li><a href=/>Home</a></li><li><a href=/about>About');function it(){const e=me(),n=t=>t==e.pathname?"border-sky-600":"border-transparent hover:border-sky-600";return(()=>{var t=y(at),r=t.firstChild,o=r.firstChild,i=o.nextSibling;return pe(l=>{var a=`border-b-2 ${n("/")} mx-1.5 sm:mx-6`,c=`border-b-2 ${n("/about")} mx-1.5 sm:mx-6`;return a!==l.e&&z(o,l.e=a),c!==l.t&&z(i,l.t=c),l},{e:void 0,t:void 0}),t})()}function st(){return p(Fe,{get base(){return"/hakuzumon.github.io/"},root:e=>[p(it,{}),p(ge,{get children(){return e.children}})],get children(){return p(ot,{})}})}const lt=e=>null;var ut=$("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const ct=e=>{const n="Error | Uncaught Client Exception";return p(be,{fallback:t=>(console.error(t),[(()=>{var r=y(ut);return j(r,n),r})(),p(lt,{code:500})]),get children(){return e.children}})};function dt(e,n){return we(e,n)}function B(e){return e.children}function ft(){return p(B,{get children(){return p(B,{get children(){return p(ct,{get children(){return p(st,{})}})}})}})}dt(()=>p(ft,{}),document.getElementById("app"));const mt=void 0;export{mt as default};
