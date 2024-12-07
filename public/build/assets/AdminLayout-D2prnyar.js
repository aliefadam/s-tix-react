import{j as e,a as o,r as d,q as u,Y as p}from"./react-CvdimOb_.js";import{O as h}from"./vendor-WcNsT5NC.js";function g(){return e.jsx("footer",{className:"fixed bottom-0 left-[250px] z-10 w-[calc(100%-250px)] bg-white h-[70px] px-5 flex justify-center items-center shadow-md",children:e.jsx("span",{className:"text-sm poppins-medium text-teal-700",children:"S-TIX © 2024. All rights reserved"})})}function f(){return e.jsx("div",{className:"h-[80px] flex items-center justify-center p-5 text-teal-700",children:e.jsx(o,{href:route("admin.dashboard"),className:"text-2xl poppins-black",children:"S-TIX"})})}function b({menu_title:t,menu_link:s}){return e.jsx(e.Fragment,{children:t.map((a,n)=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("span",{className:"text-sm text-gray-700 poppins-medium block mb-1",children:a.name}),s.filter(r=>r.slug_id==a.slug).map((r,i)=>e.jsxs(o,{href:route(r.url),className:`flex gap-2 items-center p-3 rounded-md duration-200 ${route().current(`admin.${r.name}`)||route().current(`admin.${r.name}.*`)?"text-white bg-gradient-to-r from-teal-600 to-teal-700":"hover:shadow-md active:scale-[0.98]"}`,children:[e.jsx("i",{className:r.icon}),e.jsx("span",{className:"text-sm capitalize",children:r.name})]},i))]},n))})}function j({menus:t}){const{menu_title:s,menu_link:a}=t;return e.jsxs("aside",{className:"w-[250px] bg-white shadow-sm fixed top-0",children:[e.jsx(f,{}),e.jsx("div",{className:"p-5 flex flex-col gap-3 h-[calc(100vh-80px)] overflow-auto scrollbar",children:e.jsx(b,{menu_link:a,menu_title:s})})]})}const v=()=>{const t=new Date,s=t.getHours().toString().padStart(2,"0"),a=t.getMinutes().toString().padStart(2,"0"),n=t.getSeconds().toString().padStart(2,"0"),r=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],l=r[t.getDay()],c=t.getDate().toString().padStart(2,"0"),m=i[t.getMonth()].padStart(2,"0"),x=t.getFullYear();return`${l}, ${c} ${m} ${x} - ${s}:${a}:${n}`};function w({live:t}){return e.jsxs("div",{className:"flex items-center gap-4 text-teal-700",children:[e.jsx("button",{className:"border border-teal-700 px-3 py-1.5 rounded-md hover:bg-teal-700 hover:bg-opacity-20 duration-200 focus:ring-4 focus:ring-teal-300",children:e.jsx("i",{className:"fa-solid fa-bars text-xl"})}),e.jsx("h1",{className:"poppins-medium",id:"live-clock",children:t})]})}function y({auth:t}){return e.jsxs("button",{id:"dropdownAvatarNameButton","data-dropdown-toggle":"dropdownAvatarName",className:"flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-gray-900 dark:hover:text-gray-900 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white",type:"button",children:[e.jsx("img",{className:"w-8 h-8 me-2 rounded-full",src:"/imgs/av-2.svg",alt:"user photo"}),t.name,e.jsx("svg",{className:"w-2.5 h-2.5 ms-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 4 4 4-4"})})]})}function N(){return e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownInformdropdownAvatarNameButtonationButton",children:[e.jsx("li",{children:e.jsx(o,{href:route("admin.dashboard"),className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Dashboard"})}),e.jsx("li",{children:e.jsx(o,{href:route("admin.changePassword"),className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Ganti Password"})})]}),e.jsx("div",{className:"py-2",children:e.jsx(o,{href:route("logout"),className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Keluar"})})]})}function k({auth:t}){return e.jsxs("div",{id:"dropdownAvatarName",className:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",children:[e.jsxs("div",{className:"px-4 py-3 text-sm flex flex-col gap-2 text-gray-900 dark:text-white",children:[e.jsx("div",{className:"font-medium ",children:t.name}),e.jsx("div",{className:"truncate",children:t.email})]}),e.jsx(N,{})]})}function S({auth:t}){return e.jsxs("div",{className:"",children:[e.jsx(y,{auth:t}),e.jsx(k,{auth:t})]})}function A({today:t,auth:s}){const[a,n]=d.useState(t);return d.useEffect(()=>{setInterval(()=>{n(v())},1e3)},[a]),e.jsxs("nav",{className:"fixed top-0 left-[250px] z-20 w-[calc(100%-250px)] bg-white h-[80px] px-5 flex justify-between items-center shadow-md",children:[e.jsx(w,{live:a}),e.jsx(S,{auth:s})]})}function F({title:t,children:s}){d.useEffect(()=>{h()},[]);const{menu:a,today:n,auth:r}=u().props;return e.jsxs("div",{className:"bg-[#475569] bg-opacity-10 min-h-screen",children:[e.jsx(p,{title:t}),e.jsx(j,{menus:a}),e.jsx(A,{today:n,auth:r}),e.jsx("main",{className:"ml-[250px] mt-[80px] w-[calc(100%-250px)] p-6 pb-24",children:s}),e.jsx(g,{})]})}export{F as A};
