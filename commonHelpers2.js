import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const l=document.querySelector(".feedback-form");document.addEventListener("DOMContentLoaded",o);const n="feedback-form-state";function o(){const e=localStorage.getItem(n);if(e){const t=JSON.parse(e),{email:a,message:s}=t,{email:r,message:m}=l.elements;r.value=a,m.value=s}}l.addEventListener("input",e=>{const{email:t,message:a}=e.currentTarget.elements,s={email:t.value.trim(),message:a.value.trim()};localStorage.setItem(n,JSON.stringify(s))});l.addEventListener("submit",e=>{e.preventDefault();const{email:t,message:a}=l.elements;if(t.value!==""&&a.value!==""){const s={email:t.value.trim(),message:a.value.trim};console.log(s)}else return alert("Please fill in all fields before submitting.");localStorage.removeItem(n),l.reset()});
//# sourceMappingURL=commonHelpers2.js.map