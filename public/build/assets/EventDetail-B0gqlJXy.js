import{j as e,a as r}from"./app-Cd7ZNo18.js";import{B as i}from"./BreadCrumb-DzjuUnDI.js";import{U as t}from"./UserLayout-rfh2apWa.js";function c({path:s}){return e.jsx("img",{src:s,className:"w-full h-[500px] object-cover rounded-md",alt:""})}function d({description:s}){return e.jsxs("div",{className:"mt-5 border-b border-teal-700 pb-5",children:[e.jsx("h1",{className:"text-2xl poppins-semibold",children:"Deskripsi"}),e.jsx("div",{className:"ckeditor mt-2",dangerouslySetInnerHTML:{__html:s}})]})}function n({talents:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-2xl poppins-semibold",children:"Lineup"}),e.jsx("div",{className:"grid grid-cols-4 gap-5 mt-5",children:s.map((a,l)=>e.jsxs("div",{className:"border border-teal-700 rounded-lg shadow-sm overflow-hidden",children:[e.jsx("img",{src:a.image,className:"border-b border-teal-700 w-full h-[250px] object-cover",alt:""}),e.jsx("div",{className:"p-5",children:e.jsx("h1",{className:"text-center text-teal-700 poppins-semibold",children:a.name})})]},l))})]})}function o({event:s}){const a={before:[{url:route("home"),name:"Beranda"}],active:s.name};return e.jsxs(t,{title:"Detail Event",children:[e.jsx(i,{breadCrumbData:a}),e.jsx("div",{className:"mt-8 grid grid-cols-12 gap-8 min-h-[80vh]",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"col-span-8 h-fit",children:[e.jsx(c,{path:s.banner}),e.jsx(d,{description:s.description}),e.jsx("div",{className:"mt-5",children:e.jsx(n,{talents:s.talents})})]}),e.jsxs("div",{className:"col-span-4 h-fit sticky top-[110px] bg-white border border-teal-700 shadow-md rounded-md",children:[e.jsx("h1",{className:"poppins-semibold text-teal-700 text-xl p-5 pb-0",children:s.name}),e.jsxs("div",{className:"flex flex-col gap-4 poppins-medium p-5 pb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"fa-regular fa-calendar flex justify-center w-[30px]"}),e.jsx("span",{className:"text-[14px]",children:s.date})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"fa-regular fa-clock flex justify-center w-[30px]"}),e.jsxs("span",{className:"text-[14px]",children:[s.time," WIB"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("i",{className:"fa-regular fa-location-dot flex justify-center w-[50px]"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("span",{className:"text-[14px] leading-[17px]",children:[s.building_name," | ",s.address]}),e.jsx("a",{target:"_blank",href:s.maps_link,className:"text-sm text-teal-700",children:"Buka di Google Maps"})]})]})]}),e.jsxs("div",{className:"mt-3 flex flex-col gap-4 border-t border-teal-700 p-5",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-[14px] text-gray-700",children:"Dibuat Oleh"}),e.jsx("span",{className:"uppercase poppins-medium",children:s.created_by})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-[14px] text-gray-700",children:"Mulai Dari"}),e.jsx("span",{className:"uppercase poppins-medium",children:s.price})]}),e.jsx("div",{className:"mt-1 flex justify-center",children:e.jsx(r,{href:route("event.tickets",s.slug),className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800",children:"Beli Sekarang"})})]})]})]})})]})}export{o as default};