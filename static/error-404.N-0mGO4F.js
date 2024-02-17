import{u as N,d as B,c as y,h as P,r as w,o as z,a as I,b as j,e as E,f as L,g as C,i as U,j as T,p as V,k as H,n as D,l as F,m as q,q as M,w as O,s as $,_ as G,t as Q,v as W,x as J,y as g,z as _,A as K,B as X,C as Y,D as Z,E as ee}from"./entry.lQTPkDfp.js";async function R(t,a=N()){const{path:l,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>R(t,a));a._routePreloaded.add(l);const s=e.map(u=>{var n;return(n=u.components)==null?void 0:n.default}).filter(u=>typeof u=="function");for(const u of s){const n=Promise.resolve(u()).catch(()=>{}).finally(()=>r.splice(r.indexOf(n)));r.push(n)}await Promise.all(r)}const te=(...t)=>t.find(a=>a!==void 0);function ae(t){const a=t.componentName||"NuxtLink";function l(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const s="path"in e?e.path:r(e).path;return{...e,name:void 0,path:k(s,t.trailingSlash)}}return B({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const s=N(),u=F(),n=y(()=>{const o=e.to||e.href||"";return l(o,s.resolve)}),d=y(()=>typeof n.value=="string"&&P(n.value,{acceptRelative:!0})),m=y(()=>e.target&&e.target!=="_self"),x=y(()=>e.external||m.value?!0:typeof n.value=="object"?!1:n.value===""||d.value),S=w(!1),h=w(null),A=o=>{var f;h.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()){const f=q();let v,i=null;z(()=>{const b=re();I(()=>{v=j(()=>{var p;(p=h==null?void 0:h.value)!=null&&p.tagName&&(i=b.observe(h.value,async()=>{i==null||i(),i=null;const c=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!x.value&&R(n.value,s).catch(()=>{})]),S.value=!0}))})})}),E(()=>{v&&L(v),i==null||i(),i=null})}return()=>{var b,p;if(!x.value){const c={ref:A,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(S.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel||void 0),C(U("RouterLink"),c,r.default)}const o=typeof n.value=="object"?((b=s.resolve(n.value))==null?void 0:b.href)??null:n.value&&!e.external&&!d.value?l(T(u.app.baseURL,n.value),s.resolve):n.value||null,f=e.target||null,v=te(e.noRel?"":e.rel,t.externalRelAttribute,d.value||m.value?"noopener noreferrer":"")||null,i=()=>M(o,{replace:e.replace});return e.custom?r.default?r.default({href:o,navigate:i,get route(){if(!o)return;const c=V(o);return{path:c.pathname,fullPath:c.pathname,get query(){return H(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:f,isExternal:x.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:h,href:o,rel:v,target:f},(p=r.default)==null?void 0:p.call(r))}}})}const ne=ae(D);function k(t,a){const l=a==="append"?O:$;return P(t)&&!t.startsWith("http")?t:l(t,!0)}function re(){const t=q();if(t._observer)return t._observer;let a=null;const l=new Map,e=(s,u)=>(a||(a=new IntersectionObserver(n=>{for(const d of n){const m=l.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&m&&m()}})),l.set(s,u),a.observe(s),()=>{l.delete(s),a.unobserve(s),l.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const se=t=>(Z("data-v-ccd3db62"),t=t(),ee(),t),le={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ie=se(()=>g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ce={class:"max-w-520px text-center z-20"},ue=["textContent"],de=["textContent"],fe={class:"w-full flex items-center justify-center"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return Q({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(l,e)=>{const r=ne;return W(),J("div",le,[ie,g("div",ce,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:_(t.statusCode)},null,8,ue),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:_(t.description)},null,8,de),g("div",fe,[K(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:X(()=>[Y(_(t.backHome),1)]),_:1})])])])}}},me=G(he,[["__scopeId","data-v-ccd3db62"]]);export{me as default};
