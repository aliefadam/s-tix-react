<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
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
   Jalankan perintah berikut untuk menginstal semua dependensi yang dibutuhkan pada bagian frontend dan backend:
   
   ```bash
   npm install
   composer install
   ```
2. **Setup Laravel**  
   Salin File Konfigurasi
   
   ```bash
   cp .env.example .env

   ```

   Generate Application Key
   
   ```bash
   php artisan key:generate

   ```

   Migrasi dan Seed Database
   
   ```bash
   php artisan migrate --seed

   ```

3. **Menjalankan Aplikasi dalam Mode Pengembangan**
   Untuk menjalankan aplikasi dalam mode pengembangan, gunakan perintah:
   
   ```bash
   npm run dev
   ```

5. **Build untuk Produksi**
   Jika Anda ingin membangun aplikasi untuk produksi, gunakan perintah:

   ```bash
   npm run build
   ```




