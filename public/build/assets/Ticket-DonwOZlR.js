import{j as e,a as i}from"./app-D0RIW6RC.js";import{B as n}from"./BreadCrumb-M-vw3exm.js";import{U as c}from"./UserLayout-Cyf56WM5.js";function o({dataTabsTarget:s}){const{ticketCommings:a,ticketPasts:t}=s;return e.jsx("div",{className:"mb-4 mt-5 border-b border-gray-200 dark:border-gray-700",children:e.jsxs("ul",{className:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-styled-tab","data-tabs-toggle":"#default-styled-tab-content","data-tabs-active-classes":"text-teal-600 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-500 border-teal-600 dark:border-teal-500","data-tabs-inactive-classes":"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",role:"tablist",children:[e.jsx("li",{className:"me-2",role:"presentation",children:e.jsx("button",{className:"flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg",id:`${a}-button`,"data-tabs-target":`#${a}`,type:"button",role:"tab","aria-controls":`${a}`,"aria-selected":"false",children:"Event Mendatang"})}),e.jsx("li",{className:"me-2",role:"presentation",children:e.jsx("button",{className:"flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:`#${t}-button`,"data-tabs-target":`#${t}`,type:"button",role:"tab","aria-controls":`${t}`,"aria-selected":"false",children:"Event Berlalu"})})]})})}function l({tickets:s,dataTabsTarget:a}){return e.jsxs("div",{className:"hidden py-4 rounded-lg",id:a,role:"tabpanel","aria-labelledby":a,children:[s.length===0&&e.jsx("div",{className:"mt-5",children:e.jsxs("p",{className:"text-center text-lg text-gray-500",children:["Anda belum memiliki E-Ticket untuk event"," ",a=="ticket-commings"?"yang sedang berlangsung":"yang telah selesai"]})}),e.jsx("div",{className:"grid md:grid-cols-4 grid-cols-1 gap-5",children:s.map((t,r)=>e.jsxs("div",{className:"border border-teal-700 shadow-md rounded-md",children:[e.jsxs("div",{className:"p-4 flex gap-4 border-b border-teal-700",children:[e.jsx("div",{className:"flex-[1]",children:e.jsx("img",{src:t.event.banner,className:"rounded-md",alt:""})}),e.jsxs("div",{className:"flex-[1]",children:[e.jsx("h1",{className:"poppins-medium leading-[20px]",children:t.event.name}),e.jsx("p",{className:"text-xs mt-1",children:t.event.date})]})]}),e.jsxs("div",{className:"p-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xs poppins-medium text-gray-600",children:"Jumlah"}),e.jsxs("span",{className:"text-sm poppins-medium",children:[t.ticket_count," Tiket"]})]}),e.jsx(i,{href:route("ticket.detail",t.invoice.replace("INV-","")),className:"border poppins-medium border-teal-700 text-teal-700 bg-teal-700 bg-opacity-20 hover:bg-teal-700 hover:bg-opacity-30 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 duration-200 text-center",children:"Lihat E-Tiket"})]})]},r))})]})}function g({title:s,tickets:a}){const t={before:[{url:route("home"),name:"Beranda"}],active:s},{ticketCommings:r,ticketPasts:d}=a;return e.jsxs(c,{title:s,children:[e.jsx(n,{breadCrumbData:t}),e.jsxs("div",{className:"mt-10 min-h-[50vh]",children:[e.jsx("h1",{className:"text-center text-3xl poppins-bold text-teal-700",children:"Tiket"}),e.jsx(o,{dataTabsTarget:{ticketCommings:"ticket-commings",ticketPasts:"ticket-pasts"}}),e.jsxs("div",{id:"default-styled-tab-content",children:[e.jsx(l,{dataTabsTarget:"ticket-commings",tickets:r}),e.jsx(l,{dataTabsTarget:"ticket-pasts",tickets:d})]})]})]})}export{g as default};