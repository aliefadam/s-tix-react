import{j as a,a as m,W as g,y as x,q as p,r as h,d as j,Y as u}from"./app-D0RIW6RC.js";function o({title:e,links:n}){return a.jsxs("div",{className:"",children:[a.jsx("span",{className:"poppins-bold",children:e}),a.jsx("div",{className:"mt-4 flex flex-col gap-4 text-[13px]",children:n.map((t,r)=>t.type=="link"?a.jsx(m,{className:"hover:translate-x-1 hover:text-teal-700 duration-200",href:route(t.url),children:t.name},r):a.jsx("button",{"data-modal-target":t.modalId,"data-modal-toggle":t.modalId,className:"block text-left hover:translate-x-1 hover:text-teal-700 duration-200",children:t.name},r))})]})}function f(){const e=[{name:"Instagram",url:"#",icon:"fa-brands fa-instagram",color:"bg-gradient-to-r from-pink-500 to-pink-700 text-white"},{name:"YouTube",url:"#",icon:"fa-brands fa-youtube",color:"bg-red-700 text-white"},{name:"Twitter",url:"#",icon:"fa-brands fa-x-twitter",color:"bg-black text-white"},{name:"TikTok",url:"#",icon:"fa-brands fa-tiktok",color:"bg-gray-800 text-white"}];return a.jsx("div",{className:"mt-4 flex items-center flex-wrap gap-4",children:e.map(({name:n,url:t,icon:r,color:l})=>a.jsx("a",{href:t,className:`flex justify-center items-center size-[50px] rounded-lg text-lg ${l} hover:scale-105 duration-200`,children:a.jsx("i",{className:r})},n))})}function y(){return a.jsx("div",{className:"md:p-10 p-5 bg-teal-700 bg-opacity-5",children:a.jsxs("div",{className:"grid md:grid-cols-4 grid-cols-2 gap-5",children:[a.jsx(o,{title:"S-TIX",links:[{name:"Tentang Kami",url:"home",type:"button",modalId:"about-us-modal"},{name:"Syarat dan Ketentuan",url:"home",type:"button",modalId:"term-condition-modal"}]}),a.jsx(o,{title:"Layanan Kami",links:[{name:"Ticketing Management System",url:"home",type:"button",modalId:"tms-modal"}]}),a.jsx(o,{title:"Lainnya",links:[{name:"Cara Membeli Tiket",url:"home",type:"button",modalId:"how-to-buy-modal"}]}),a.jsxs("div",{className:"poppins-bold",children:[a.jsx("span",{children:"Ikuti Kami"}),a.jsx(f,{})]})]})})}function N(){return a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Syarat dan Ketentuan"}),a.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"term-condition-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function w(){return a.jsxs("div",{className:"p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar",children:[a.jsx("p",{className:"text-base leading-relaxed text-gray-500",children:"Selamat datang di S-TIX! Sebelum menggunakan layanan kami, mohon untuk membaca Syarat dan Ketentuan berikut ini dengan seksama. Dengan membeli atau menggunakan layanan kami, Anda dianggap telah menyetujui seluruh Syarat dan Ketentuan di bawah ini."}),a.jsxs("ol",{className:"list-decimal pl-5 text-gray-500",children:[a.jsx("li",{children:"Umum"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Layanan ini disediakan oleh S-TIX untuk pembelian tiket konser musik."}),a.jsx("li",{className:"leading-normal",children:"Semua informasi yang Anda berikan harus akurat dan benar. Penyedia tidak bertanggung jawab atas kesalahan data yang diberikan oleh pengguna."}),a.jsx("li",{className:"leading-normal",children:"Kami berhak untuk mengubah atau memperbarui Syarat dan Ketentuan ini kapan saja tanpa pemberitahuan sebelumnya."})]}),a.jsx("li",{children:"Pemesanan Tiket"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Semua pemesanan tiket bersifat final dan tidak dapat dibatalkan atau diuangkan kembali."}),a.jsx("li",{className:"leading-normal",children:"Tiket hanya berlaku untuk satu kali masuk pada acara yang telah ditentukan."}),a.jsx("li",{className:"leading-normal",children:"Pemesanan tiket harus dilakukan melalui platform resmi kami. Kami tidak bertanggung jawab atas tiket yang dibeli dari pihak ketiga."})]}),a.jsx("li",{children:"Pembayaran"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Pembayaran dapat dilakukan melalui metode yang telah kami sediakan."}),a.jsx("li",{className:"leading-normal",children:"Semua transaksi pembayaran akan diproses dalam mata uang yang ditentukan di platform kami."}),a.jsx("li",{className:"leading-normal",children:"Kami tidak bertanggung jawab atas biaya tambahan seperti biaya transfer bank atau konversi mata uang."})]}),a.jsx("li",{children:"Ketentuan Masuk Acara"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Tiket harus ditunjukkan dalam bentuk digital atau fisik saat masuk ke lokasi acara."}),a.jsx("li",{className:"leading-normal",children:"Penyelenggara berhak melarang masuk jika tiket tidak valid atau telah digunakan sebelumnya."}),a.jsx("li",{className:"leading-normal",children:"Dilarang membawa barang-barang terlarang, termasuk senjata tajam, minuman keras, atau obat-obatan terlarang."})]}),a.jsx("li",{children:"Pembatalan atau Penundaan Acara"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Jika konser dibatalkan atau ditunda, kami akan memberikan informasi lebih lanjut mengenai kebijakan pengembalian dana atau penggantian tiket."}),a.jsx("li",{className:"leading-normal",children:"Penyelenggara tidak bertanggung jawab atas kerugian yang timbul akibat pembatalan atau penundaan konser."})]}),a.jsx("li",{children:"Tanggung Jawab Pengguna"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Anda bertanggung jawab untuk menjaga keamanan tiket Anda. Kehilangan tiket menjadi tanggung jawab pemegang tiket."}),a.jsx("li",{className:"leading-normal",children:"Pastikan Anda mematuhi semua aturan yang berlaku di lokasi acara."})]}),a.jsx("li",{children:"Privasi dan Keamanan"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Informasi pribadi Anda akan kami simpan dan gunakan sesuai dengan kebijakan privasi kami."}),a.jsx("li",{className:"leading-normal",children:"Kami berkomitmen untuk menjaga keamanan data pengguna sesuai dengan standar yang berlaku."})]}),a.jsx("li",{children:"Pembatasan Tanggung Jawab"}),a.jsxs("ul",{className:"list-disc pl-5 mt-2 mb-3",children:[a.jsx("li",{className:"leading-normal",children:"Kami tidak bertanggung jawab atas kerusakan, kerugian, atau gangguan yang disebabkan oleh pihak ketiga selama acara berlangsung."}),a.jsx("li",{className:"leading-normal",children:"Semua risiko yang timbul akibat kehadiran di acara konser menjadi tanggung jawab masing-masing individu."})]})]}),a.jsx("p",{className:"text-base leading-relaxed text-gray-500",children:"Jika Anda memiliki pertanyaan lebih lanjut mengenai Syarat dan Ketentuan ini, silakan hubungi kami melalui admin@stix.com. Terima kasih telah menggunakan layanan S-TIX!"})]})}function v(){return a.jsx("div",{className:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",children:a.jsx("button",{"data-modal-hide":"term-condition-modal",type:"button",className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:"Baik, Mengerti"})})}function T(){return a.jsx("div",{id:"term-condition-modal",tabIndex:-1,"aria-hidden":"true",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:a.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsx(N,{}),a.jsx(w,{}),a.jsx(v,{})]})})})}function S(){return a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Tentang Kami"}),a.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"about-us-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function M(){return a.jsxs("div",{className:"p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar",children:[a.jsx("p",{className:"text-base leading-relaxed text-gray-500",children:"Selamat datang di S-TIX, platform terbaik untuk solusi penjualan tiket dan manajemen acara yang terintegrasi! Di S-TIX, kami menyediakan layanan Ticket Management System (TMS) yang dirancang untuk mempermudah proses penjualan tiket konser. platform kami hadir untuk memberikan pengalaman yang mudah dan efisien bagi semua pengguna."}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("p",{className:"text-lg leading-relaxed text-gray-700 poppins-medium",children:"Visi S-TIX"}),a.jsx("p",{className:"text-base leading-relaxed text-gray-500",children:"Menghubungkan penyelenggara acara dengan peserta melalui layanan penjualan tiket yang cepat, aman, dan terpercaya."})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("p",{className:"text-lg leading-relaxed text-gray-700 poppins-medium",children:"Misi S-TIX"}),a.jsx("p",{className:"text-base leading-relaxed text-gray-500",children:"Menjadi pelopor dalam teknologi manajemen acara yang memudahkan semua orang dalam menikmati dan mengelola acara mereka."})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("p",{className:"text-lg leading-relaxed text-gray-700 poppins-medium",children:"Apa yang kami tawarkan?"}),a.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[a.jsx("li",{className:"text-base leading-relaxed text-gray-500",children:"Kemudahan Penggunaan: Antarmuka yang sederhana untuk pembelian tiket dalam hitungan detik."}),a.jsx("li",{className:"text-base leading-relaxed text-gray-500",children:"Keamanan dan Keandalan: Sistem yang andal untuk memastikan transaksi yang aman dan lancar."}),a.jsx("li",{className:"text-base leading-relaxed text-gray-500",children:"Fleksibilitas: Fitur khusus bagi penyelenggara acara untuk mengelola penjualan tiket, memantau kehadiran, dan meningkatkan efisiensi operasional acara."}),a.jsx("li",{className:"text-base leading-relaxed text-gray-500",children:"Dukungan Profesional: Tim kami siap membantu Anda dengan layanan pelanggan yang responsif dan solusi inovatif."})]})]})]})}function P(){return a.jsx("div",{id:"about-us-modal",tabIndex:-1,"aria-hidden":"true",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:a.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsx(S,{}),a.jsx(M,{})]})})})}function A(){return a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Cara Membeli Tiket"}),a.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"how-to-buy-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function C(){return a.jsx("div",{className:"p-4 md:p-5 space-y-4",children:a.jsxs("ol",{className:"list-decimal pl-5",children:[a.jsx("li",{class:"text-base leading-relaxed text-gray-500",children:"Silahkan login terlebih dahulu."}),a.jsx("li",{class:"text-base leading-relaxed text-gray-500",children:"Pada beranda, pilih salah satu event yang ingin dibeli tiketnya."}),a.jsxs("li",{class:"text-base leading-relaxed text-gray-500",children:["Pada halaman detail event, klik tombol"," ",a.jsx("span",{className:"poppins-semibold",children:'"Beli Sekarang"'}),"."]}),a.jsxs("li",{class:"text-base leading-relaxed text-gray-500",children:["Pilih kategori tiket dan tentukan jumlahnya, lalu klik"," ",a.jsx("span",{className:"poppins-semibold",children:'"Checkout"'}),"."]}),a.jsxs("li",{class:"text-base leading-relaxed text-gray-500",children:["Lengkapi data diri Anda dan klik"," ",a.jsx("span",{className:"poppins-semibold",children:'"Checkout"'})," ","kembali."]}),a.jsxs("li",{class:"text-base leading-relaxed text-gray-500",children:["Pilih metode pembayaran yang ingin digunakan, kemudian klik"," ",a.jsx("span",{className:"poppins-semibold",children:'"Checkout"'}),"."]}),a.jsx("li",{class:"text-base leading-relaxed text-gray-500",children:"Pembelian tiket berhasil! Mudah, bukan?"})]})})}function I(){return a.jsx("div",{className:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",children:a.jsx("button",{"data-modal-hide":"how-to-buy-modal",type:"button",className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:"Baik, mengerti"})})}function K(){return a.jsx("div",{id:"how-to-buy-modal",tabIndex:-1,"aria-hidden":"true",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:a.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsx(A,{}),a.jsx(C,{}),a.jsx(I,{})]})})})}function L(){return a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Ticketing Management System"}),a.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"tms-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]})}function B(){return a.jsxs("div",{className:"p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar",children:[a.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"TMS (Ticket Management System) adalah platform revolusioner yang dirancang khusus untuk memudahkan para vendor dalam menjual tiket konser, seminar, festival, dan berbagai jenis acara lainnya. Dengan teknologi mutakhir dan user interface yang intuitif, TMS siap membantu Anda menjangkau lebih banyak pelanggan dan meningkatkan pendapatan secara signifikan."}),a.jsx("h1",{className:"text-lg poppins-medium text-gray-600",children:"Keunggulan TMS yang Tidak Bisa Anda Lewatkan"}),a.jsxs("ul",{className:"list-disc pl-5 text-gray-500",children:[a.jsxs("li",{className:"mb-2",children:[a.jsx("span",{className:"block text-gray-700 mb-1",children:"Jangkauan Luas"})," ",a.jsx("span",{className:"leading-normal",children:"Dengan TMS, tiket acara Anda dapat dijangkau oleh ribuan pembeli potensial, memungkinkan Anda memaksimalkan kapasitas penjualan."})]}),a.jsxs("li",{className:"mb-2",children:[a.jsx("span",{className:"block text-gray-700 mb-1",children:"Sistem yang Cepat dan Aman"})," ",a.jsx("span",{className:"leading-normal",children:"Nikmati transaksi yang lancar dengan sistem pembayaran terpercaya dan perlindungan data tingkat tinggi."})]}),a.jsxs("li",{className:"mb-2",children:[a.jsx("span",{className:"block text-gray-700 mb-1",children:"Dashboard Pengelolaan Praktis"})," ",a.jsx("span",{className:"leading-normal",children:"Pantau penjualan tiket, atur harga, dan kelola inventori dengan mudah melalui dashboard yang dirancang khusus untuk vendor."})]}),a.jsxs("li",{className:"mb-2",children:[a.jsx("span",{className:"block text-gray-700 mb-1",children:"Layanan Pelanggan Profesional"})," ",a.jsx("span",{className:"leading-normal",children:"Tim kami siap membantu Anda kapan saja, memastikan semua kebutuhan Anda terpenuhi tanpa hambatan."})]})]})]})}function F(){return a.jsx("div",{className:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",children:a.jsxs("a",{target:"_blank",href:"https://api.whatsapp.com/send/?phone=62895364711840&text&type=phone_number&app_absent=0",className:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:[a.jsx("i",{className:"fa-brands fa-whatsapp mr-2"}),"Mulai obrolan di Whatsapp"]})})}function D(){return a.jsx("div",{id:"tms-modal",tabIndex:-1,"aria-hidden":"true",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:a.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsx(L,{}),a.jsx(B,{}),a.jsx(F,{})]})})})}function X(){return a.jsxs("footer",{className:"mt-5 border-t",children:[a.jsx(y,{}),a.jsx("div",{className:"flex justify-center items-center bg-gradient-to-r from-teal-500 to-teal-700 py-4 text-white",children:a.jsx("span",{className:"text-sm poppins-medium",children:"S-Tix © 2024. All rights reserved"})}),a.jsx(T,{}),a.jsx(P,{}),a.jsx(K,{}),a.jsx(D,{})]})}function z(){return a.jsxs(m,{href:"/",className:"text-2xl poppins-black text-teal-700 flex items-center gap-2",children:[a.jsx("img",{src:"/imgs/logo.png",alt:"",className:"w-9 rounded-md p-1 bg-teal-700"}),"S-TIX"]})}function H(){const{data:e,setData:n,get:t,processing:r,errors:l,reset:b}=g({keyword:""}),c=i=>{i.preventDefault(),x.visit(route("event.search",{keyword:e.keyword}),{method:"get",replace:!0})};return a.jsx("form",{onSubmit:c,children:a.jsx("div",{className:"md:flex hidden w-[500px]",children:a.jsxs("div",{className:"relative w-full",children:[a.jsx("input",{onChange:i=>n("keyword",i.target.value),type:"search",id:"search",className:"block py-2.5 px-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500",placeholder:"Cari berdasarkan artis, acara atau nama tempat...",required:!0}),a.jsx("button",{type:"submit",className:"absolute top-0 right-0 py-2.5 px-3 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:a.jsx("i",{className:"fa-regular fa-magnifying-glass"})})]})})})}function s({href:e,name:n,icon:t}){return a.jsxs(m,{href:route(e),className:`border ${route().current(e)||route().current(`${e}.*`)?"bg-teal-700 text-white hover:bg-teal-800":" border-teal-700 text-teal-700 hover:bg-teal-700 hover:bg-opacity-10"} duration-200 focus:ring-4 focus:ring-teal-300 w-full md:w-auto text-center font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 flex items-center gap-2`,children:[t&&a.jsx("i",{className:t}),n]})}function U({isShowSideBar:e,setIsShowSideBar:n}){const{auth:t}=p().props,{data:r,setData:l,get:b,processing:c,errors:i,reset:J}=g({keyword:""}),k=d=>{d.preventDefault(),x.visit(route("event.search",{keyword:r.keyword}),{method:"get",replace:!0})};return a.jsxs("div",{className:`flex md:flex-row flex-col bg-gray-100 md:bg-white absolute md:static top-0 ${e?"right-0":"-right-[100%]"} w-[250px] md:w-auto p-5 md:p-0 h-screen md:h-auto items-center gap-3 duration-200`,children:[a.jsx("form",{onSubmit:k,children:a.jsx("div",{className:"md:hidden flex w-full mb-5",children:a.jsxs("div",{className:"relative w-full",children:[a.jsx("input",{onChange:d=>l("keyword",d.target.value),type:"search",id:"search",className:"block py-2.5 px-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500",placeholder:"Cari berdasarkan artis, acara atau nama tempat...",required:!0}),a.jsx("button",{type:"submit",className:"absolute top-0 right-0 py-2.5 px-3 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",children:a.jsx("i",{className:"fa-regular fa-magnifying-glass"})})]})})}),a.jsx(s,{href:"home",icon:"fa-regular fa-home",name:"Beranda"}),t?a.jsxs(a.Fragment,{children:[a.jsx(s,{href:"transaction",icon:"fa-regular fa-money-from-bracket",name:"Transaksi"}),a.jsx(s,{href:"ticket",icon:"fa-regular fa-ticket",name:"Tiket"}),a.jsx(s,{href:"profile",icon:"fa-regular fa-user",name:"Profil Saya"})]}):a.jsxs(a.Fragment,{children:[a.jsx(s,{href:"login",name:"Masuk"}),a.jsx(s,{href:"register",name:"Daftar"})]}),a.jsx("button",{onClick:()=>n(!e),className:"md:hidden border border-teal-700 px-3.5 py-3 rounded-full hover:bg-teal-700 hover:bg-opacity-20 duration-200 focus:ring-4 focus:ring-teal-300 mt-5",type:"button",children:a.jsx("i",{className:"fa-solid fa-xmark text-teal-700"})})]})}function W(){const[e,n]=h.useState(!1);return a.jsxs("nav",{className:"fixed top-0 z-10 w-full bg-white h-[80px] md:px-10 px-5 flex justify-between items-center shadow-md",children:[a.jsxs("div",{className:"flex gap-5 items-center",children:[a.jsx(z,{}),a.jsx(H,{})]}),a.jsx("button",{onClick:()=>n(!e),className:"md:hidden border border-teal-700 px-3 py-1.5 rounded-md hover:bg-teal-700 hover:bg-opacity-20 duration-200 focus:ring-4 focus:ring-teal-300",type:"button",children:a.jsx("i",{className:"fa-solid fa-bars text-xl text-teal-700"})}),a.jsx(U,{isShowSideBar:e,setIsShowSideBar:n})]})}function $({title:e,children:n}){return h.useEffect(()=>{j()},[]),a.jsxs(a.Fragment,{children:[a.jsx(u,{title:e}),a.jsx(W,{}),a.jsxs("main",{className:"md:p-10 p-5 md:mt-[75px] mt-[80px] min-h-screen",children:[a.jsx(u,{title:e}),n]}),a.jsx(X,{})]})}export{$ as U};
