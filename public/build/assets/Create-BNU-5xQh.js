import{q as c,r as p,W as x,j as a}from"./app-BM0kLxkC.js";import{B as h}from"./BreadCrumb-C_NPKQlO.js";import{B as f}from"./Button-DIieWSsr.js";import{I as o}from"./InputGroup-B8Ep_Alq.js";import{S as b}from"./SelectUnit-D5eULcj-.js";import{A as j}from"./AdminLayout-YMfr2sP5.js";import{N as v}from"./notification-hbyfIv5m.js";import"./sweetalert2.esm.all-D3pEHXw3.js";function S({title:m}){const s={before:[{url:route("admin.voucher.index"),name:"Voucher"}],active:m},{notification:i}=c().props;p.useEffect(()=>{i&&v(i)},[i]);const{data:t,setData:r,post:l,processing:u,errors:n}=x({code:"",unit:"",nominal:"",minimal_transaction:"",maximal_used:""}),d=e=>{e.preventDefault(),l(route("admin.voucher.store"))};return a.jsxs(j,{title:m,children:[a.jsx(h,{breadCrumbData:s}),a.jsx("div",{className:"mt-5 bg-white rounded-md shadow-md p-5 w-1/2",children:a.jsxs("form",{action:"",onSubmit:d,children:[a.jsx(o,{id:"code",label:"Kode Voucher",type:"text",value:t.code,onChange:e=>r("code",e.target.value),error:n.code,placeholder:"Gunakan huruf kapital"}),a.jsx(b,{data:t,setData:r,errors:n}),a.jsx(o,{id:"nominal",label:"Nominal",moreLabel:a.jsx("span",{className:"text-sm text-gray-500",children:"(Masukkan sesuai unit)"}),type:"number",value:t.nominal,onChange:e=>r("nominal",e.target.value),error:n.nominal}),a.jsx(o,{id:"minimal_transaction",label:"Minimal Pembelian (Rp)",type:"number",value:t.minimal_transaction,onChange:e=>r("minimal_transaction",e.target.value),error:n.minimal_transaction}),a.jsx(o,{id:"maximal_used",label:"Maksimal Pemakaian Voucher",type:"number",value:t.maximal_used,onChange:e=>r("maximal_used",e.target.value),placeholder:"Masukkan 0 jika tidak ada batasan",error:n.maximal_used}),a.jsx("div",{className:"flex justify-end",children:a.jsx(f,{color:"teal",name:"Tambah",processing:u,type:"submit"})})]})})]})}export{S as default};