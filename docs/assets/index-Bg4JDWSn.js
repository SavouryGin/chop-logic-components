import{r as n}from"./index-qVDZzPEr.js";const m=({ref:t,onClickOutsideHandler:o,dependentRef:s})=>{n.useEffect(()=>{const u=c=>{const r=(t==null?void 0:t.current)&&!t.current.contains(c.target),i=s!=null&&s.current?!s.current.contains(c.target):!0;r&&i&&o()};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[t,s,o])};export{m as u};