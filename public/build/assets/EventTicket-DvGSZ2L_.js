import{j as e,W as j,q as p,r as y}from"./app-DuOYXqGg.js";import{B as k}from"./BreadCrumb-CXiT55GR.js";import{E as N,f as T}from"./EventDetailPanel-C4aK_bfh.js";import{U as w}from"./UserLayout-CeOQpvSU.js";import{N as E}from"./notification-hbyfIv5m.js";import{s as C}from"./showConfirmation-Dvs7K4RM.js";import"./sweetalert2.esm.all-D3pEHXw3.js";function B({tickets:l,setCounter:t}){return e.jsx(e.Fragment,{children:l.map((o,d)=>e.jsxs("div",{className:"border border-teal-700 shadow-md rounded-md flex items-center justify-between p-5",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"",children:o.name}),e.jsx("span",{className:"poppins-semibold",children:o.format_price})]}),e.jsxs("div",{className:"flex items-center gap-3 action",children:[e.jsx("input",{type:"hidden",className:"price",defaultValue:o.price}),e.jsx("button",{onClick:r=>{const u=r.target.closest("div").querySelector(".count");t("minus",u,o.id)},type:"button",className:"btn-minus text-red-700 border-2 border-red-700 hover:bg-red-700 hover:bg-opacity-20 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5",children:e.jsx("i",{className:"fa-solid fa-minus"})}),e.jsx("input",{type:"number",name:`count[${o.id}]`,readOnly:"",defaultValue:0,className:"poppins-medium count text-center bg-gray-100 border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block md:w-[80px] w-[70px] py-2.5 px-2.5"}),e.jsx("button",{onClick:r=>{const u=r.target.closest("div").querySelector(".count");t("plus",u,o.id)},type:"button",className:"btn-plus text-teal-700 border-2 border-teal-700 hover:bg-teal-700 hover:bg-opacity-20 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800",children:e.jsx("i",{className:"fa-solid fa-plus"})})]})]},d))})}function O({title:l,event:t}){const{data:o,setData:d,post:r,processing:u,errors:S,reset:q}=j({count:[]}),f={before:[{url:route("home"),name:"Beranda"},{url:route("event",t.slug),name:t.name}],active:l},x=(a,c,i)=>{const s=+c.value;if(a==="plus"){c.value=s+1;const n=[...o.count];n[i]={id:i,count:s+1},d("count",n)}else{s>0&&(c.value=s-1);const n=[...o.count];n[i]={id:i,count:s-1},d("count",n)}b()},b=()=>{let a=0,c=0;document.querySelectorAll(".action").forEach(s=>{const n=+s.querySelector(".count").value,v=+s.querySelector(".price").value;a+=n*v,c+=n}),document.getElementById("total-ticket").innerHTML=`${c} Tiket Dipesan`,document.getElementById("total").innerHTML=T(a)},{auth:g}=p().props,h=a=>{a.preventDefault(),g?r(route("event.save-tickets",t.slug)):C({title:"Konfirmasi",text:"Anda belum login, silahkan login untuk membeli ticket",icon:"warning",confirmButtonText:"Login",cancelButtonText:"Batal",onConfirm:()=>{r(route("event.save-tickets",t.slug))}})},{notification:m}=p().props;return y.useEffect(()=>{m&&E(m)},[m]),e.jsxs(w,{title:l,children:[e.jsx(k,{breadCrumbData:f}),e.jsx("div",{className:"mt-10 min-h-[50vh]",children:e.jsx("form",{onSubmit:h,method:"POST",children:e.jsxs("div",{className:"mt-8 grid grid-cols-12 gap-8 min-h-[80vh]",children:[e.jsxs("div",{className:"md:col-span-8 col-span-12 h-fit",children:[e.jsx("div",{className:"border p-5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md",children:e.jsx("span",{className:"text-center block",children:"Kategori Tiket"})}),e.jsx("div",{className:"flex flex-col mt-5 gap-5",children:e.jsx(B,{setCounter:x,tickets:t.tickets})})]}),e.jsx("div",{className:"md:col-span-4 col-span-12 h-fit  bg-white border border-teal-700 shadow-md rounded-md",children:e.jsx(N,{event:t})})]})})})]})}export{O as default};