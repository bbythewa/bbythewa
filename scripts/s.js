!function(){"use strict";const[t,e]=(()=>{let t;return[(e,s)=>(t=(()=>{const{hostname:t,search:o}=s||window.location;if(!t.includes(".hlx.")&&!t.includes("local"))return e;const i=new URLSearchParams(o).get("milolibs")||"main";return"local"===i?"http://localhost:6456/libs":i.includes("--")?`https://${i}.hlx.live/libs`:`https://${i}--milo--adobecom.hlx.live/libs`})(),t),()=>t]})(),s={locales:{"":{ietf:"en-US",tk:"hah7vzn.css"},de:{ietf:"de-DE",tk:"hah7vzn.css"},kr:{ietf:"ko-KR",tk:"zfo3ouc"}}};!async function(){const t=document.querySelector("img");t?.removeAttribute("loading")}();const o=t("https://milo.adobe.com/libs");[`${o}/styles/styles.css`].forEach((t=>{const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),document.head.appendChild(e)})),async function(){const{loadArea:t,setConfig:e}=await import(`${o}/utils/utils.js`);e({...s,miloLibs:o}),await t()}()}();
