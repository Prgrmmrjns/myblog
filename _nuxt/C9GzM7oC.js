import{_ as de}from"./BqtYBRny.js";import{aZ as N,z as k,aG as Q,aX as ue,r as V,d as w,a_ as W,au as O,i as f,E as y,w as g,R as v,D as o,aw as R,at as K,a$ as ce,V as pe,b0 as fe,o as me,a8 as ge,g as h,aB as Z,f as q,aP as be,b1 as ee,aC as te,n as A,ah as ae,e as m,x as oe,c as B,ai as _e,aU as X,aJ as he,aO as ve,aW as ye,F as E,am as F,G as T,b2 as G,aj as Y,t as j,aV as xe,q as we,y as Ce,s as $e,A as M,b3 as ke,b4 as Ae,af as Ie}from"./BDq_dl_N.js";import{u as ne}from"./CtCPg5q3.js";import{u as se}from"./CAm_n2gA.js";import{q as U}from"./DiZGLGgq.js";import{r as D}from"./BIXTCxEw.js";import"./DlAUqK2U.js";function Se(t){return t==null}function Be(t,n){return Se(t)?!1:Array.isArray(t)?t.some(e=>N(e,n)):N(t,n)}function Ve({type:t,defaultValue:n,modelValue:e}){const a=e||n;return e!==void 0||n!==void 0?Array.isArray(a)?"multiple":"single":t??"single"}function Pe({type:t,defaultValue:n,modelValue:e}){return t||Ve({type:t,defaultValue:n,modelValue:e})}function Oe({type:t,defaultValue:n}){return n!==void 0?n:t==="single"?void 0:[]}function ze(t,n){const e=k(()=>Pe(t)),a=Q(t,"modelValue",n,{defaultValue:Oe(t),passive:t.modelValue===void 0,deep:!0});function s(i){if(e.value==="single")a.value=N(i,a.value)?void 0:i;else{const r=Array.isArray(a.value)?[...a.value||[]]:[a.value].filter(Boolean);if(Be(r,i)){const c=r.findIndex(b=>N(b,i));r.splice(c,1)}else r.push(i);a.value=r}}const l=k(()=>e.value==="single");return{modelValue:a,changeModelValue:s,isSingle:l}}function De(t){const n=ue({dir:V("ltr")});return k(()=>{var e;return(t==null?void 0:t.value)||((e=n.dir)==null?void 0:e.value)||"ltr"})}const[H,je]=K("AccordionRoot"),Re=w({__name:"AccordionRoot",props:{collapsible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dir:{},orientation:{default:"vertical"},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(t,{emit:n}){const e=t,a=n,{dir:s,disabled:l,unmountOnHide:i}=W(e),r=De(s),{modelValue:c,changeModelValue:b,isSingle:_}=ze(e,a),{forwardRef:d,currentElement:p}=O();return je({disabled:l,direction:r,orientation:e.orientation,parentElement:p,isSingle:_,collapsible:e.collapsible,modelValue:c,changeModelValue:b,unmountOnHide:i}),(x,u)=>(f(),y(o(R),{ref:o(d),"as-child":x.asChild,as:x.as},{default:g(()=>[v(x.$slots,"default",{modelValue:o(c)})]),_:3},8,["as-child","as"]))}}),[le,qe]=K("CollapsibleRoot"),Ne=w({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(t,{expose:n,emit:e}){const a=t,l=Q(a,"open",e,{defaultValue:a.defaultOpen,passive:a.open===void 0}),{disabled:i,unmountOnHide:r}=W(a);return qe({contentId:"",disabled:i,open:l,unmountOnHide:r,onOpenToggle:()=>{l.value=!l.value}}),n({open:l}),O(),(c,b)=>(f(),y(o(R),{as:c.as,"as-child":a.asChild,"data-state":o(l)?"open":"closed","data-disabled":o(i)?"":void 0},{default:g(()=>[v(c.$slots,"default",{open:o(l)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),Ee=["INPUT","TEXTAREA"];function Fe(t,n,e,a={}){if(!n||a.enableIgnoredElement&&Ee.includes(n.nodeName))return null;const{arrowKeyOptions:s="both",attributeName:l="[data-reka-collection-item]",itemsArray:i=[],loop:r=!0,dir:c="ltr",preventScroll:b=!0,focus:_=!1}=a,[d,p,x,u,C,I]=[t.key==="ArrowRight",t.key==="ArrowLeft",t.key==="ArrowUp",t.key==="ArrowDown",t.key==="Home",t.key==="End"],$=x||u,z=d||p;if(!C&&!I&&(!$&&!z||s==="vertical"&&z||s==="horizontal"&&$))return null;const S=e?Array.from(e.querySelectorAll(l)):i;if(!S.length)return null;b&&t.preventDefault();let P=null;return z||$?P=re(S,n,{goForward:$?u:c==="ltr"?d:p,loop:r}):C?P=S.at(0)||null:I&&(P=S.at(-1)||null),_&&(P==null||P.focus()),P}function re(t,n,e,a=t.length){if(--a===0)return null;const s=t.indexOf(n),l=e.goForward?s+1:s-1;if(!e.loop&&(l<0||l>=t.length))return null;const i=(l+t.length)%t.length,r=t[i];return r?r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false"?re(t,r,e,a):r:null}const[L,He]=K("AccordionItem"),Te=w({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t,{expose:n}){const e=t,a=H(),s=k(()=>a.isSingle.value?e.value===a.modelValue.value:Array.isArray(a.modelValue.value)&&a.modelValue.value.includes(e.value)),l=k(()=>a.disabled.value||e.disabled),i=k(()=>l.value?"":void 0),r=k(()=>s.value?"open":"closed");n({open:s,dataDisabled:i});const{currentRef:c,currentElement:b}=O();He({open:s,dataState:r,disabled:l,dataDisabled:i,triggerId:"",currentRef:c,currentElement:b,value:k(()=>e.value)});function _(d){var C;const p=d.target;if(Array.from(((C=a.parentElement.value)==null?void 0:C.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex(I=>I===p)===-1)return null;Fe(d,b.value,a.parentElement.value,{arrowKeyOptions:a.orientation,dir:a.direction.value,focus:!0})}return(d,p)=>(f(),y(o(Ne),{"data-orientation":o(a).orientation,"data-disabled":i.value,"data-state":r.value,disabled:l.value,open:s.value,as:e.as,"as-child":e.asChild,"unmount-on-hide":o(a).unmountOnHide.value,onKeydown:ce(_,["up","down","left","right","home","end"])},{default:g(()=>[v(d.$slots,"default",{open:s.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),Me=w({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["contentFound"],setup(t,{emit:n}){const e=t,a=n,s=le();s.contentId||(s.contentId=ne(void 0,"reka-collapsible-content"));const l=V(),{forwardRef:i,currentElement:r}=O(),c=V(0),b=V(0),_=k(()=>s.open.value),d=V(_.value),p=V();pe(()=>{var u;return[_.value,(u=l.value)==null?void 0:u.present]},async()=>{await fe();const u=r.value;if(!u)return;p.value=p.value||{transitionDuration:u.style.transitionDuration,animationName:u.style.animationName},u.style.transitionDuration="0s",u.style.animationName="none";const C=u.getBoundingClientRect();b.value=C.height,c.value=C.width,d.value||(u.style.transitionDuration=p.value.transitionDuration,u.style.animationName=p.value.animationName)},{immediate:!0});const x=k(()=>d.value&&s.open.value);return me(()=>{requestAnimationFrame(()=>{d.value=!1})}),ge(r,"beforematch",u=>{requestAnimationFrame(()=>{s.onOpenToggle(),a("contentFound")})}),(u,C)=>(f(),y(o(be),{ref_key:"presentRef",ref:l,present:u.forceMount||o(s).open.value,"force-mount":!0},{default:g(({present:I})=>{var $;return[h(o(R),Z(u.$attrs,{id:o(s).contentId,ref:o(i),"as-child":e.asChild,as:u.as,hidden:I?void 0:o(s).unmountOnHide.value?"":"until-found","data-state":x.value?void 0:o(s).open.value?"open":"closed","data-disabled":($=o(s).disabled)!=null&&$.value?"":void 0,style:{"--reka-collapsible-content-height":`${b.value}px`,"--reka-collapsible-content-width":`${c.value}px`}}),{default:g(()=>[!o(s).unmountOnHide.value||I?v(u.$slots,"default",{key:0}):q("",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),Ue=w({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const n=t,e=H(),a=L();return O(),(s,l)=>(f(),y(o(Me),{role:"region","as-child":n.asChild,"force-mount":n.forceMount,"aria-labelledby":o(a).triggerId,"data-state":o(a).dataState.value,"data-disabled":o(a).dataDisabled.value,"data-orientation":o(e).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:l[0]||(l[0]=i=>o(e).changeModelValue(o(a).value.value))},{default:g(()=>[v(s.$slots,"default")]),_:3},8,["as-child","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),Ke=w({__name:"AccordionHeader",props:{asChild:{type:Boolean},as:{default:"h3"}},setup(t){const n=t,e=H(),a=L();return O(),(s,l)=>(f(),y(o(R),{as:n.as,"as-child":n.asChild,"data-orientation":o(e).orientation,"data-state":o(a).dataState.value,"data-disabled":o(a).dataDisabled.value},{default:g(()=>[v(s.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),Le=w({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const n=t;O();const e=le();return(a,s)=>{var l,i;return f(),y(o(R),{type:a.as==="button"?"button":void 0,as:a.as,"as-child":n.asChild,"aria-controls":o(e).contentId,"aria-expanded":o(e).open.value,"data-state":o(e).open.value?"open":"closed","data-disabled":(l=o(e).disabled)!=null&&l.value?"":void 0,disabled:(i=o(e).disabled)==null?void 0:i.value,onClick:o(e).onOpenToggle},{default:g(()=>[v(a.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),Xe=w({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const n=t,e=H(),a=L();a.triggerId||(a.triggerId=ne(void 0,"reka-accordion-trigger"));function s(){const l=e.isSingle.value&&a.open.value&&!e.collapsible;a.disabled.value||l||e.changeModelValue(a.value.value)}return(l,i)=>(f(),y(o(Le),{id:o(a).triggerId,ref:o(a).currentRef,"data-reka-collection-item":"",as:n.as,"as-child":n.asChild,"aria-disabled":o(a).disabled.value||void 0,"aria-expanded":o(a).open.value||!1,"data-disabled":o(a).dataDisabled.value,"data-orientation":o(e).orientation,"data-state":o(a).dataState.value,disabled:o(a).disabled.value,onClick:s},{default:g(()=>[v(l.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),Ge=w({__name:"BaseSpotlightCard",props:{as:{type:String,default:"div"},from:{type:String,default:"rgba(255,255,255,0.8)"},via:{type:String,required:!1,default:null},to:{type:String,default:"transparent"},size:{type:Number,default:400},mode:{type:String,default:"before"}},setup(t){const n=t,e=V(),{elementX:a,elementY:s}=ee(e),l=[n.from,n.via,n.to].filter(i=>!!i).join(",");return(i,r)=>(f(),y(ae(t.as),{ref_key:"card",ref:e,style:te({"--x":`${o(a)}px`,"--y":`${o(s)}px`,"--spotlight-color-stops":o(l),"--spotlight-size":`${t.size}px`}),class:A([{"before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="before","after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="after"},"relative transform-gpu overflow-hidden"])},{default:g(()=>[v(i.$slots,"default")]),_:3},8,["style","class"]))}}),Ye=Object.assign(Ge,{__name:"BaseSpotlightCard"}),Je={class:"relative flex h-full flex-col"},Qe=w({__name:"SpotlightCard",props:{as:{type:String,default:"div"},from:{type:String,default:"rgba(255,255,255,0.8)"},via:{type:String,required:!1,default:null},to:{type:String,default:"transparent"},size:{type:Number,default:250},mode:{type:String,default:"before"},white:{type:Boolean,default:!1},radius:{type:String,default:"1rem"}},setup(t){const n=t,e=V(),{elementX:a,elementY:s}=ee(e),l=[n.from,n.via,n.to].filter(i=>!!i).join(",");return(i,r)=>{const c=Ye;return t.white?(f(),y(c,{key:1,from:"rgba(255,255,255,0.2)",class:"relative rounded-lg"},{default:g(()=>[r[0]||(r[0]=m("div",{class:"absolute inset-x-0 bottom-0 top-0 rounded-t-lg bg-gradient-to-b from-white/20 to-transparent"},null,-1)),r[1]||(r[1]=m("div",{class:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"},null,-1)),r[2]||(r[2]=m("div",{class:"absolute inset-px rounded-lg bg-zinc-950"},null,-1)),r[3]||(r[3]=m("div",{class:"absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"},null,-1)),m("div",Je,[v(i.$slots,"default")])]),_:3})):(f(),y(ae(t.as),{key:0,ref_key:"card",ref:e,style:te({"--x":`${o(a)}px`,"--y":`${o(s)}px`,"--spotlight-color-stops":o(l),"--spotlight-size":`${t.size}px`}),class:A([{"before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="before","after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="after"},"relative transform-gpu overflow-hidden"])},{default:g(()=>[v(i.$slots,"default")]),_:3},8,["style","class"]))}}}),ie=Object.assign(Qe,{__name:"SpotlightCard"}),We={class:"flex justify-center"},Ze={class:"relative"},et=w({__name:"ProfilePicture",setup(t){const{profile:n}=oe();return(e,a)=>{const s=_e,l=ie;return f(),B("div",We,[h(l,{mode:"after",from:"rgba(255,255,255,0.1)",size:400,class:"group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"},{default:g(()=>[m("div",Ze,[h(s,{width:"256",src:o(n).picture,class:"absolute inset-0 size-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0",alt:"Hugo Richard Profile Picture","aria-label":"Hugo Richard Profile Picture"},null,8,["src"]),h(s,{width:"256",src:o(n).picture,class:"relative size-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0",alt:"Profile Picture","aria-label":"Profile Picture"},null,8,["src"])])]),_:1}),h(l,{mode:"after",from:"rgba(255,255,255,0.1)",size:400,class:"group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:hidden"},{default:g(()=>[h(s,{width:"256",src:o(n).picture,class:"size-128 rounded-xl object-cover transition-all duration-300",alt:"Profile Picture","aria-label":"Profile Picture"},null,8,["src"])]),_:1})])}}}),tt=Object.assign(et,{__name:"AboutProfilePicture"}),at={slots:{root:"w-full",item:"border-b border-(--ui-border) last:border-b-0",header:"flex",trigger:"group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-(--ui-primary) min-w-0",content:"data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",body:"text-sm pb-3.5",leadingIcon:"shrink-0 size-5",trailingIcon:"shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",label:"text-start break-words"},variants:{disabled:{true:{trigger:"cursor-not-allowed opacity-75"}}}},ot=xe;var J;const nt=X({extend:X(at),...((J=ot.ui)==null?void 0:J.accordion)||{}}),st=w({__name:"Accordion",props:{as:{},items:{},trailingIcon:{},labelKey:{default:"label"},class:{},ui:{},collapsible:{type:Boolean,default:!0},defaultValue:{},modelValue:{},type:{default:"single"},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:n}){const e=t,a=n,s=he(),l=oe(),i=ve(ye(e,"as","collapsible","defaultValue","disabled","modelValue","type","unmountOnHide"),a),r=k(()=>nt({disabled:e.disabled}));return(c,b)=>{var _;return f(),y(o(Re),Z(o(i),{class:r.value.root({class:[e.class,(_=e.ui)==null?void 0:_.root]})}),{default:g(()=>[(f(!0),B(E,null,F(c.items,(d,p)=>{var x;return f(),y(o(Te),{key:p,value:d.value||String(p),disabled:d.disabled,class:A(r.value.item({class:(x=e.ui)==null?void 0:x.item}))},{default:g(({open:u})=>{var C,I;return[h(o(Ke),{class:A(r.value.header({class:(C=e.ui)==null?void 0:C.header}))},{default:g(()=>{var $;return[h(o(Xe),{class:A(r.value.trigger({class:($=e.ui)==null?void 0:$.trigger,disabled:d.disabled}))},{default:g(()=>{var z;return[v(c.$slots,"leading",{item:d,index:p,open:u},()=>{var S;return[d.icon?(f(),y(T,{key:0,name:d.icon,class:A(r.value.leadingIcon({class:(S=e.ui)==null?void 0:S.leadingIcon}))},null,8,["name","class"])):q("",!0)]}),o(G)(d,e.labelKey)||s.default?(f(),B("span",{key:0,class:A(r.value.label({class:(z=e.ui)==null?void 0:z.label}))},[v(c.$slots,"default",{item:d,index:p,open:u},()=>[Y(j(o(G)(d,e.labelKey)),1)])],2)):q("",!0),v(c.$slots,"trailing",{item:d,index:p,open:u},()=>{var S;return[h(T,{name:d.trailingIcon||c.trailingIcon||o(l).ui.icons.chevronDown,class:A(r.value.trailingIcon({class:(S=e.ui)==null?void 0:S.trailingIcon}))},null,8,["name","class"])]})]}),_:2},1032,["class"])]}),_:2},1032,["class"]),d.content||s.content||d.slot&&s[d.slot]||s.body||d.slot&&s[`${d.slot}-body`]?(f(),y(o(Ue),{key:0,class:A(r.value.content({class:(I=e.ui)==null?void 0:I.content}))},{default:g(()=>[v(c.$slots,d.slot||"content",{item:d,index:p,open:u},()=>{var $;return[m("div",{class:A(r.value.body({class:($=e.ui)==null?void 0:$.body}))},[v(c.$slots,d.slot?`${d.slot}-body`:"body",{item:d,index:p,open:u},()=>[Y(j(d.content),1)])],2)]})]),_:2},1032,["class"])):q("",!0)]}),_:2},1032,["value","disabled","class"])}),128))]),_:3},16,["class"])}}}),lt=Object.assign(st,{__name:"UAccordion"}),rt={class:"flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30"},it={class:"flex flex-col items-center justify-center gap-2"},dt={class:"font-newsreader italic text-white-shadow text-4xl"},ut={class:"text-center text-sm font-medium text-muted"},ct={class:"w-full"},pt={class:"mb-6 flex flex-wrap justify-center gap-3"},ft=["onClick"],mt=w({__name:"Faq",async setup(t){let n,e;const a=we(),{locale:s}=Ce(),l=k(()=>$e(String(a.params.slug))),{data:i}=([n,e]=M(async()=>se("faq-"+l.value,async()=>{const _="faq_"+s.value;return await U(_).first()},{watch:[s]})),n=await n,e(),n),r=k(()=>{var _;return(_=i.value)==null?void 0:_.faqQuestions.map(d=>({label:d.title,key:d.title.toLowerCase(),questions:d.questions}))}),c=V(0),b={base:"rounded-full border-2 border-white/10 px-4 py-1 font-medium transition-all duration-300 transform",active:"bg-gradient-to-r from-indigo-500/50 to-purple-500/50 text-white shadow-lg scale-105 border-indigo-400/30",inactive:"bg-transparent text-neutral-300",hover:"hover:bg-white/10 hover:text-white hover:shadow-md hover:scale-103"};return(_,d)=>{const p=lt;return f(),B("div",rt,[m("div",it,[m("h3",dt,j(o(i).title),1),m("p",ut,j(o(i).subtitle),1)]),m("div",ct,[m("div",pt,[(f(!0),B(E,null,F(o(r),(x,u)=>(f(),B("button",{key:u,class:A([b.base,o(c)===u?b.active:b.inactive,b.hover]),onClick:C=>c.value=u},j(x.label),11,ft))),128))]),(f(!0),B(E,null,F(o(r),(x,u)=>ke((f(),B("div",{key:u,class:"transition-opacity duration-300"},[h(p,{"trailing-icon":"lucide:plus",items:x.questions,ui:{item:"mb-2 group px-4 transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]",trailingIcon:"group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135",panel:"p-4",content:"text-neutral-200",title:"text-white font-medium"}},null,8,["items"])])),[[Ae,o(c)===u]])),128))])])}}}),gt=Object.assign(mt,{__name:"AboutFaq"}),bt={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20 text-[var(--ui-text-toned)]"},_t={class:"font-newsreader italic text-white-shadow text-center text-4xl"},ht={class:"text-center text-lg font-extralight italic text-muted"},vt={class:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"},yt={class:"relative flex flex-col gap-3 sm:ml-4"},xt={class:"flex flex-col gap-4 text-primary"},wt={class:"flex flex-col gap-3"},Ct={class:"mb-6 flex flex-col gap-1"},$t={class:"text-white-shadow font-newsreader italic text-3xl"},kt={class:"flex flex-wrap gap-4"},At={class:"text-xs text-black text-center font-medium"},It=w({__name:"About",async setup(t){let n,e;const a=([n,e]=M(()=>U("stack").first()),n=await n,e(),n);return[n,e]=M(async()=>se("faq",async()=>await U("faq_en").first())),n=await n,e(),(s,l)=>{const i=de,r=tt,c=T,b=Ie,_=ie,d=gt;return f(),B("section",bt,[m("h1",_t,[D(s.$slots,"title",{mdcUnwrap:"p"})]),m("h2",ht,[D(s.$slots,"subtitle",{mdcUnwrap:"p"})]),h(i,{class:"mb-8 mt-2"}),m("div",vt,[h(r),m("div",yt,[l[0]||(l[0]=m("h3",{class:"text-lg"}," Intro ",-1)),m("div",xt,[D(s.$slots,"intro",{mdcUnwrap:"p"})])])]),h(i,{class:"my-8"}),D(s.$slots,"experiences",{mdcUnwrap:"p"}),h(i,{class:"my-8"}),m("div",wt,[m("div",Ct,[m("h3",$t,[D(s.$slots,"stack_title",{mdcUnwrap:"p"})]),m("p",null,[D(s.$slots,"stack_description",{mdcUnwrap:"p"})])]),m("div",kt,[(f(!0),B(E,null,F(o(a).items,p=>(f(),y(_,{key:p.name,white:""},{default:g(()=>[h(b,{to:p.link,target:"_blank","aria-label":p.name+" link",class:"flex flex-col items-center justify-center p-6 bg-emerald-200 rounded-lg w-24 h-32"},{default:g(()=>[h(c,{name:p.icon,class:"size-9 mb-3","font-controlled":!1,alt:p.name+" logo","aria-label":p.name+" logo"},null,8,["name","alt","aria-label"]),m("span",At,j(p.name),1)]),_:2},1032,["to","aria-label"])]),_:2},1024))),128))])]),h(d,{class:"mt-8",style:{"--stagger":"6"},"data-animate":""})])}}}),Rt=Object.assign(It,{__name:"About"});export{Rt as default};
