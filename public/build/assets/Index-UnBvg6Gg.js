import{j as e,a as t,q as l,r as n}from"./app-BewQ6wLF.js";import{B as d}from"./BreadCrumb-DGSQKb7i.js";import{A as c}from"./AdminLayout-BFbiX9j3.js";import{N as o}from"./notification-D8nuFN0y.js";function m({events:a}){return e.jsx(e.Fragment,{children:a.map((s,r)=>e.jsxs("div",{className:"border border-teal-700 rounded-xl overflow-hidden shadow-md",children:[e.jsx("img",{src:s.banner,className:"object-cover w-full h-[220px]",alt:""}),e.jsxs("div",{className:"p-4 flex flex-col gap-1 border-b border-teal-700 bg-white h-[110px]",children:[e.jsx("span",{className:"text-xs text-gray-500 poppins-medium",children:s.date}),e.jsx("span",{className:"uppercase poppins-semibold text-[15px] text-teal-700",children:s.name}),e.jsxs("div",{className:"mt-1 flex items-center gap-1.5",children:[e.jsx("i",{className:"text-xs fa-regular fa-location-dot mr-1"}),e.jsx("span",{className:"text-xs poppins-medium text-ellipsis",children:`${s.building_name} | ${s.address.toString().substring(0,40)} ...`})]})]}),e.jsxs("div",{className:"p-3.5 grid grid-cols-3 gap-3 items-center bg-white",children:[e.jsxs(t,{href:route("admin.event.show",s.id),className:"flex justify-center items-center gap-1 text-yellow-600 hover:text-yellow-700 duration-200",children:[e.jsx("i",{className:"fa-regular fa-pen-to-square"}),e.jsx("span",{className:"text-xs poppins-medium",children:"Edit"})]}),e.jsxs(t,{href:route("admin.event.detail",s.id),className:"flex justify-center items-center gap-1 text-blue-600 hover:text-blue-700 duration-200",children:[e.jsx("i",{className:"fa-regular fa-circle-info"}),e.jsx("span",{className:"text-xs poppins-medium",children:"Detail"})]}),e.jsxs(t,{href:"#","data-id":s.id,className:"btn-delete-event flex justify-center items-center gap-1 text-red-600 hover:text-red-700 duration-200",children:[e.jsx("i",{className:"fa-regular fa-trash"}),e.jsx("span",{className:"text-xs poppins-medium",children:"Hapus"})]})]})]},r))})}function h({title:a,events:s}){const r={active:a},{notification:i}=l().props;return n.useEffect(()=>{i&&o(i)},[i]),e.jsxs(c,{title:a,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(d,{breadCrumbData:r}),e.jsxs(t,{href:route("admin.event.create"),className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800",children:[e.jsx("i",{className:"fa-solid fa-plus mr-1.5"})," Tambah Event"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx("div",{className:"grid grid-cols-3 gap-5",children:e.jsx(m,{events:s})})})]})}export{h as default};
