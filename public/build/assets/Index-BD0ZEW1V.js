import{j as e,r as d}from"./app-B-Fo7oby.js";import{B as n}from"./BreadCrumb-DvfZQZGI.js";import{T as x}from"./TransactionDetailModal-0cEHvW3W.js";import{i as p}from"./initDataTable-DsLwkIso.js";import{S as m}from"./ShowPaymentStatus-CRDeLpRF.js";import{A as h}from"./AdminLayout-DgsqSjus.js";import"./TransactionDetailModalBody-QLN8UKGe.js";function u(){return e.jsx("thead",{className:"text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-5",children:"No"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Event"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Nama Pembeli"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Tiket Dibeli"}),e.jsx("th",{scope:"col",className:"px-6 py-5 w-[150px]",children:"Total"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Status"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Belanja Pada"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Aksi"})]})})}function j({transactions:l,setDataModal:t}){return e.jsx("tbody",{children:l.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("td",{className:"px-6 py-5",children:s+1}),e.jsx("td",{className:"px-6 py-5",children:a.event.name}),e.jsx("td",{className:"px-6 py-5",children:a.buyer.name}),e.jsxs("td",{className:"px-6 py-5",children:[a.ticket_count," Tiket"]}),e.jsx("td",{className:"px-6 py-5 leading-normal",children:a.total}),e.jsx("td",{className:"px-6 py-5 leading-normal",children:e.jsx(m,{status:a.status})}),e.jsx("td",{className:"px-6 py-5 leading-normal",children:a.created_at}),e.jsxs("td",{className:"px-6 py-5",children:[e.jsx("button",{id:`dropdownDefaultButton-${s}`,className:"w-[30px] py-2 px-3 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md","data-dropdown-toggle":`dropdown-${s}`,children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical"})}),e.jsx("div",{id:`dropdown-${s}`,className:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700",children:e.jsx("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":`dropdownDefaultButton-${s}`,children:e.jsx("li",{children:e.jsx("button",{onClick:()=>t(a.id),type:"button",className:"block w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white","data-modal-target":"detail-transaksi-modal","data-modal-toggle":"detail-transaksi-modal",children:"Lihat Detail"})})})})]})]},s))})}function y({transactions:l,setDataModal:t}){return d.useEffect(()=>{p()},[]),e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",id:"dataTable",children:[e.jsx(u,{}),e.jsx(j,{transactions:l,setDataModal:t})]})})}function b(){return e.jsx("div",{className:"bg-teal-700 rounded-t-md py-4 px-5 flex items-center justify-between",children:e.jsx("h1",{className:"text-lg poppins-medium text-white",children:"Data Transaksi"})})}function D({title:l,transactions:t}){const a={active:l},[s,r]=d.useState(t[0]),i=o=>{r(t.find(c=>c.id==o))};return e.jsxs(h,{title:l,children:[e.jsx(n,{breadCrumbData:a}),e.jsxs("div",{className:"mt-5 bg-white shadow-md rounded-md overflow-hiddens",children:[e.jsx(b,{}),e.jsx(y,{transactions:t,setDataModal:i})]}),e.jsx(x,{transaction:s})]})}export{D as default};
