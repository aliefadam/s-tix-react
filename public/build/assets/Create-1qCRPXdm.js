import{q as c,r as p,W as x,j as a}from"./app-Cd7ZNo18.js";import{B as h}from"./BreadCrumb-DzjuUnDI.js";import{B as f}from"./Button-Bc9YXOKR.js";import{I as o}from"./InputGroup-uUO-fA8w.js";import{S as b}from"./SelectUnit-bj0zTXqI.js";import{A as j}from"./AdminLayout-DZRnm63N.js";import{N as v}from"./notification-D8nuFN0y.js";function M({title:m}){const s={before:[{url:route("admin.voucher.index"),name:"Voucher"}],active:m},{notification:i}=c().props;p.useEffect(()=>{i&&v(i)},[i]);const{data:t,setData:n,post:l,processing:u,errors:r}=x({code:"",unit:"",nominal:"",minimal_transaction:"",maximal_used:""}),d=e=>{e.preventDefault(),l(route("admin.voucher.store"))};return a.jsxs(j,{title:m,children:[a.jsx(h,{breadCrumbData:s}),a.jsx("div",{className:"mt-5 bg-white rounded-md shadow-md p-5 w-1/2",children:a.jsxs("form",{action:"",onSubmit:d,children:[a.jsx(o,{id:"code",label:"Kode Voucher",type:"text",value:t.code,onChange:e=>n("code",e.target.value),error:r.code,placeholder:"Gunakan huruf kapital"}),a.jsx(b,{data:t,setData:n,errors:r}),a.jsx(o,{id:"nominal",label:"Nominal",moreLabel:a.jsx("span",{className:"text-sm text-gray-500",children:"(Masukkan sesuai unit)"}),type:"number",value:t.nominal,onChange:e=>n("nominal",e.target.value),error:r.nominal}),a.jsx(o,{id:"minimal_transaction",label:"Minimal Pembelian (Rp)",type:"number",value:t.minimal_transaction,onChange:e=>n("minimal_transaction",e.target.value),error:r.minimal_transaction}),a.jsx(o,{id:"maximal_used",label:"Maksimal Pemakaian Voucher",type:"number",value:t.maximal_used,onChange:e=>n("maximal_used",e.target.value),placeholder:"Masukkan 0 jika tidak ada batasan",error:r.maximal_used}),a.jsx("div",{className:"flex justify-end",children:a.jsx(f,{color:"teal",name:"Tambah",processing:u,type:"submit"})})]})})]})}export{M as default};