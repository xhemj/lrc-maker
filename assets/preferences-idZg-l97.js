import{R as r,a as A,r as b,j as e,u as P,e as F,l as L,T as u,k as W,v as z}from"./index-Bu7oHhG0.js";const C={url:"https://github.com/magic-akari/lrc-maker",wiki:"https://github.com/magic-akari/lrc-maker/wiki",issues:"https://github.com/magic-akari/lrc-maker/issues"};async function D(){const l="akari-lrc-maker";"serviceWorker"in navigator&&(await caches.keys().then(async n=>Promise.all(n.filter(a=>a.startsWith(l)).map(async a=>caches.delete(a)))),await navigator.serviceWorker.getRegistration().then(n=>{n&&n.unregister().then(()=>{location.reload()})}))}var q=[["en-US","English"],["ja","日本語"],["ko-KR","한국어"],["pt-BR","Português"],["zh-CN","简体中文"],["zh-HK","繁體中文(香港)"],["zh-TW","繁體中文"]],d={hash:"854dbfa",updateTime:"2024-09-25T10:57:49+08:00",version:"5.6.10"};const G={type:"number",step:1},k=(l,n)=>{const a=r.useRef(null);r.useEffect(()=>{const c=a.current;if(c){const i=()=>{c.value=l.toString()};return c.addEventListener("change",i),()=>c.removeEventListener("change",i)}},[l]);const h=r.useCallback(c=>{c.target.validity.valid&&n(c)},[n]);return{...G,ref:a,onChange:h,defaultValue:l}},H=q,U=()=>{const{prefState:l,prefDispatch:n,lang:a}=r.useContext(A,b.lang||b.prefState),h=r.useCallback(s=>{n({type:"themeColor",payload:s.target.value})},[n]),c=r.useRef(null),i=r.useCallback(s=>{let t=s.value;if(!s.validity.valid){s.value=s.defaultValue;return}if(t.length===3){const[o,f,g]=t;t=o+o+f+f+g+g}t.length<6&&(t=t.padEnd(6,"0")),n({type:"themeColor",payload:"#"+t})},[n]),v=r.useCallback(s=>i(s.target),[i]),N=r.useCallback(s=>{s.preventDefault();const o=s.target.elements.namedItem("user-color-input-text");return i(o)},[i]);r.useEffect(()=>{c.current.value=l.themeColor.slice(1)},[l.themeColor]);const p=r.useCallback(s=>{n({type:s.target.name,payload:s.target.value})},[n]),y=r.useCallback(()=>{D()},[]),T=r.useMemo(()=>{const s=new Date(d.updateTime),t={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1};return new Intl.DateTimeFormat(l.lang,t).format(s)},[l.lang]),I=r.useCallback(s=>{n({type:"lang",payload:s.target.value})},[n]),M=r.useCallback(()=>n({type:"builtInAudio",payload:s=>!s.builtInAudio}),[n]),S=r.useCallback(()=>n({type:"screenButton",payload:s=>!s.screenButton}),[n]),w=r.useCallback(s=>{n({type:"themeMode",payload:Number.parseInt(s.target.value,10)})},[n]),E=r.useCallback(s=>{n({type:"fixed",payload:Number.parseInt(s.target.value,10)})},[n]),B=r.useMemo(()=>H.map(([s,t])=>e.jsx("option",{value:s,children:t},s)),[]),R=r.useMemo(()=>Object.values(P).map(s=>{const t=s===l.themeColor,o=["color-picker","ripple"];return t&&o.push("checked"),e.jsx("label",{className:o.join(F.space),style:{backgroundColor:s},children:e.jsx("input",{hidden:!0,type:"radio",name:"theme-color",value:s,checked:t,onChange:h})},s)}),[h,l.themeColor]),m=r.useMemo(()=>({backgroundColor:l.themeColor}),[l.themeColor]),_=r.useMemo(()=>L("   hello   世界～   ",l.spaceStart,l.spaceEnd),[l.spaceStart,l.spaceEnd]),x=r.useRef(null),j=r.useRef(null);return r.useEffect(()=>{j.current.type==="color"&&x.current.removeAttribute("for")},[]),e.jsxs("div",{className:"preferences",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.version}),e.jsx("span",{className:"select-all",children:d.version})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.commitHash}),e.jsx("span",{className:"select-all",children:d.hash})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.updateTime}),e.jsx("span",{children:T})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.repo}),e.jsx("a",{className:"link",href:C.url,target:"_blank",rel:"noopener noreferrer",children:"Github"})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.help}),e.jsx("a",{className:"link",href:C.wiki,target:"_blank",rel:"noopener noreferrer",children:"Github Wiki"})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.language}),e.jsx("div",{className:"option-select",children:e.jsx("select",{value:l.lang,onChange:I,"aria-label":a.preferences.language,children:B})})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("span",{children:a.preferences.builtInAudio}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:l.builtInAudio,onChange:M,"aria-label":a.preferences.builtInAudio}),e.jsx("span",{className:"toggle-switch-label"})]})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("span",{children:a.preferences.spaceButton}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:l.screenButton,onChange:S,"aria-label":a.preferences.spaceButton}),e.jsx("span",{className:"toggle-switch-label"})]})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.themeMode.label}),e.jsx("div",{className:"option-select",children:e.jsxs("select",{name:"theme-mode",value:l.themeMode,onChange:w,"aria-label":a.preferences.themeMode.label,children:[e.jsx("option",{value:u.auto,children:a.preferences.themeMode.auto}),e.jsx("option",{value:u.light,children:a.preferences.themeMode.light}),e.jsx("option",{value:u.dark,children:a.preferences.themeMode.dark})]})})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.themeColor}),e.jsxs("details",{className:"dropdown",children:[e.jsxs("summary",{children:[e.jsx("span",{className:"color-picker ripple hash",style:m,children:"#"}),e.jsx("span",{className:"current-theme-color",children:l.themeColor.slice(1)})]}),e.jsxs("form",{className:"dropdown-body color-wall",onSubmit:N,children:[R,e.jsxs("label",{className:"color-picker ripple user-color-label hash",htmlFor:"user-color-input-text",style:m,ref:x,children:["#",e.jsx("input",{type:"color",className:"color-picker pseudo-hidden",value:l.themeColor,onChange:h,ref:j})]}),e.jsx("input",{ref:c,id:"user-color-input-text",name:"user-color-input-text",className:"user-color-input-text",type:"text",pattern:"[\\da-f]{3,6}",required:!0,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",spellCheck:!1,defaultValue:l.themeColor.slice(1),onBlur:v})]})]})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.lrcFormat}),e.jsxs("span",{children:[e.jsx("time",{className:"format-example-time",children:W(83.456,l.fixed)}),e.jsx("span",{className:"format-example-text",children:_})]})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.fixed}),e.jsx("div",{className:"option-select",children:e.jsxs("select",{name:"fixed",value:l.fixed,onChange:E,"aria-label":a.preferences.lrcFormat,children:[e.jsx("option",{value:0,children:"0"}),e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"})]})})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("label",{htmlFor:"space-start",children:a.preferences.leftSpace}),e.jsx("input",{name:"spaceStart",id:"space-start",required:!0,min:-1,...k(l.spaceStart,p)})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("label",{htmlFor:"space-end",children:a.preferences.rightSpace}),e.jsx("input",{name:"spaceEnd",id:"space-end",required:!0,min:-1,...k(l.spaceEnd,p)})]})}),e.jsx("li",{className:"ripple",onTransitionEnd:y,children:e.jsx("section",{className:"list-item",children:a.preferences.clearCache})})]}),e.jsx(z,{})]})};export{U as Preferences};