import{j as e,a as r,q as o,r as m,W as c}from"./app-Bp3fNANz.js";import{B as x}from"./BreadCrumb-C33LVtU7.js";import{A as p}from"./AdminLayout-f0pb0Ns4.js";import{N as f}from"./notification-D8nuFN0y.js";import{s as u}from"./showConfirmation-2MnBgizT.js";function h({events:t,handleDeleteEvent:i}){return e.jsx(e.Fragment,{children:t.map((s,a)=>e.jsxs("div",{className:"border border-teal-700 rounded-xl overflow-hidden shadow-md",children:[e.jsx("img",{src:s.banner,className:"object-cover w-full h-[220px]",alt:""}),e.jsxs("div",{className:"p-4 flex flex-col gap-1 border-b border-teal-700 bg-white h-[110px]",children:[e.jsx("span",{className:"text-xs text-gray-500 poppins-medium",children:s.date}),e.jsx("span",{className:"uppercase poppins-semibold text-[15px] text-teal-700",children:s.name}),e.jsxs("div",{className:"mt-1 flex items-center gap-1.5",children:[e.jsx("i",{className:"text-xs fa-regular fa-location-dot mr-1"}),e.jsx("span",{className:"text-xs poppins-medium text-ellipsis",children:`${s.building_name} | ${s.address.toString().substring(0,40)} ...`})]})]}),e.jsxs("div",{className:"p-3.5 grid grid-cols-3 gap-3 items-center bg-white",children:[e.jsxs(r,{href:route("admin.event.show",s.id),className:"flex justify-center items-center gap-1 text-yellow-600 hover:text-yellow-700 duration-200",children:[e.jsx("i",{className:"fa-regular fa-pen-to-square"}),e.jsx("span",{className:"text-xs poppins-medium",children:"Edit"})]}),e.jsxs(r,{href:route("admin.event.detail",s.id),className:"flex justify-center items-center gap-1 text-blue-600 hover:text-blue-700 duration-200",children:[e.jsx("i",{className:"fa-regular fa-circle-info"}),e.jsx("span",{className:"text-xs poppins-medium",children:"Detail"})]}),e.jsxs(r,{onClick:()=>i(s.id),href:"#",className:"btn-delete-event flex justify-center items-center gap-1 text-red-600 hover:text-red-700 duration-200",children:[e.jsx("i",{className:"fa-regular fa-trash"}),e.jsx("span",{className:"text-xs poppins-medium",children:"Hapus"})]})]})]},a))})}function w({title:t,events:i}){const s={active:t},{notification:a}=o().props;m.useEffect(()=>{a&&f(a)},[a]);const n=c(),l=d=>{u({title:"Apakah kamu yakin?",text:"Anda tidak dapat mengembalikan data ini!",onConfirm:()=>{n.delete(route("admin.event.delete",d))}})};return e.jsxs(p,{title:t,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(x,{breadCrumbData:s}),e.jsxs(r,{href:route("admin.event.create"),className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800",children:[e.jsx("i",{className:"fa-solid fa-plus mr-1.5"})," Tambah Event"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx("div",{className:"grid grid-cols-3 gap-5",children:e.jsx(h,{events:i,handleDeleteEvent:l})})})]})}export{w as default};
