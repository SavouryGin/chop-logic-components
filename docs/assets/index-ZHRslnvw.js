import{r as t}from"./index-DJO9vBfz.js";function s(){const{innerWidth:e,innerHeight:n}=window;return{width:e,height:n}}function r(){const[e,n]=t.useState(s());return t.useEffect(()=>{function i(){n(s())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),e}export{r as u};