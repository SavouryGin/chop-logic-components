import{r as e}from"./index-B_nTefMF.js";import{u as M}from"./index-DfsBjX5Y.js";import{u as f}from"./index-7IJ2GIBa.js";const b=({wrapperRef:t,tooltipRef:l,isOpened:n,spacing:o=4})=>{const[m,c]=e.useState({top:0,left:0}),{width:s,height:h}=M({ref:l,isVisible:n}),{width:r,height:W}=f();return e.useEffect(()=>{if(n&&(t!=null&&t.current)){const u=t==null?void 0:t.current.getBoundingClientRect();let d=Math.round(u.bottom+o),i=Math.round(u.left);d+h>window.innerHeight&&(d=Math.round(u.top-h-o)),i+s>window.innerWidth&&(i=Math.round(window.innerWidth-s-o)),i<0&&(i=o),c({top:d,left:i})}},[n,t,h,s,o,r,W]),m};export{b as u};
