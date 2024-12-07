import{j as e,a as h,r as u,q as j,W as y}from"./react-CvdimOb_.js";import{B as g}from"./BreadCrumb-BM_g8UbZ.js";import{i as b}from"./initDataTable-C2EvKyFD.js";import{A as N}from"./AdminLayout-D2prnyar.js";import{N as k}from"./notification-xTIW59Dt.js";import{s as x}from"./showConfirmation-BXKusGuB.js";import{S as m}from"./vendor-WcNsT5NC.js";import"./lodash-C5IC_buG.js";function w(){return e.jsx("thead",{className:"text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-5",children:"No"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Kode Voucher"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Unit"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Nominal"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Minimal Pembelian"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Maksimal Pemakaian"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Status"}),e.jsx("th",{scope:"col",className:"px-6 py-5",children:"Aksi"})]})})}function c({route:t,title:r,onClick:i}){return e.jsx(h,{onClick:i,href:t,className:"block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:r})}function v({vouchers:t,handleDelete:r,handleActiveVoucher:i,handleDeactiveVoucher:n}){return e.jsx("tbody",{children:t.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("td",{className:"px-6 py-5",children:s+1}),e.jsx("td",{className:"px-6 py-5",children:a.code}),e.jsx("td",{className:"px-6 py-5 capitalize",children:a.unit}),e.jsx("td",{className:"px-6 py-5",children:a.nominal}),e.jsx("td",{className:"px-6 py-5",children:a.minimal_transaction}),e.jsx("td",{className:"px-6 py-5",children:a.maximal_used}),e.jsx("td",{className:"px-6 py-5",children:a.active?e.jsx("span",{className:"bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",children:"Aktif"}):e.jsx("span",{className:"bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",children:"Nonaktif"})}),e.jsxs("td",{className:"px-6 py-5",children:[e.jsx("button",{id:`dropdownDefaultButton-${s}`,className:"w-[30px] py-2 px-3 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md","data-dropdown-toggle":`dropdown-${s}`,children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical"})}),e.jsx("div",{id:`dropdown-${s}`,className:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700",children:e.jsxs("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":`dropdownDefaultButton-${s}`,children:[e.jsx("li",{children:e.jsx(c,{route:route("admin.voucher.edit",a.id),title:"Edit"})}),e.jsx("li",{children:e.jsx(c,{route:"#",title:"Hapus",onClick:d=>r(d,a.id)})}),e.jsx("li",{children:a.active?e.jsx(c,{onClick:d=>n(d,a.id),route:"#",title:"Nonaktifkan"}):e.jsx(c,{onClick:d=>i(d,a.id),route:"#",title:"Aktifkan"})})]})})]})]},s))})}function V({vouchers:t,handleDeleteVoucher:r,handleActiveVoucher:i,handleDeactiveVoucher:n}){return u.useEffect(()=>{b()},[]),e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",id:"dataTable",children:[e.jsx(w,{}),e.jsx(v,{handleActiveVoucher:i,handleDeactiveVoucher:n,vouchers:t,handleDelete:r})]})})}function D(){return e.jsxs("div",{className:"bg-teal-700 rounded-t-md py-4 px-5 flex items-center justify-between",children:[e.jsx("h1",{className:"text-lg poppins-medium text-white",children:"Data Voucher"}),e.jsxs(h,{href:route("admin.voucher.create"),className:"bg-white text-teal-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 text-center",children:[e.jsx("i",{className:"fa-solid fa-plus mr-1.5"}),"Tambah Voucher"]})]})}const p=()=>{m.fire({title:"Loading",allowOutsideClick:!1,didOpen:()=>{m.showLoading()}})};function $({title:t,vouchers:r}){const i={active:t},{notification:n}=j().props;u.useEffect(()=>{n&&k(n)},[n]);const a=y(),s=(o,l)=>{o.preventDefault(),x({title:"Hapus Voucher",text:"Apakah anda yakin menghapus voucher ini ?",onConfirm:()=>{a.delete(route("admin.voucher.delete",l),{onStart:()=>{p()}})}})},d=(o,l)=>{o.preventDefault(),x({title:"Hapus Voucher",text:"Apakah anda yakin menonaktifkan voucher ini ?",onConfirm:()=>{a.put(route("admin.voucher.deactivate",l),{onStart:()=>{p()}})}})},f=(o,l)=>{o.preventDefault(),x({title:"Hapus Voucher",text:"Apakah anda yakin mengaktifkan voucher ini ?",onConfirm:()=>{a.put(route("admin.voucher.activate",l),{onStart:()=>{p()}})}})};return e.jsxs(N,{title:t,children:[e.jsx(g,{breadCrumbData:i}),e.jsxs("div",{className:"mt-5 bg-white shadow-md rounded-md overflow-hiddens",children:[e.jsx(D,{}),e.jsx(V,{vouchers:r,handleDeleteVoucher:s,handleActiveVoucher:f,handleDeactiveVoucher:d})]})]})}export{$ as default};
