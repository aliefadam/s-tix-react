<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
  </a>
  <a href="https://react.dev" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" alt="React Logo">
  </a>
</p>

## Tentang S-TIX

S-TIX adalah platform penjualan tiket online yang memungkinkan pengguna untuk membeli tiket berbagai acara secara daring. Melalui situs webnya, S-TIX menyediakan layanan pembelian tiket yang mudah dan cepat.
Dengan menggunakan S-TIX, Anda dapat mencari dan membeli tiket untuk acara yang Anda minati tanpa harus datang langsung ke lokasi penjualan. Platform ini dirancang untuk memudahkan proses pembelian tiket secara online, memberikan kemudahan bagi pengguna dalam mengakses berbagai acara. Misi utama kami adalah menjembatani kesenjangan antara penyelenggara acara dan peserta dengan menawarkan:

- Kemudahan Penggunaan: Antarmuka yang ramah pengguna untuk pembelian tiket hanya dalam beberapa klik.
- Keandalan: Sistem yang tangguh untuk memastikan transaksi yang aman dan lancar.
- Fleksibilitas: Fitur yang disesuaikan untuk penyelenggara acara guna mengelola penjualan tiket, memantau kehadiran, dan mengoptimalkan operasional acara.


## Tech Stack  

Proyek ini menggunakan **React** pada bagian frontend dan **Laravel** pada bagian backend. Berikut penjelasannya:  

1. **React (Frontend)**  
   React digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan responsif. Dengan arsitektur berbasis komponen, React memungkinkan pengembangan front-end yang modular, mudah dikelola, dan dapat diintegrasikan dengan teknologi lainnya.  
   - **Keunggulan**: Responsif, skalabel, dan mudah digunakan.  
   - **Tujuan**: Menyediakan pengalaman pengguna yang lancar dalam mengakses dan mengelola fitur-fitur aplikasi.  

2. **Laravel (Backend)**  
   Laravel adalah framework PHP yang digunakan untuk menangani logika server-side, API, dan pengelolaan database. Dengan fitur bawaan seperti ORM (Eloquent), sistem routing, dan autentikasi, Laravel memberikan fondasi yang kokoh untuk pengembangan backend.  
   - **Keunggulan**: Aman, efisien, dan mendukung pengembangan yang cepat.  
   - **Tujuan**: Menyediakan sistem yang andal untuk menangani permintaan dari frontend, mengelola data, dan memastikan integritas aplikasi.  

Tech stack ini dirancang untuk bekerja secara sinergis, memastikan aplikasi memiliki kinerja optimal dan pengalaman pengguna yang maksimal

## Cara Penggunaan  

Ikuti langkah-langkah berikut untuk menjalankan proyek ini:  

1. **Install Dependencies**
   <p>Jalankan perintah berikut untuk menginstal semua dependensi yang dibutuhkan pada bagian frontend dan backend:</p>
   
   ```bash
   npm install
   composer install
   ```
3. **Setup Laravel**  
   <p>Salin File Konfigurasi</p>
   
   ```bash
   cp .env.example .env

   ```

   <p>Generate Application Key</p>
   
   ```bash
   php artisan key:generate

   ```

   <p>Migrasi dan Seed Database</p>
   
   ```bash
   php artisan migrate --seed

   ```

4. **Menjalankan Aplikasi dalam Mode Pengembangan**
   <p>Untuk menjalankan aplikasi dalam mode pengembangan, gunakan perintah:</p>
   
   ```bash
   npm run dev
   php artisan serve
   ```

6. **Build untuk Produksi**
   <p>Jika Anda ingin membangun aplikasi untuk produksi, gunakan perintah:</p>

   ```bash
   npm run build
   ```

## Daftar Library yang Digunakan  

Proyek ini menggunakan beberapa library untuk mendukung pengembangan dan memberikan pengalaman pengguna yang optimal. Berikut adalah daftar library yang digunakan beserta deskripsinya:  

1. [**Animate.css**](https://animate.style/)  
   Library CSS untuk animasi sederhana yang mudah digunakan. Digunakan untuk memberikan efek animasi pada elemen-elemen UI.  

2. [**CKEditor**](https://ckeditor.com/docs/)  
   Rich text editor yang kuat untuk pengelolaan konten. Digunakan untuk menambahkan dan mengedit teks dengan fitur lengkap seperti format, gambar, dan lainnya.  

3. [**DataTables**](https://datatables.net/)  
   Plugin jQuery untuk menampilkan data dalam tabel interaktif. Mendukung fitur pencarian, pengurutan, dan pagination secara otomatis.  

4. [**SweetAlert2**](https://sweetalert2.github.io/#download)  
   Library JavaScript untuk membuat popup yang indah dan interaktif. Digunakan untuk notifikasi, konfirmasi, dan dialog interaktif lainnya.  

5. [**Tailwind CSS**](https://tailwindcss.com/)  
   Framework CSS berbasis utility-first untuk membuat desain yang modern dan responsif dengan cepat.  

6. [**Flowbite**](https://flowbite.com/)  
   Komponen UI tambahan berbasis Tailwind CSS. Digunakan untuk mempercepat pengembangan komponen antarmuka seperti tombol, form, dan navigasi.  

7. [**Inertia.js**](https://inertiajs.com/)  
   Library untuk membangun aplikasi single-page tanpa memerlukan API tradisional. Menghubungkan backend Laravel dengan frontend React secara mulus.




