import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},s=document.querySelector(".feedback-form");s.addEventListener("submit",o);function o(a){a.preventDefault();const{email:m,message:l}=a.currentTarget.elements;e.email=m.value,e.message=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(e)),!e.email||!e.message?alert("Fill please all fields"):(console.log(e),s.reset())}const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.email=a.email,e.message=a.message,document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}localStorage.removeItem("feedback-form-state");e.email="";e.message="";
//# sourceMappingURL=commonHelpers2.js.map
