import{j as e,a as l,W as x}from"./app-CTfkJgiO.js";import{F as n,B as o,A as u,L as f}from"./AuthLayout-07qVlPY1.js";import"./notification-D8nuFN0y.js";function h({data:t,setData:r,name:s,id:a,title:i}){return e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:a,type:"checkbox",name:s,defaultValue:"",className:"w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:a,className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:i})]})}function g({handleLogin:t,data:r,setData:s,processing:a}){return e.jsxs("div",{className:"bg-white h-[80vh] flex flex-col justify-center items-center",children:[e.jsx("h1",{className:"text-3xl poppins-bold text-teal-700",children:"LOGIN"}),e.jsxs("form",{onSubmit:t,action:"",method:"POST",className:"w-[80%] mt-8",children:[e.jsx(n,{data:r,setData:s,name:"email",id:"email",type:"email",placeholder:"email@example.com",title:"Email",icon:"fa-solid fa-user"}),e.jsx(n,{data:r,setData:s,name:"password",id:"password",type:"password",placeholder:"*********",title:"Kata Sandi",icon:"fa-solid fa-lock"}),e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx(h,{id:"remember",name:"remember",title:"Ingat Saya"}),e.jsx("div",{className:"",children:e.jsx(l,{href:route("forgot-password"),className:"text-sm font-medium hover:text-teal-700 hover:underline",children:"Lupa Kata Sandi?"})})]}),e.jsx("div",{className:"mb-5 mt-6 flex justify-center",children:e.jsx(o,{name:"Login",processing:a,type:"button"})}),e.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[e.jsx("hr",{className:"flex-[1]"}),e.jsx("span",{className:"text-xs",children:"Atau login dengan"}),e.jsx("hr",{className:"flex-[1]"})]}),e.jsx("div",{className:"mb-5 flex justify-center",children:e.jsx(o,{type:"link",href:"login.google",name:"Google",srcImage:"/imgs/google.png"})}),e.jsxs("div",{className:"flex justify-center gap-1 text-sm",children:[e.jsx("span",{children:"Belum punya akun?"}),e.jsx(l,{href:route("register"),className:"text-teal-700 hover:underline poppins-medium",children:"Daftar"})]})]})]})}function b({title:t}){const{data:r,setData:s,post:a,processing:i,errors:p,reset:m}=x({email:"",password:""}),d=c=>{c.preventDefault(),a(route("login"),{onFinish:()=>m("password")})};return e.jsx(u,{title:t,children:e.jsxs("main",{className:"shadow-md w-[70%] grid grid-cols-2 rounded-md overflow-hidden",children:[e.jsx(f,{}),e.jsx(g,{handleLogin:d,data:r,setData:s,processing:i})]})})}export{b as default};
