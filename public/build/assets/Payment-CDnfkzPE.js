import{q as d,r as x,j as e,Y as u,W as p}from"./app-C9WTulpB.js";import{N as f}from"./notification-D8nuFN0y.js";function b({title:r,children:o}){const{notification:t}=d().props;return x.useEffect(()=>{if(t){const{title:a,text:i,icon:s}=t;f({title:a,text:i,icon:s})}},[t]),e.jsxs("div",{className:"w-full h-screen flex justify-center items-center relative",children:[e.jsx(u,{title:r}),o]})}function v({title:r}){const{data:o,setData:t,post:a,processing:i,errors:s,reset:n}=p({invoice:""}),c=()=>s.invoice?"border border-red-500 focus:border-red-500 focus:ring-0":"border border-gray-300 focus:ring-teal-500 focus:border-teal-500",m=l=>{l.preventDefault(),a(route("simulate-payment.post"),{onSuccess:()=>n()})};return e.jsxs(b,{title:r,children:[e.jsxs("div",{className:"w-1/3",children:[e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("h1",{className:"text-teal-700 poppins-black text-4xl",children:"S-TIX"}),e.jsx("p",{className:"text-teal-700 poppins-semibold text-lg",children:"SIMULASI PEMBAYARAN"})]}),e.jsxs("form",{onSubmit:m,action:"",className:"w-full border-2 border-teal-700 p-10 rounded-md mt-8",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"invoice",className:"block text-center mb-3 text-sm font-medium text-gray-900 dark:text-white",children:"Masukkan Nomor Invoice"}),e.jsx("input",{type:"text",id:"invoice",name:"invoice",autoComplete:"off",value:o.invoice,onChange:l=>t("invoice",l.target.value),className:`${c()} text-gray-900 text-sm rounded-lg block w-full p-2.5`}),s.invoice&&e.jsx("p",{className:"mt-2 text-sm text-center text-red-600 dark:text-red-500",children:s.invoice})]}),e.jsx("button",{type:"submit",className:`text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 ${i?"opacity-50 cursor-not-allowed":""}`,children:"Bayar"})]})]}),e.jsx("img",{src:"/imgs/logo.png",alt:"",className:"absolute top-10 w-10 rounded-md p-1 bg-teal-700"}),e.jsx("span",{className:"absolute bottom-10",children:e.jsx("p",{className:"text-sm poppins-medium text-teal-700",children:"S-TIX © 2024. All rights reserved"})})]})}export{v as default};
