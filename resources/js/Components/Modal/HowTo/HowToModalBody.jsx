import React from "react";

function HowToModalBody() {
    return (
        <div className="p-4 md:p-5 space-y-4">
            <ol className="list-decimal pl-5">
                <li class="text-base leading-relaxed text-gray-500">
                    Silahkan login terlebih dahulu.
                </li>
                <li class="text-base leading-relaxed text-gray-500">
                    Pada beranda, pilih salah satu event yang ingin dibeli
                    tiketnya.
                </li>
                <li class="text-base leading-relaxed text-gray-500">
                    Pada halaman detail event, klik tombol{" "}
                    <span className="poppins-semibold">"Beli Sekarang"</span>.
                </li>
                <li class="text-base leading-relaxed text-gray-500">
                    Pilih kategori tiket dan tentukan jumlahnya, lalu klik{" "}
                    <span className="poppins-semibold">"Checkout"</span>.
                </li>
                <li class="text-base leading-relaxed text-gray-500">
                    Lengkapi data diri Anda dan klik{" "}
                    <span className="poppins-semibold">"Checkout"</span>{" "}
                    kembali.
                </li>
                <li class="text-base leading-relaxed text-gray-500">
                    Pilih metode pembayaran yang ingin digunakan, kemudian klik{" "}
                    <span className="poppins-semibold">"Checkout"</span>.
                </li>
                <li class="text-base leading-relaxed text-gray-500">
                    Pembelian tiket berhasil! Mudah, bukan?
                </li>
            </ol>
        </div>
    );
}

export default HowToModalBody;
