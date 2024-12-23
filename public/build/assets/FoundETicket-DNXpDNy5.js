import{j as e,a as x}from"./app-BM0kLxkC.js";function r({isFound:n,transaction:s,handleSubmit:i,isChecked:a,disableButton:d}){return e.jsx(e.Fragment,{children:n&&e.jsxs("div",{className:"w-1/2 bg-white rounded-md shadow-md p-5",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-[14px] text-gray-500",children:"Event"}),e.jsx("span",{children:s.event.name})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-[14px] text-gray-500",children:"Total Belanja"}),e.jsx("span",{children:s.total})]})]}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-[14px] text-gray-500",children:"Tanggal Transaksi"}),e.jsx("span",{children:s.created_at})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-[14px] text-gray-500",children:"Total Tiket"}),e.jsx("span",{children:s.tickets.length})]})]})]}),e.jsxs("div",{className:"mt-8 flex flex-col gap-1",children:[e.jsx("h1",{className:"text-lg poppins-medium border-b pb-3",children:"Detail Pembeli"}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Nama"}),e.jsx("span",{children:s.buyer.name})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:s.buyer.email})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Jenis Kelamin"}),e.jsx("span",{children:s.buyer.gender})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Tipe Identitas"}),e.jsx("span",{children:s.buyer.identity_type})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Nomor Identitas"}),e.jsx("span",{children:s.buyer.identity_number})]})]}),s.visitor.map((l,t)=>e.jsxs("div",{className:"mt-8 flex flex-col gap-1",children:[e.jsxs("h1",{className:"text-lg poppins-medium border-b pb-3",children:["Detail Pengunjung ",t+1]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Jenis Tiket"}),e.jsx("span",{children:l.ticket_name})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Nama"}),e.jsx("span",{children:l.name})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:l.email})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Jenis Kelamin"}),e.jsx("span",{children:l.gender})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Tipe Identitas"}),e.jsx("span",{children:l.identity_type})]}),e.jsxs("div",{className:"mt-3 text-sm flex justify-between",children:[e.jsx("span",{children:"Nomor Identitas"}),e.jsx("span",{children:l.identity_number})]})]},t)),e.jsxs("div",{className:"mt-8",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{defaultChecked:"",id:"checked-checkbox",type:"checkbox",defaultValue:"",onChange:l=>d(l),className:"w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 "}),e.jsx("label",{htmlFor:"checked-checkbox",className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Tiket telah diberikan pada setiap pengunjung"})]}),e.jsxs("div",{className:"mt-5 flex gap-3",children:[e.jsx("button",{onClick:i,type:"button",disabled:!a,className:`text-white ${a?"bg-teal-700 hover:bg-teal-800 cursor-pointer focus:ring-4 focus:ring-teal-300":"bg-gray-400 cursor-default"} font-medium rounded-lg text-sm px-5 py-2.5`,children:"Aktivasi E-Ticket"}),e.jsx(x,{href:route("admin.scanTicket.index"),className:"bg-white text-teal-700 hover:bg-teal-800 hover:bg-opacity-20 border border-teal-700 duration-200 cursor-pointer focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5",children:"Lakukan Scan Ulang"})]})]})]})})}export{r as default};
