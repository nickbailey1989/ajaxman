var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{Z:()=>r});const r=(e,t)=>{if(!e.url&&e.type)throw new Error("data parameter should have url and type option");let r=new XMLHttpRequest;r.open(e.type,e.url),r.onload=()=>{t(r)},r.send()};var o=t.Z;export{o as default};