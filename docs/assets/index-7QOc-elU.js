import{r as u}from"./index-qVDZzPEr.js";import{u as c}from"./index-hbHCpJbS.js";import{u as a}from"./index-DOKHOwXh.js";const H=({wrapperRef:i,tooltipRef:d,isOpened:n,spacing:t=4})=>{const[f,w]=u.useState({top:0,left:0}),{width:e,height:r}=c({ref:d,isVisible:n}),{width:l,height:m}=a();return u.useEffect(()=>{if(n&&i.current){const s=i.current.getBoundingClientRect();let h=Math.round(s.bottom+t),o=Math.round(s.left);h+r>window.innerHeight&&(h=Math.round(s.top-r-t)),o+e>window.innerWidth&&(o=Math.round(window.innerWidth-e-t)),o<0&&(o=t),w({top:h,left:o})}},[n,i,r,e,t,l,m]),f};export{H as u};
