import{d as h,r as N,o as T,ak as C,c as i,y as S,z as B,V as O,al as j,i as a,g as c,w as f,e as m,F as w,am as y,D as _,E as b,n as v,t as g,af as L,q as F,an as D,G as $,ao as P,x as V,f as A,R as I}from"./BDq_dl_N.js";import{_ as W}from"./BqtYBRny.js";import{_ as E}from"./8vDFmQcU.js";import{_ as z}from"./DlAUqK2U.js";const G=Symbol.for("nuxt:client-only"),R=h({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(s,{slots:e,attrs:n}){const t=N(!1);return T(()=>{t.value=!0}),C(G,!0),o=>{var p;if(t.value)return(p=e.default)==null?void 0:p.call(e);const u=e.fallback||e.placeholder;if(u)return u();const r=o.fallback||o.placeholder||"",d=o.fallbackTag||o.placeholderTag||"span";return i(d,n,r)}}}),U={class:"z-99 flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1 backdrop-blur-xl"},q=h({__name:"LanguageToggle",setup(s){const{locale:e,setLocaleCookie:n,locales:t}=S(),o=B(()=>t.value.find(r=>r.code===e.value));O(e,r=>{n(r)});const u=j();return(r,d)=>{const p=L,l=R;return a(),i("div",U,[c(l,null,{fallback:f(()=>d[0]||(d[0]=[m("div",{class:"h-2 w-5"},null,-1)])),default:f(()=>[(a(!0),i(w,null,y(_(t),x=>(a(),b(p,{key:x.code,class:"cursor-pointer select-none",to:_(u)(x.code)},{default:f(()=>{var k;return[m("span",{class:v(["font-semibold",x.code===((k=_(o))==null?void 0:k.code)?"text-white":"text-neutral-500"])},g(x.code),3)]}),_:2},1032,["to"]))),128))]),_:1})])}}}),H=Object.assign(q,{__name:"SettingsLanguageToggle"});function J(s){switch(s){case"home":return{home:{name:"Home",to:"/",icon:"lucide:home"},works:{name:"Works",to:"/works",icon:"lucide:briefcase"},writing:{name:"Writing",to:"/writing",icon:"lucide:library"},about:{name:"About",to:"/about",icon:"lucide:user"},contact:{name:"Contact",to:"/contact",icon:"lucide:mail"}};default:return[]}}const M={class:"mx-auto my-2 flex w-full items-center justify-center"},Y={class:"rounded-full"},K={class:"z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"},Q=h({__name:"Navbar",props:{isText:{type:Boolean,default:!1}},setup(s){const e=J("home"),n=F(),t=D();return(o,u)=>{const r=$,d=L,p=P;return a(),i("div",M,[m("header",Y,[c(p,{rounded:"",transparent:"",animate:!1,class:"border border-white/10"},{default:f(()=>[m("nav",K,[(a(!0),i(w,null,y(_(e),l=>(a(),b(d,{id:l.name.toLowerCase(),key:l.name,"aria-label":l.name+" navigation link",class:v([[_(t)(l.to)===_(n).path?"border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm":"text-muted"],"flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl sm:px-6"]),to:_(t)(l.to)},{default:f(()=>[c(r,{name:l.icon,class:"size-7 font-light sm:size-6"},null,8,["name"])]),_:2},1032,["id","aria-label","class","to"]))),128))])]),_:1})])])}}}),X=Object.assign(Q,{__name:"LayoutNavbar"}),Z={key:0,class:"ml-1 text-xs font-semibold"},ee=h({__name:"Logo",props:{isText:{type:Boolean,default:!1}},setup(s){const{appName:e}=V();return(n,t)=>{const o=$,u=E;return a(),b(u,{to:"/",class:"flex shrink-0 items-center","aria-label":"Go back to home page"},{default:f(()=>[c(o,{name:"custom:maison-hochard",class:"size-8"}),s.isText?(a(),i("span",Z,g(_(e)),1)):A("",!0)]),_:1})}}}),te=Object.assign(ee,{__name:"Logo"}),oe={},ne={class:"mt-6 pb-20"},ae={class:"mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6"},se={class:"text-center text-sm text-muted"};function ce(s,e){const n=W,t=te;return a(),i("div",ne,[c(n),m("footer",ae,[c(t,{size:8}),m("span",se," © "+g(new Date().getFullYear())+" Jonas Wolber ",1)])])}const re=Object.assign(z(oe,[["render",ce]]),{__name:"LayoutFooter"}),le={},_e={class:"sm:mt-[50px]"};function ie(s,e){const n=H,t=X,o=re;return a(),i("div",null,[c(n,{class:"fixed right-1 z-50 top-1"}),c(t,{class:"fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0"}),m("div",_e,[I(s.$slots,"default")]),c(o)])}const fe=z(le,[["render",ie]]);export{fe as default};
