import{j as e,W as h}from"./app-uO8-Avc9.js";import{B as k}from"./BreadCrumb-CbReTh9y.js";import{E as v,f as j}from"./EventDetailPanel-DHY3gwy7.js";import{U as y}from"./UserLayout-DyN6HqX9.js";function N({tickets:r,setCounter:c}){return e.jsx(e.Fragment,{children:r.map((t,u)=>e.jsxs("div",{className:"border border-teal-700 shadow-md rounded-md flex items-center justify-between p-5",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"",children:t.name}),e.jsx("span",{className:"poppins-semibold",children:t.format_price})]}),e.jsxs("div",{className:"flex items-center gap-3 action",children:[e.jsx("input",{type:"hidden",className:"price",defaultValue:t.price}),e.jsx("button",{onClick:i=>{const d=i.target.closest("div").querySelector(".count");c("minus",d,t.id)},type:"button",className:"btn-minus text-red-700 border-2 border-red-700 hover:bg-red-700 hover:bg-opacity-20 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800",children:e.jsx("i",{className:"fa-solid fa-minus"})}),e.jsx("input",{type:"number",name:`count[${t.id}]`,readOnly:"",defaultValue:0,className:"poppins-medium count text-center bg-gray-100 border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"}),e.jsx("button",{onClick:i=>{const d=i.target.closest("div").querySelector(".count");c("plus",d,t.id)},type:"button",className:"btn-plus text-teal-700 border-2 border-teal-700 hover:bg-teal-700 hover:bg-opacity-20 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800",children:e.jsx("i",{className:"fa-solid fa-plus"})})]})]},u))})}function q({event:r}){const{data:c,setData:t,post:u,processing:i,errors:d,reset:T}=h({count:[]}),m=[{url:route("home"),name:"Beranda"},{url:route("event",r.slug),name:r.name}],p="Pilih Tiket",f=(s,n,l)=>{const a=+n.value;if(s==="plus"){n.value=a+1;const o=[...c.count];o[l]={id:l,count:a+1},t("count",o)}else{a>0&&(n.value=a-1);const o=[...c.count];o[l]={id:l,count:a-1},t("count",o)}x()},x=()=>{let s=0,n=0;document.querySelectorAll(".action").forEach(a=>{const o=+a.querySelector(".count").value,b=+a.querySelector(".price").value;s+=o*b,n+=o}),document.getElementById("total-ticket").innerHTML=`${n} Tiket Dipesan`,document.getElementById("total").innerHTML=j(s)},g=s=>{s.preventDefault(),u(route("event.data-diri",r.slug))};return e.jsxs(y,{title:"Detail Event",children:[e.jsx(k,{active:p,before:m}),e.jsx("div",{className:"mt-10 min-h-[50vh]",children:e.jsx("form",{onSubmit:g,action:route("event.data-diri",r.slug),method:"POST",children:e.jsxs("div",{className:"mt-8 grid grid-cols-12 gap-8 min-h-[80vh]",children:[e.jsxs("div",{className:"col-span-8 h-fit",children:[e.jsx("div",{className:"border p-5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md",children:e.jsx("span",{className:"text-center block",children:"Kategori Tiket"})}),e.jsx("div",{className:"flex flex-col mt-5 gap-5",children:e.jsx(N,{setCounter:f,tickets:r.tickets})})]}),e.jsx(v,{event:r})]})})})]})}export{q as default};
