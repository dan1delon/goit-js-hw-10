import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";const i=document.querySelector("form");i.addEventListener("submit",n);function n(r){r.preventDefault();const{delay:e,state:t}=r.currentTarget.elements;if(console.log(e.value,t.value),!e.value||!t.value){o.error({title:"Error",message:"Заповніть всі поля!",position:"topCenter"});return}l(e.value,t.value).then(()=>o.success({title:"OK",message:`✅ Fulfilled promise in ${e.value}ms`,position:"topCenter"})).catch(()=>o.error({title:"Error",message:`❌ Rejected promise in ${e.value}ms`,position:"topCenter"}))}function l(r,e){return new Promise((t,s)=>{setTimeout(()=>{e==="fulfilled"?t(e):s(e)},r)})}
//# sourceMappingURL=commonHelpers2.js.map