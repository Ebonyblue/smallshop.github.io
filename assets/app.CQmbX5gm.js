import{j as o,aT as p,aU as u,aV as l,aW as c,aX as f,aY as d,aZ as m,a_ as h,a$ as A,b0 as g,Y as _,d as P,u as b,l as v,z as E,b1 as R,b2 as w,b3 as y,aE as C}from"./chunks/framework.DoeWdsm-.js";import{R as T}from"./chunks/theme.IzQrPrVK.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),S=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=b();return v(()=>{E(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),w(),y(),s.setup&&s.setup(),()=>C(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),a=V();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function V(){return h(S)}function j(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=_(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
