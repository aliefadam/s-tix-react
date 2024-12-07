import{W as u,j as e,a as m}from"./react-CvdimOb_.js";import{B as b}from"./BreadCrumb-BM_g8UbZ.js";import{I as o}from"./InputGroup-DyF1ydnE.js";import{g as c}from"./getDatePart-HgEJ48wy.js";import{U as x}from"./UserLayout-B0GKI0ri.js";import"./vendor-WcNsT5NC.js";import"./lodash-C5IC_buG.js";function h(){const{data:a,setData:t,put:s,processing:d,errors:n,reset:l}=u({old_password:"",password:"",password_confirmation:""}),i=r=>{r.preventDefault(),s(route("profile.change-password"),{onSuccess:()=>l()})};return e.jsxs("div",{className:"hidden p-4 rounded-lg",id:"styled-change-password",role:"tabpanel",children:[e.jsx("h1",{className:"text-center text-2xl poppins-semibold text-teal-700",children:"Ganti Kata Sandi"}),e.jsxs("form",{onSubmit:i,action:"",className:"w-1/2 mt-8 ms-auto me-auto",children:[e.jsx(o,{id:"kata_sandi_lama",label:"Kata Sandi Lama",type:"password",value:a.old_password,onChange:r=>t("old_password",r.target.value)}),e.jsx(o,{id:"kata_sandi_baru",label:"Kata Sandi Baru",type:"password",value:a.password,onChange:r=>t("password",r.target.value)}),e.jsx(o,{id:"konfirmasi_kata_sandi_baru",label:"Konfirmasi Kata Sandi Baru",type:"password",value:a.password_confirmation,onChange:r=>t("password_confirmation",r.target.value)}),e.jsx("div",{className:"flex justify-center items-center mt-8 col-span-2",children:e.jsx("button",{disabled:d,type:"submit",className:`text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm w-1/2 px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ${d?"opacity-50 cursor-not-allowed":""}`,children:"Ganti Kata Sandi"})})]})]})}function p({date:a,month:t,year:s,onChange:d}){return e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"date",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Tanggal Lahir"}),e.jsxs("div",{className:"grid grid-cols-3 gap-5",children:[e.jsxs("select",{id:"date",name:"date",value:a,onChange:d,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500",children:[e.jsx("option",{value:"",children:"Tanggal"}),Array.from({length:31},(n,l)=>e.jsx("option",{value:String(l+1).padStart(2,"0"),children:String(l+1).padStart(2,"0")},l))]}),e.jsxs("select",{id:"month",name:"month",value:t,onChange:d,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500",children:[e.jsx("option",{value:"",children:"Bulan"}),Array.from({length:12},(n,l)=>e.jsx("option",{value:String(l+1).padStart(2,"0"),children:String(l+1).padStart(2,"0")},l))]}),e.jsxs("select",{id:"year",name:"year",value:s,onChange:d,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500",children:[e.jsx("option",{value:"",children:"Tahun"}),Array.from({length:100},(n,l)=>e.jsx("option",{value:String(2024-l),children:2024-l},l))]})]})]})}function g({id:a,label:t,type:s,value:d,onChange:n,prefix:l}){return e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:a,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:e.jsx("span",{className:`text-gray-700 text-sm poppins-semibold ${l=="+62"?"":"translate-y-[1.8px] translate-x-[0.3px]"}`,children:l})}),e.jsx("input",{type:s,id:a,name:a,value:d,onChange:n,className:`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 ${l=="+62"?"pl-12":"pl-8"} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500`})]})]})}function y({identity_type:a,identity_number:t,onChange:s}){return e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"identity-type",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Nomor Identitas"}),e.jsxs("div",{className:"flex",children:[e.jsxs("select",{id:"identity-type",name:"identity_type",value:a,onChange:s,className:"poppins-medium bg-gray-100 rounded-s-lg border border-gray-300 text-gray-900 text-sm focus:ring-teal-500 focus:border-teal-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500",children:[e.jsx("option",{value:"",children:"Pilih Identitas"}),e.jsx("option",{value:"KTP",children:"KTP"}),e.jsx("option",{value:"SIM",children:"SIM"}),e.jsx("option",{value:"PASSPORT",children:"Passport"})]}),e.jsx("input",{type:"number",id:"identity-number",name:"identity_number",value:t,onChange:s,className:"bg-gray-50 rounded-e-lg border border-gray-300 text-gray-900 text-sm focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"})]})]})}function f({gender:a,onChange:t}){return e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"gender",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Jenis Kelamin"}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{className:"flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700",children:[e.jsx("input",{id:"laki-laki",type:"radio",value:"Laki-laki",name:"gender",checked:a==="Laki-laki",onChange:t,className:"w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:"laki-laki",className:"w-full py-[10.5px] ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Laki-laki"})]}),e.jsxs("div",{className:"flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700",children:[e.jsx("input",{id:"perempuan",type:"radio",value:"Perempuan",name:"gender",checked:a==="Perempuan",onChange:t,className:"w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:"perempuan",className:"w-full py-[10.5px] ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Perempuan"})]})]})]})}function k({id:a,label:t,value:s,onChange:d,options:n}){return e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:a,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),e.jsxs("select",{id:a,name:a,value:s,onChange:d,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500",children:[e.jsxs("option",{children:["Pilih ",t]}),n.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]})]})}function j({processing:a}){return e.jsx("div",{className:"flex justify-center items-center col-span-2",children:e.jsx("button",{type:"submit",disabled:a,className:`text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm w-1/3 px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ${a?"opacity-50 cursor-not-allowed":""}`,children:"Simpan"})})}function v({profile:a}){const{data:t,setData:s,put:d,processing:n,errors:l}=u({name:a.name,email:a.email,date:c(a.date_of_birth,"day"),month:c(a.date_of_birth,"month"),year:c(a.date_of_birth,"year"),whatsapp:a.whatsapp,gender:a.gender,identity_type:a.identity_type,identity_number:a.identity_number,works:a.works,height:a.height,weight:a.weight,religion:a.religion,instagram:a.instagram,tiktok:a.tiktok}),i=r=>{r.preventDefault(),d(route("profile.update"))};return e.jsxs("div",{className:"hidden p-4 rounded-lg",id:"styled-profile",role:"tabpanel","aria-labelledby":"profile-tab",children:[e.jsx("h1",{className:"text-center text-2xl poppins-semibold text-teal-700",children:"Edit Profil"}),e.jsxs("form",{onSubmit:i,action:"",method:"POST",className:"grid grid-cols-2 w-[80%] mx-auto gap-8 mt-8",children:[e.jsxs("div",{className:"",children:[e.jsx(o,{type:"text",id:"name",label:"Nama Lengkap",value:t.name,onChange:r=>s("name",r.target.value)}),e.jsx(o,{type:"email",id:"email",disabled:!0,label:"Email",value:t.email,onChange:r=>s("email",r.target.value)}),e.jsx(p,{date:t.date,month:t.month,year:t.year,onChange:r=>s(r.target.name,r.target.value)}),e.jsx(g,{id:"whatsapp",label:"Nomor Whatsapp",type:"number",value:t.whatsapp,prefix:"+62",onChange:r=>s("whatsapp",r.target.value)}),e.jsx(y,{identity_number:t.identity_number,identity_type:t.identity_type,onChange:r=>s(r.target.name,r.target.value)}),e.jsx(f,{gender:t.gender,onChange:r=>s("gender",r.target.value)})]}),e.jsxs("div",{className:"",children:[e.jsx(o,{type:"text",id:"works",label:"Pekerjaan",value:t.works,onChange:r=>s("works",r.target.value)}),e.jsx(o,{type:"number",id:"height",label:"Tinggi Badan (cm)",value:t.height,onChange:r=>s("height",r.target.value)}),e.jsx(o,{type:"number",id:"weight",label:"Berat Badan (kg)",value:t.weight,onChange:r=>s("weight",r.target.value)}),e.jsx(k,{id:"religion",label:"Agama",value:t.religion,onChange:r=>s("religion",r.target.value),options:[{label:"Islam",value:"Islam"},{label:"Kristen",value:"Kristen"},{label:"Hindu",value:"Hindu"},{label:"Budha",value:"Budha"},{label:"Konghucu",value:"Konghucu"}]}),e.jsx(g,{id:"instagram",label:"Instagram",prefix:e.jsx("i",{className:"fa-solid fa-at"}),value:t.instagram,onChange:r=>s("instagram",r.target.value)}),e.jsx(g,{id:"tiktok",label:"TikTok",prefix:e.jsx("i",{className:"fa-solid fa-at"}),value:t.tiktok,onChange:r=>s("tiktok",r.target.value)})]}),e.jsx(j,{processing:n})]})]})}function w(){return e.jsx("div",{className:"mb-4 mt-5 border-b border-gray-200 dark:border-gray-700",children:e.jsxs("ul",{className:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-styled-tab","data-tabs-toggle":"#default-styled-tab-content","data-tabs-active-classes":"text-teal-600 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-500 border-teal-600 dark:border-teal-500","data-tabs-inactive-classes":"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",role:"tablist",children:[e.jsx("li",{className:"me-2",role:"presentation",children:e.jsxs("button",{className:"flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg",id:"profile-styled-tab","data-tabs-target":"#styled-profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false",children:[e.jsx("i",{className:"fa-regular fa-user"}),"Edit Profil"]})}),e.jsx("li",{className:"me-2",role:"presentation",children:e.jsxs("button",{className:"flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"change-password-styled-tab","data-tabs-target":"#styled-change-password",type:"button",role:"tab","aria-controls":"chane-password","aria-selected":"false",children:[e.jsx("i",{className:"fa-regular fa-lock"}),"Ganti Kata Sandi"]})})]})})}function T({title:a,profile:t}){const s={before:[{url:route("home"),name:"Beranda"}],active:a};return e.jsxs(x,{title:a,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(b,{breadCrumbData:s}),e.jsxs(m,{href:route("logout"),className:"border bg-red-700 text-white hover:bg-red-800 duration-200 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 flex items-center gap-2",children:[e.jsx("i",{className:"fa-regular fa-power-off"}),"Keluar"]})]}),e.jsx(w,{}),e.jsxs("div",{id:"default-styled-tab-content",children:[e.jsx(v,{profile:t}),e.jsx(h,{})]})]})}export{T as default};
