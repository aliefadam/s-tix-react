import{j as e,W as c}from"./app-Ba9_fQmq.js";import{B as g}from"./BreadCrumb-CwhL5mzV.js";import{E as x}from"./EventDetailPanel-CmyOX6Oa.js";import{U as p}from"./UserLayout-BGDktuef.js";function h({name:t,img:a,setData:r}){return e.jsxs("div",{className:"flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700",children:[e.jsx("input",{id:t,type:"radio",defaultValue:t,name:"pembayaran",onChange:s=>r("payment_method",s.target.value),className:"w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsxs("label",{htmlFor:t,className:"w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-2",children:[e.jsx("img",{src:a,className:"w-[50px] border p-2",alt:""}),t]})]})}function n({type:t,methods:a,setData:r}){return e.jsxs("div",{className:"border border-teal-700 text-white rounded-md shadow-md overflow-hidden",children:[e.jsx("div",{className:"p-5 bg-gradient-to-r from-teal-400 to-teal-500",children:e.jsx("span",{className:"text-center block",children:t})}),e.jsx("div",{className:"p-5 flex flex-col gap-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.map((s,o)=>e.jsx(h,{name:s.name,img:s.image,setData:r},o))})})]})}function N({title:t,event:a,data_ticket:r,method_payment:s}){const o={before:[{url:route("home"),name:"Beranda"},{url:route("event",a.slug),name:a.name},{url:route("event.tickets",a.slug),name:"Pilih Tiket"},{url:route("event.data-diri",a.slug),name:"Pengisian Data Diri"}],active:t},{data:f,setData:l,post:i,processing:m}=c({data_ticket:r,event_id:a.id,promo_code:"",promo_percent:"",promo_amount:"",payment_method:""}),d=u=>{u.preventDefault(),i(route("event.payment",a.slug))};return e.jsxs(p,{title:"Pilih Pembayaran",children:[e.jsx(g,{breadCrumbData:o}),e.jsx("form",{action:"",onSubmit:d,method:"POST",children:e.jsxs("div",{className:"mt-8 grid grid-cols-12 gap-8 min-h-[80vh]",children:[e.jsxs("div",{className:"col-span-8 h-fit flex flex-col gap-5",children:[e.jsx(n,{type:"Virtual Account",methods:s.virtual_account,setData:l}),e.jsx(n,{type:"E-Wallet & QRIS",methods:s.e_wallet,setData:l})]}),e.jsx(x,{ticketCount:r.pengunjung.length,event:a,subTotal:r.sub_total,tax:r.tax,taxAmount:r.tax_amount,total:r.total,processing:m})]})})]})}export{N as default};