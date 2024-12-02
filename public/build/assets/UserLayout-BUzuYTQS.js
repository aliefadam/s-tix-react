import{j as e,a as l,q as m,r as x,i as d,Y as o}from"./app-BSJvdXnw.js";function n({title:a,links:r}){return e.jsxs("div",{className:"",children:[e.jsx("span",{className:"poppins-bold",children:a}),e.jsx("div",{className:"mt-4 flex flex-col gap-4 text-[13px]",children:r.map((t,i)=>e.jsx(l,{className:"hover:translate-x-1 hover:text-teal-700 duration-200",href:route(t.url),children:t.name},i))})]})}function u(){const a=[{name:"Instagram",url:"https://www.instagram.com/stixid/",icon:"fa-brands fa-instagram",color:"bg-gradient-to-r from-pink-500 to-pink-700 text-white"},{name:"YouTube",url:"https://www.youtube.com/channel/UCyIhDQV2Dh2Y2eEiXkN6n4A",icon:"fa-brands fa-youtube",color:"bg-red-700 text-white"},{name:"Twitter",url:"https://twitter.com/stix_id",icon:"fa-brands fa-x-twitter",color:"bg-black text-white"},{name:"TikTok",url:"https://www.tiktok.com/@stix.id",icon:"fa-brands fa-tiktok",color:"bg-gray-800 text-white"}];return e.jsx("div",{className:"mt-4 flex items-center gap-4",children:a.map(({name:r,url:t,icon:i,color:c})=>e.jsx("a",{href:t,className:`flex justify-center items-center size-[50px] rounded-lg text-lg ${c} hover:scale-105 duration-200`,children:e.jsx("i",{className:i})},r))})}function h(){return e.jsxs("footer",{className:"mt-5 border-t",children:[e.jsx("div",{className:"p-10 bg-teal-700 bg-opacity-5",children:e.jsxs("div",{className:"grid grid-cols-5 gap-5",children:[e.jsx(n,{title:"S-TIX",links:[{name:"Tentang Kami",url:"home"},{name:"Syarat dan Ketentuan",url:"home"},{name:"Kebijakan Privasi",url:"home"}]}),e.jsx(n,{title:"Layanan Kami",links:[{name:"Ticketing Management System",url:"home"}]}),e.jsx(n,{title:"Dukungan",links:[{name:"Customer Service",url:"home"}]}),e.jsx(n,{title:"Lainnya",links:[{name:"Cara Membeli Tiket",url:"home"}]}),e.jsxs("div",{className:"poppins-bold",children:[e.jsx("span",{children:"Ikuti Kami"}),e.jsx(u,{})]})]})}),e.jsx("div",{className:"flex justify-center items-center bg-gradient-to-r from-teal-500 to-teal-700 py-4 text-white",children:e.jsx("span",{className:"text-sm poppins-medium",children:"S-Tix © 2024. All rights reserved"})})]})}function f(){return e.jsx(l,{href:"/",className:"text-2xl poppins-black text-teal-700",children:"S-TIX"})}function g(){return e.jsx("div",{className:"flex w-[500px]",children:e.jsxs("div",{className:"relative w-full",children:[e.jsx("input",{type:"search",id:"search",className:"block py-2.5 px-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500",placeholder:"Cari berdasarkan artis, acara atau nama tempat...",required:!0}),e.jsx("button",{type:"submit",className:"absolute top-0 right-0 py-2.5 px-3 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:e.jsx("i",{className:"fa-regular fa-magnifying-glass"})})]})})}function s({href:a,name:r,icon:t}){return e.jsxs(l,{href:route(a),className:`border ${route().current(a)?"bg-teal-700 text-white hover:bg-teal-800":"border-teal-700 text-teal-700 hover:bg-teal-700 hover:bg-opacity-10"} duration-200 focus:ring-4 focus:ring-teal-300 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 flex items-center gap-2`,children:[t&&e.jsx("i",{className:t}),r]})}function p(){const{auth:a}=m().props;return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{href:"home",icon:"fa-regular fa-home",name:"Beranda"}),a?e.jsxs(e.Fragment,{children:[e.jsx(s,{href:"transaction",icon:"fa-regular fa-money-from-bracket",name:"Transaksi"}),e.jsx(s,{href:"ticket",icon:"fa-regular fa-ticket",name:"Tiket"}),e.jsx(s,{href:"profile",icon:"fa-regular fa-user",name:a.name})]}):e.jsxs(e.Fragment,{children:[e.jsx(s,{href:"login",name:"Masuk"}),e.jsx(s,{href:"register",name:"Daftar"})]})]})}function b(){return e.jsxs("nav",{className:"fixed top-0 z-20 w-full bg-white h-[80px] px-10 flex justify-between items-center shadow-md",children:[e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx(f,{}),e.jsx(g,{})]}),e.jsx(p,{})]})}function k({title:a,children:r}){return x.useEffect(()=>{d()},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{title:a}),e.jsx(b,{}),e.jsxs("main",{className:"p-10 mt-[75px] min-h-screen",children:[e.jsx(o,{title:a}),r]}),e.jsx(h,{})]})}export{k as U};
