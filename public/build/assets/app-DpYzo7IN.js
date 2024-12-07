const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-DqwMvBEd.js","assets/react-CvdimOb_.js","assets/vendor-WcNsT5NC.js","assets/lodash-C5IC_buG.js","assets/vendor-BaVkx4tQ.css","assets/AuthLayout-DX1zdTx-.js","assets/notification-xTIW59Dt.js","assets/Register-BzKJE5Nr.js","assets/ConfirmPassword-CA8KZ9J5.js","assets/TextInput-CHwIwWuO.js","assets/InputLabel-BFk2Gws_.js","assets/PrimaryButton-BmrvRuhC.js","assets/GuestLayout-DCYvQQsY.js","assets/ApplicationLogo-mfwcK6Dl.js","assets/ForgotPassword-BjEu1_cS.js","assets/Login-Cc7B7sKw.js","assets/Register-D_qkB_Wc.js","assets/ResetPassword-DwouSZ50.js","assets/VerifyEmail-DzrBgQOE.js","assets/Dashboard-Od6WYFfm.js","assets/AuthenticatedLayout-CPVE6n7R.js","assets/Edit-UasmsldN.js","assets/DeleteUserForm-N5dcvUTD.js","assets/UpdatePasswordForm-CudaEU3W.js","assets/UpdateProfileInformationForm-Chsp-Vih.js","assets/Welcome-CKM95cvP.js","assets/Dashboard-0GOhXwoU.js","assets/BreadCrumb-BM_g8UbZ.js","assets/AdminLayout-D2prnyar.js","assets/Create-Cq-gHhDA.js","assets/Button-Cf0_gnbI.js","assets/InputGroup-DyF1ydnE.js","assets/Detail-CR2rCx3j.js","assets/showConfirmation-BXKusGuB.js","assets/Index-jCiaKroP.js","assets/Create-Anh2K1UW.js","assets/Edit-V-TQylUH.js","assets/Index-DZ-Z5qFJ.js","assets/initDataTable-C2EvKyFD.js","assets/Create-DWZDhcu2.js","assets/SelectUnit-BhVoJolV.js","assets/Edit-hHXHlQdQ.js","assets/Index-hHn5XMsJ.js","assets/EventDataDiri-BTpreJ0K.js","assets/EventDetailPanel-cBtwdBfP.js","assets/UserLayout-B0GKI0ri.js","assets/getDatePart-HgEJ48wy.js","assets/getDistance-Dm5tcyCK.js","assets/timeToSeconds-hLgWVabV.js","assets/EventDetail-CwxsXAYf.js","assets/EventPayment-CENoIqnH.js","assets/EventPaymentWaiting-Bkz5PrbK.js","assets/TransactionDetailModalBody-B_5l2SeL.js","assets/EventTicket-B98rwlXF.js","assets/Profile-Bc29_inl.js","assets/TransactionHistory-CRY1j-C9.js","assets/Welcome-Chs0lEmx.js"])))=>i.map(i=>d[i]);
import{V as v,c as p,j as g}from"./react-CvdimOb_.js";import{a as x,r as A}from"./vendor-WcNsT5NC.js";import"./lodash-C5IC_buG.js";const R="modulepreload",V=function(o){return"/build/"+o},P={},e=function(a,i,u){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));d=Promise.allSettled(i.map(_=>{if(_=V(_),_ in P)return;P[_]=!0;const n=_.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${m}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":R,n||(s.as="script"),s.crossOrigin="",s.href=_,r&&s.setAttribute("nonce",r),document.head.appendChild(s),n)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${_}`)))})}))}function E(t){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t}return d.then(t=>{for(const r of t||[])r.status==="rejected"&&E(r.reason);return a().catch(E)})};window.axios=x;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const f="S-TIX";v({title:o=>`${f} - ${o}`,resolve:o=>A(`./Pages/${o}.jsx`,Object.assign({"./Pages/Auth/Login.jsx":()=>e(()=>import("./Login-DqwMvBEd.js"),__vite__mapDeps([0,1,2,3,4,5,6])),"./Pages/Auth/Register.jsx":()=>e(()=>import("./Register-BzKJE5Nr.js"),__vite__mapDeps([7,1,2,3,4,5,6])),"./Pages/Auth/old/ConfirmPassword.jsx":()=>e(()=>import("./ConfirmPassword-CA8KZ9J5.js"),__vite__mapDeps([8,1,2,3,4,9,10,11,12,13])),"./Pages/Auth/old/ForgotPassword.jsx":()=>e(()=>import("./ForgotPassword-BjEu1_cS.js"),__vite__mapDeps([14,1,2,3,4,9,11,12,13])),"./Pages/Auth/old/Login.jsx":()=>e(()=>import("./Login-Cc7B7sKw.js"),__vite__mapDeps([15,1,2,3,4,9,10,11,12,13])),"./Pages/Auth/old/Register.jsx":()=>e(()=>import("./Register-D_qkB_Wc.js"),__vite__mapDeps([16,1,2,3,4,9,10,11,12,13])),"./Pages/Auth/old/ResetPassword.jsx":()=>e(()=>import("./ResetPassword-DwouSZ50.js"),__vite__mapDeps([17,1,2,3,4,9,10,11,12,13])),"./Pages/Auth/old/VerifyEmail.jsx":()=>e(()=>import("./VerifyEmail-DzrBgQOE.js"),__vite__mapDeps([18,1,2,3,4,11,12,13])),"./Pages/Dashboard.jsx":()=>e(()=>import("./Dashboard-Od6WYFfm.js"),__vite__mapDeps([19,1,2,3,4,20,13])),"./Pages/Profile/Edit.jsx":()=>e(()=>import("./Edit-UasmsldN.js"),__vite__mapDeps([21,1,2,3,4,20,13,22,9,10,23,11,24])),"./Pages/Profile/Partials/DeleteUserForm.jsx":()=>e(()=>import("./DeleteUserForm-N5dcvUTD.js"),__vite__mapDeps([22,1,2,3,4,9,10])),"./Pages/Profile/Partials/UpdatePasswordForm.jsx":()=>e(()=>import("./UpdatePasswordForm-CudaEU3W.js"),__vite__mapDeps([23,1,2,3,4,9,10,11])),"./Pages/Profile/Partials/UpdateProfileInformationForm.jsx":()=>e(()=>import("./UpdateProfileInformationForm-Chsp-Vih.js"),__vite__mapDeps([24,1,2,3,4,9,10,11])),"./Pages/Welcome.jsx":()=>e(()=>import("./Welcome-CKM95cvP.js"),__vite__mapDeps([25,1,2,3,4])),"./Pages/backend/Dashboard.jsx":()=>e(()=>import("./Dashboard-0GOhXwoU.js"),__vite__mapDeps([26,1,2,3,4,27,28])),"./Pages/backend/Event/Create.jsx":()=>e(()=>import("./Create-Cq-gHhDA.js"),__vite__mapDeps([29,1,2,3,4,27,30,31,28])),"./Pages/backend/Event/Detail.jsx":()=>e(()=>import("./Detail-CR2rCx3j.js"),__vite__mapDeps([32,1,2,3,4,27,31,30,28,6,33])),"./Pages/backend/Event/Index.jsx":()=>e(()=>import("./Index-jCiaKroP.js"),__vite__mapDeps([34,1,2,3,4,27,28,6,33])),"./Pages/backend/Vendor/Create.jsx":()=>e(()=>import("./Create-Anh2K1UW.js"),__vite__mapDeps([35,1,2,3,4,27,30,31,28])),"./Pages/backend/Vendor/Edit.jsx":()=>e(()=>import("./Edit-V-TQylUH.js"),__vite__mapDeps([36,1,2,3,4,27,30,31,28])),"./Pages/backend/Vendor/Index.jsx":()=>e(()=>import("./Index-DZ-Z5qFJ.js"),__vite__mapDeps([37,1,2,3,4,27,38,28,6,33])),"./Pages/backend/Voucher/Create.jsx":()=>e(()=>import("./Create-DWZDhcu2.js"),__vite__mapDeps([39,1,2,3,4,27,30,31,40,28,6])),"./Pages/backend/Voucher/Edit.jsx":()=>e(()=>import("./Edit-hHXHlQdQ.js"),__vite__mapDeps([41,1,2,3,4,27,30,31,40,28,6])),"./Pages/backend/Voucher/Index.jsx":()=>e(()=>import("./Index-hHn5XMsJ.js"),__vite__mapDeps([42,1,2,3,4,27,38,28,6,33])),"./Pages/frontend/Event/EventDataDiri.jsx":()=>e(()=>import("./EventDataDiri-BTpreJ0K.js"),__vite__mapDeps([43,1,2,3,4,27,44,45,46,47,6,48])),"./Pages/frontend/Event/EventDetail.jsx":()=>e(()=>import("./EventDetail-CwxsXAYf.js"),__vite__mapDeps([49,1,2,3,4,27,45])),"./Pages/frontend/Event/EventPayment.jsx":()=>e(()=>import("./EventPayment-CENoIqnH.js"),__vite__mapDeps([50,1,2,3,4,27,44,45,47,6,48])),"./Pages/frontend/Event/EventPaymentWaiting.jsx":()=>e(()=>import("./EventPaymentWaiting-Bkz5PrbK.js"),__vite__mapDeps([51,1,2,3,4,47,52,45])),"./Pages/frontend/Event/EventTicket.jsx":()=>e(()=>import("./EventTicket-B98rwlXF.js"),__vite__mapDeps([53,1,2,3,4,27,44,45,6,33])),"./Pages/frontend/Profile/Profile.jsx":()=>e(()=>import("./Profile-Bc29_inl.js"),__vite__mapDeps([54,1,2,3,4,27,31,46,45])),"./Pages/frontend/Transaction/TransactionHistory.jsx":()=>e(()=>import("./TransactionHistory-CRY1j-C9.js"),__vite__mapDeps([55,1,2,3,4,27,52,45])),"./Pages/frontend/Welcome.jsx":()=>e(()=>import("./Welcome-Chs0lEmx.js"),__vite__mapDeps([56,1,2,3,4,45]))})),setup({el:o,App:a,props:i}){p(o).render(g.jsx(a,{...i}))},progress:{color:"#0f766e"}});
