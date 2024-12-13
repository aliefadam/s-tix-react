import{j as e,q as Z,r as ee,i as te,W as h}from"./app-5MWagu1p.js";import{B as ae}from"./BreadCrumb-J-9IZ_BR.js";import{I as b}from"./InputGroup-XDxVmUO0.js";import{B as C}from"./Button-SnZGVh8K.js";import{A as se}from"./AdminLayout-CAPwWwOO.js";import{N as re}from"./notification-hbyfIv5m.js";import{s as w}from"./showConfirmation-Dvs7K4RM.js";import"./sweetalert2.esm.all-D3pEHXw3.js";function de({event:a}){return e.jsxs("div",{className:"h-fit col-span-7 flex flex-col gap-5",children:[e.jsxs("div",{className:"bg-white shadow-md rounded-md",children:[e.jsxs("div",{className:"flex flex-col p-5 border-b",children:[e.jsx("h1",{className:"text-xl poppins-semibold",children:a.name}),e.jsxs("span",{className:"text-sm",children:["by ",a.user.name]})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"",children:e.jsx("img",{className:"rounded-md",src:a.banner})}),e.jsx("div",{className:"mt-3 ckeditor",dangerouslySetInnerHTML:{__html:a.description}})]})]}),e.jsxs("div",{className:"bg-white shadow-md rounded-md",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-5 p-5 border-b",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("h1",{className:"flex items-center",children:[e.jsx("i",{className:"fa-solid fa-circle mr-1.5 text-xs text-green-700"})," ","Mulai"]}),e.jsxs("span",{className:"text-sm",children:[a.date," | ",a.time]})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("h1",{className:"flex items-center",children:[e.jsx("i",{className:"fa-solid fa-circle mr-1.5 text-xs text-red-700"}),"Selesai"]}),e.jsxs("span",{className:"text-sm",children:[a.date_end," | ",a.time_end]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-5 p-5 border-b",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"poppins-medium text-lg",children:"Lokasi"}),e.jsx("div",{className:"mt-5 flex gap-1 items-center",children:e.jsxs("p",{className:"leading-5",children:[e.jsx("span",{className:"poppins-medium",children:a.building_name})," ","| ",a.address]})}),e.jsx("a",{target:"_blank",href:a.maps_link,className:"mt-2 block text-sm text-blue-500 hover:text-blue-600",children:"Buka di Google Maps"})]}),e.jsx("div",{className:"",children:e.jsx("div",{id:"map",className:"border h-[250px]"})})]})]})]})}function le({i:a,talent:t,setTalent:s,handleDeleteTalent:r}){return e.jsx("div",{className:"border rounded-md px-5 py-3 relative overflow-hiddens",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("img",{className:"w-[50px] h-[50px] rounded-full object-cover",src:t.image,alt:""}),e.jsx("span",{className:"text-sm poppins-medium",children:t.name})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{onClick:()=>s(t.id),"data-modal-target":"edit-talent-modal","data-modal-toggle":"edit-talent-modal",className:"btn-edit-talent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white duration-200 bg-white rounded-md p-2",children:e.jsx("i",{className:"fa-regular fa-pen-to-square",onClick:()=>s(t.id)})}),e.jsx("button",{onClick:d=>r(d,t.id),className:"btn-delete-talent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 bg-white rounded-md p-2",children:e.jsx("i",{className:"fa-regular fa-trash",onClick:d=>r(d,t.id)})})]})]})},a)}function ne({talents:a,setTalent:t,handleDeleteTalent:s}){return e.jsxs("div",{className:"p-5 bg-white shadow-md rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-lg poppins-semibold",children:"Talents"}),e.jsx("button",{"data-modal-target":"add-talent-modal","data-modal-toggle":"add-talent-modal",className:"bg-teal-700 shadow-sm text-white size-10 rounded-full focus:ring-4 focus:ring-teal-300 hover:bg-teal-800 duration-200",children:e.jsx("i",{className:"fa-solid fa-plus"})})]}),e.jsx("div",{className:"mt-5 flex flex-col gap-3",children:a.map((r,d)=>e.jsx(le,{i:d,talent:r,setTalent:t,handleDeleteTalent:s},d))})]})}function ie({i:a,ticket:t,setTicket:s,handleDeleteTicket:r}){return e.jsxs("div",{className:"border rounded-md px-5 py-3 relative overflow-hiddens",children:[e.jsx("div",{className:"absolute rounded-s-md top-0 left-0 bottom-0 w-[5px] bg-red-700"}),e.jsxs("div",{className:"absolute -top-[15px] left-0 flex justify-center w-full gap-2",children:[e.jsx("button",{onClick:()=>s(t.id),"data-modal-target":"edit-ticket-modal","data-modal-toggle":"edit-ticket-modal",className:"btn-edit-ticket border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white duration-200 bg-white rounded-md p-2",children:e.jsx("i",{className:"fa-regular fa-pen-to-square",onClick:()=>s(t.id)})}),e.jsx("button",{onClick:d=>r(d,t.id),className:"btn-delete-ticket border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 bg-white rounded-md p-2",children:e.jsx("i",{className:"fa-regular fa-trash",onClick:d=>r(d,t.id)})})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-sm text-gray-600",children:t.name}),e.jsx("span",{className:"text-sm poppins-medium",children:t.format_price})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-sm text-right text-gray-600",children:"Target"}),e.jsxs("span",{className:"text-sm text-right poppins-medium",children:[e.jsx("span",{className:"text-gray-600",children:t.sold}),"/",e.jsx("span",{children:t.target})]})]})]})]},a)}function oe({tickets:a,setTicket:t,handleDeleteTicket:s}){return e.jsxs("div",{className:"p-5 bg-white shadow-md rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-lg poppins-semibold",children:"Kategori Tiket"}),e.jsx("button",{"data-modal-target":"add-ticket-modal","data-modal-toggle":"add-ticket-modal",className:"bg-teal-700 shadow-sm text-white size-10 rounded-full focus:ring-4 focus:ring-teal-300 hover:bg-teal-800 duration-200",children:e.jsx("i",{className:"fa-solid fa-plus"})})]}),e.jsx("div",{className:"mt-5 flex flex-col gap-6",children:a.map((r,d)=>e.jsx(ie,{i:d,ticket:r,setTicket:t,handleDeleteTicket:s},d))})]})}function ce({name:a,id:t}){return e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:a}),e.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":t,children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function me({id:a,error:t,label:s,onChange:r}){const d=()=>t?"border border-red-500 focus:border-red-500 focus:ring-0":"border border-gray-300 focus:ring-teal-500 focus:border-teal-500";return e.jsxs("div",{className:"",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:a,children:s}),e.jsx("input",{className:`block w-full text-sm text-gray-900 bg-gray-50 ${d()} rounded-lg focus:outline-none`,id:a,name:a,type:"file",onChange:r}),t&&e.jsx("p",{className:"mt-2 text-sm text-red-600 dark:text-red-500",children:t})]})}function xe({data:a,setData:t,errors:s,handleFileChange:r}){return e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsx(b,{id:"name",label:"Nama Talent",type:"text",value:a.name,onChange:d=>t("name",d.target.value),error:s.name}),e.jsx(me,{error:s.image,id:"image",label:"Foto Talent | Gunakan Ukuran 1:1",onChange:d=>r(d)})]})}function M({type:a,name:t,props:s}){return e.jsx("button",{type:a,className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5",...s,children:t})}function ue({processing:a,id:t}){return e.jsxs("div",{className:"flex items-center gap-3 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",children:[e.jsx(C,{processing:a,type:"submit",color:"teal",name:t==="add-talent-modal"?"Tambah":"Simpan"}),e.jsx(M,{name:"Batal",type:"button",props:{"data-modal-hide":t,id:`close-${t}`}})]})}function T({id:a,name:t,data:s,setData:r,processing:d,errors:x,handleSubmit:u,handleFileChange:g}){return e.jsx("div",{id:a,tabIndex:-1,"aria-hidden":"true",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:e.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsx(ce,{id:a,name:t}),e.jsxs("form",{onSubmit:u,action:"",encType:"multipart/form-data",children:[e.jsx(xe,{data:s,setData:r,handleFileChange:g,errors:x}),e.jsx(ue,{id:a,processing:d})]})]})})})}function he({id:a,name:t}){return e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:t}),e.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":a,children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function ge({data:a,setData:t,errors:s}){return e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsx(b,{id:"name",label:"Nama Tiket",value:a.name,onChange:r=>t("name",r.target.value),type:"text",error:s.name,placeholder:"Presale 1"}),e.jsx(b,{id:"price",label:"Harga",value:a.price,onChange:r=>t("price",r.target.value),type:"number",error:s.price}),e.jsx("div",{className:"-mb-5",children:e.jsx(b,{id:"target",label:"Target Penjualan",value:a.target,onChange:r=>t("target",r.target.value),type:"number",error:s.target})})]})}function pe({processing:a,id:t}){return e.jsxs("div",{className:"flex items-center gap-3 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",children:[e.jsx(C,{processing:a,type:"submit",color:"teal",name:t==="add-ticket-modal"?"Tambah":"Simpan"}),e.jsx(M,{name:"Batal",type:"button",props:{"data-modal-hide":t,id:`close-${t}`}})]})}function E({id:a,name:t,data:s,setData:r,processing:d,errors:x,handleSubmit:u}){return e.jsx("div",{id:a,tabIndex:-1,"aria-hidden":"true",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:e.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsx(he,{name:t,id:a}),e.jsxs("form",{onSubmit:u,action:"",method:"POST",children:[e.jsx(ge,{data:s,setData:r,errors:x}),e.jsx(pe,{id:a,processing:d})]})]})})})}const fe=a=>{let t,s=[],r;const d=a;async function x(){const n={lat:-6.2,lng:106.816666},o=await u(d)||n,{Map:c}=await google.maps.importLibrary("maps");t=new c(document.getElementById("map"),{center:o,zoom:12});const m=document.getElementById("pac-input"),{SearchBox:p}=await google.maps.importLibrary("places");r=new p(m),t.controls[google.maps.ControlPosition.TOP_LEFT].push(m),t.addListener("bounds_changed",()=>{r.setBounds(t.getBounds())}),o!==n&&j(o)}async function u(n){if(!n)return null;const o=n.match(/place_id:([^&]+)/);if(o){const m=o[1];return g(m)}const c=n.match(/query=(-?\d+\.\d+),(-?\d+\.\d+)/);return c?{lat:parseFloat(c[1]),lng:parseFloat(c[2])}:null}async function g(n){const o=new google.maps.Geocoder;return new Promise(c=>{o.geocode({placeId:n},function(m,p){p==="OK"&&m[0].geometry.location?c({lat:m[0].geometry.location.lat(),lng:m[0].geometry.location.lng()}):c(null)})})}function j(n){v();const o=new google.maps.Marker({position:n,map:t});s.push(o)}function v(){for(let n=0;n<s.length;n++)s[n].setMap(null);s=[]}x()};function Ee({title:a,event:t,tickets:s,talents:r}){const d={before:[{url:route("admin.event.index"),name:"Event"}],active:`Detail Event : ${a}`},{notification:x}=Z().props;ee.useEffect(()=>{x&&(te(),re(x)),fe(t.maps_link)},[x]);const{data:u,setData:g,post:j,processing:v,errors:n,reset:o}=h({name:"",price:"",target:""}),{data:c,setData:m,put:p,processing:B,errors:I,reset:A}=h({id:"",name:"",price:"",target:""}),{data:S,setData:k,post:D,processing:F,errors:L,reset:_}=h({name:"",image:""}),{data:y,setData:N,post:P,processing:G,errors:z,reset:q}=h({id:"",name:"",image:null}),H=l=>{l.preventDefault(),j(route("admin.ticket.store",t.id),{onSuccess:()=>{document.getElementById("close-add-ticket-modal").click(),o()}})},K=l=>{l.preventDefault(),p(route("admin.ticket.update",c.id),{onSuccess:()=>{document.getElementById("close-edit-ticket-modal").click(),A()}})},$=h(),O=(l,i)=>{l.preventDefault(),w({title:"Apakah kamu yakin?",text:"Anda tidak dapat mengembalikan data ini!",onConfirm:()=>{$.delete(route("admin.ticket.delete",i))}})},U=l=>{l.preventDefault(),D(route("admin.talent.store",t.id),{onSuccess:()=>{document.getElementById("close-add-talent-modal").click(),document.getElementById("image").value="",_()}})},W=l=>{l.preventDefault(),P(route("admin.talent.update",y.id),{onSuccess:()=>{document.getElementById("close-edit-talent-modal").click(),document.getElementById("image").value="",q()}})},R=h(),J=(l,i)=>{l.preventDefault(),w({title:"Apakah kamu yakin?",text:"Anda tidak dapat mengembalikan data ini!",onConfirm:()=>{R.delete(route("admin.talent.delete",i))}})},Q=l=>{const i=s.find(f=>f.id===l);m({id:i.id,name:i.name,price:i.price,target:i.target})},V=l=>{const i=r.find(f=>f.id===l);N(f=>({...f,id:i.id,name:i.name,image:null,_method:"PUT"}))},X=l=>{const i=l.target.files[0];k("image",i)},Y=l=>{const i=l.target.files[0];N("image",i)};return e.jsxs(se,{title:a,children:[e.jsx(ae,{breadCrumbData:d}),e.jsxs("div",{className:"mt-5 grid grid-cols-12 gap-5",children:[e.jsx(de,{event:t}),e.jsxs("div",{className:"h-fit col-span-5 flex flex-col gap-5",children:[e.jsx(oe,{tickets:s,setTicket:Q,handleDeleteTicket:O}),e.jsx(ne,{talents:r,setTalent:V,handleDeleteTalent:J})]})]}),e.jsx(E,{id:"add-ticket-modal",name:"Tambah Kategori Tiket",data:u,setData:g,processing:v,handleSubmit:H,errors:n}),e.jsx(E,{id:"edit-ticket-modal",name:"Edit Kategori Tiket",data:c,setData:m,processing:B,handleSubmit:K,errors:I}),e.jsx(T,{id:"add-talent-modal",name:"Tambah Talent",data:S,setData:k,processing:F,handleSubmit:U,errors:L,handleFileChange:X}),e.jsx(T,{id:"edit-talent-modal",name:"Edit Talent",data:y,setData:N,processing:G,handleSubmit:W,errors:z,handleFileChange:Y})]})}export{Ee as default};
