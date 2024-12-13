import{j as e,a as c,r as n,q as o,W as y}from"./app-5MWagu1p.js";import{B as k}from"./BreadCrumb-J-9IZ_BR.js";import{i as N}from"./initDataTable-BEPR5DYF.js";import{A as w}from"./AdminLayout-CAPwWwOO.js";import{N as v}from"./notification-hbyfIv5m.js";import{s as V}from"./showConfirmation-Dvs7K4RM.js";import"./sweetalert2.esm.all-D3pEHXw3.js";function B({email:t,password:s}){return e.jsxs("div",{className:"p-4 md:p-5 space-y-4",children:[e.jsx("p",{className:"text-sm leading-relaxed text-gray-500 dark:text-gray-400",children:"Vendor Berhasil Didaftarkan, silahkan berikan kredensial berikut kepada vendor :"}),e.jsxs("div",{className:"flex flex-col gap-2 shadow-md rounded-md p-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-[80px]",children:"Email"}),e.jsx("span",{children:":"}),e.jsx("span",{children:t})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-[80px]",children:"Password"}),e.jsx("span",{children:":"}),e.jsx("span",{children:s})]})]}),e.jsxs("p",{className:"text-sm leading-relaxed text-gray-500 dark:text-gray-400",children:["Anda juga dapat menginformasikan kepada vendor untuk memeriksa kredensial yang telah dikirimkan ke email mereka."," ",e.jsx("span",{className:"text-red-500 poppins-medium",children:"Segera sarankan agar vendor mengganti kata sandi demi keamanan"}),"."]})]})}function C(){return e.jsx("div",{className:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",children:e.jsx("button",{"data-modal-hide":"default-modal",type:"button",className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:"Baik, Mengerti"})})}function D(){return e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsxs("h3",{className:"text-lg font-semibold text-teal-900 dark:text-white",children:["Pendaftaran Berhasil"," ",e.jsx("i",{className:"fa-solid fa-circle-check ml-1"})]}),e.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"default-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function T({email:t,password:s}){return e.jsxs(e.Fragment,{children:[e.jsx("button",{"data-modal-target":"default-modal","data-modal-toggle":"default-modal",className:"hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",children:"Toggle modal"}),e.jsx("div",{id:"default-modal",tabIndex:-1,"aria-hidden":"true",className:"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full flex bg-black bg-opacity-50",children:e.jsx("div",{className:"animate__animated animate__pulse relative p-4 w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsx(D,{}),e.jsx(B,{email:t,password:s}),e.jsx(C,{})]})})})]})}function E(){return e.jsx("thead",{className:"text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-5",children:"No"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Nama Vendor"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Bergabung Pada"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Aksi"})]})})}function l({route:t,title:s,onClick:r}){return e.jsx(c,{onClick:r,href:t,className:"block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:s})}function M({vendors:t,handleDelete:s}){return e.jsx("tbody",{children:t.map((r,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("td",{className:"px-6 py-5",children:a+1}),e.jsx("td",{className:"px-6 py-5",children:r.user.name}),e.jsx("td",{className:"px-6 py-5",children:r.user.email}),e.jsx("td",{className:"px-6 py-5",children:r.created_at}),e.jsxs("td",{className:"px-6 py-5",children:[e.jsx("button",{id:`dropdownDefaultButton-${a}`,className:"w-[30px] py-2 px-3 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md","data-dropdown-toggle":`dropdown-${a}`,children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical"})}),e.jsx("div",{id:`dropdown-${a}`,className:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700",children:e.jsxs("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":`dropdownDefaultButton-${a}`,children:[e.jsx("li",{children:e.jsx(l,{route:"#",title:"Detail"})}),e.jsx("li",{children:e.jsx(l,{route:route("admin.vendor.edit",r.user.id),title:"Edit"})}),e.jsx("li",{children:e.jsx(l,{route:"#",title:"Hapus",onClick:d=>s(d,r.user.id)})})]})})]})]},a))})}function A({vendors:t,handleDelete:s}){return n.useEffect(()=>{N()},[]),e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",id:"dataTable",children:[e.jsx(E,{}),e.jsx(M,{handleDelete:s,vendors:t})]})})}function _(){return e.jsxs("div",{className:"bg-teal-700 rounded-t-md py-4 px-5 flex items-center justify-between",children:[e.jsx("h1",{className:"text-lg poppins-medium text-white",children:"Data Vendor"}),e.jsxs(c,{href:route("admin.vendor.create"),className:"bg-white text-teal-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 text-center",children:[e.jsx("i",{className:"fa-solid fa-plus mr-1.5"}),"Tambah Vendor"]})]})}function F({title:t,vendors:s}){const r={active:t},{credentials:a}=o().props.notification||{},{notification:d}=o().props,[m,x]=n.useState(""),[u,h]=n.useState(""),[p,g]=n.useState("");n.useEffect(()=>{a&&(x(a.email),h(a.password)),d&&a==null&&v(d)},[a,d]);const f=y({vendorID:p}),j=(b,i)=>{b.preventDefault(),g(i),V({title:"Apakah kamu yakin?",text:"Anda tidak dapat mengembalikan data ini!",onConfirm:()=>{f.delete(route("admin.vendor.delete",i))}})};return e.jsxs(w,{title:t,children:[e.jsx(k,{breadCrumbData:r}),e.jsxs("div",{className:"mt-5 bg-white shadow-md rounded-md overflow-hiddens",children:[e.jsx(_,{}),e.jsx(A,{vendors:s,handleDelete:j})]}),a&&e.jsx(T,{email:m,password:u})]})}export{F as default};
