import{m as d}from"./move-focus-on-element-by-id-CpbS-38o.js";function i({e:c,options:n,onClose:s}){let a="";n.forEach(e=>{document.getElementById(e.id)===document.activeElement&&(a=e.id)});const r=n.findIndex(e=>e.id===a);switch(c.key){case"Escape":c.preventDefault(),s();break;case"ArrowUp":{c.preventDefault();const e=r-1>=0?r-1:n.length-1,t=n[e];t&&d(t.id);break}case"ArrowDown":case"Tab":{c.preventDefault();const e=r===n.length-1?0:r+1,t=n[e];t&&d(t.id);break}}}export{i as h};