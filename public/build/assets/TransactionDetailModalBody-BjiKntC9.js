import{j as e,r as i,f as r}from"./app-CTfkJgiO.js";function g({closeModal:s=null,setLoading:t=null,setTransactionID:a=null}){return e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"lg:text-lg text-sm font-semibold text-gray-900 dark:text-white",children:"Detail Transaksi"}),e.jsxs("button",{type:"button",onClick:()=>{a(null),t(!0),s()},className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"detail-transaksi-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function d({transaction:s}){return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs",children:"Status"}),e.jsx("span",{className:"lg:text-sm text-xs text-gray-600",children:s.status})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs",children:"No Invoice"}),e.jsx("span",{className:"lg:text-sm text-xs text-gray-600",children:s.invoice})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs",children:"Tanggal Pembelian"}),e.jsxs("span",{className:"lg:text-sm text-xs text-gray-600 text-right",children:[s.created_at," - ",s.created_at_time," WIB"]})]})]})}function c({transaction:s,tickets:t,event:a}){return e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"poppins-semibold lg:text-base text-sm",children:"Detail Event"}),e.jsx("div",{className:"mt-4 flex flex-col gap-4",children:e.jsxs("div",{className:"border shadow-sm rounded-lg p-3",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-[3]",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("img",{src:a.banner,className:"border w-[200px] h-[100px] object-cover rounded-md"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"poppins-medium lg:text-base text-sm block !leading-[20px]",children:a.name}),e.jsx("span",{className:"lg:text-sm text-gray-600 text-xs mt-1",children:e.jsx("ul",{className:"flex flex-col gap-1 mt-1",children:t.map((l,x)=>e.jsxs("li",{children:[e.jsx("span",{children:l.ticket_name})," x ",e.jsx("span",{children:l.ticket_count})," : ",e.jsx("span",{children:l.ticket_price})]},x))})})]})]})}),e.jsxs("div",{className:"flex-[1] flex flex-col items-end",children:[e.jsx("span",{className:"lg:text-sm text-xs text-right",children:"Total Harga"}),e.jsx("span",{className:"poppins-semibold leading-none lg:text-base text-sm lg:inline block lg:mt-0 mt-1",children:s.total_ticket_price})]})]}),e.jsx("div",{className:"mt-3 flex justify-end",children:e.jsx("a",{target:"_blank",href:s.event.url,className:"px-3 py-2 text-xs font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:"Lihat Detail Event"})})]})})]})}function m({buyer:s}){return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"poppins-semibold lg:text-base text-sm",children:"Detail Pembeli"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Email"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.email})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Nama"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.name})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Jenis Kelamin"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.gender})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Tanggal Lahir"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.date_of_birth})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Tipe Identitas"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.identity_type})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Nomor Identitas"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.identity_number})]})]})}function o({visitor:s}){return i.useEffect(()=>{r()},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"poppins-semibold lg:text-base text-sm",children:"Detail Pengunjung"}),e.jsx("div",{id:"accordion-collapse","data-accordion":"collapse",children:s.map((t,a)=>e.jsxs("div",{className:"mb-3",children:[e.jsx("h2",{id:`accordion-collapse-heading-${a}`,children:e.jsxs("button",{type:"button",className:"flex items-center justify-between w-full p-4 rounded-md rtl:text-right text-gray-500 border border-b border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":`#accordion-collapse-body-${a}`,"aria-expanded":"false","aria-controls":`accordion-collapse-body-${a}`,children:[e.jsxs("span",{className:"",children:["Data Pengunjung ",a+1]}),e.jsx("svg",{"data-accordion-icon":"",className:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5 5 1 1 5"})})]})}),e.jsx("div",{id:`accordion-collapse-body-${a}`,className:"hidden","aria-labelledby":`accordion-collapse-heading-${a}`,children:e.jsxs("div",{className:"p-5 border border-b space-y-4 border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Jenis Tiket"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.ticket_name})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Email"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.email})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Nama Lengkap"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.name})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Jenis Kelamin"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.gender})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Tanggal Lahir"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.date_of_birth})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Tipe Identitas"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.identity_type})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Nomor Identitas"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.identity_number})]})]})})]},a))})]})}function h({payment:s,transaction:t}){return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"poppins-semibold lg:text-base text-sm",children:"Rincian Pembayaran"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Metode Pembayaran"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.method})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Nomor VA"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:s.data})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Total Harga (1 Tiket)"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.total_ticket_price})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Internet Fee"}),e.jsx("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:t.internet_fee})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"lg:text-sm text-xs flex-[3]",children:"Pajak"}),e.jsxs("span",{className:"lg:text-sm text-xs flex-[2] text-gray-600 text-end",children:[t.tax_percent,"% ",` (${t.tax_amount})`]})]}),e.jsxs("div",{className:"flex justify-between poppins-semibold",children:[e.jsx("span",{className:"lg:text-[15px] text-[14px] flex-[3]",children:"Total Belanja"}),e.jsx("span",{className:"lg:text-[15px] text-[14px] flex-[2] text-gray-600 text-end",children:t.total})]})]})}function f({transaction:s}){const{tickets:t,buyer:a,visitor:l,payment:x,event:n}=s;return e.jsx("div",{id:"detail-transaksi-body",children:e.jsxs("div",{className:"modal-transaction-detail p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar",children:[e.jsx(d,{transaction:s}),e.jsx("hr",{}),e.jsx(c,{transaction:s,event:n,tickets:t}),e.jsx("hr",{}),e.jsx(m,{buyer:a}),e.jsx("hr",{}),e.jsx(o,{visitor:l}),e.jsx("hr",{}),e.jsx(h,{payment:x,transaction:s})]})})}export{g as T,f as a};
