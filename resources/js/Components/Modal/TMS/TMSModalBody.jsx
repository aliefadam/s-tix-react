import React from "react";

function TMSModalBody() {
    return (
        <div className="p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                TMS (Ticket Management System) adalah platform revolusioner yang
                dirancang khusus untuk memudahkan para vendor dalam menjual
                tiket konser, seminar, festival, dan berbagai jenis acara
                lainnya. Dengan teknologi mutakhir dan user interface yang
                intuitif, TMS siap membantu Anda menjangkau lebih banyak
                pelanggan dan meningkatkan pendapatan secara signifikan.
            </p>
            <h1 className="text-lg poppins-medium text-gray-600">
                Keunggulan TMS yang Tidak Bisa Anda Lewatkan
            </h1>
            <ul className="list-disc pl-5 text-gray-500">
                <li className="mb-2">
                    <span className="block text-gray-700 mb-1">
                        Jangkauan Luas
                    </span>{" "}
                    <span className="leading-normal">
                        Dengan TMS, tiket acara Anda dapat dijangkau oleh ribuan
                        pembeli potensial, memungkinkan Anda memaksimalkan
                        kapasitas penjualan.
                    </span>
                </li>
                <li className="mb-2">
                    <span className="block text-gray-700 mb-1">
                        Sistem yang Cepat dan Aman
                    </span>{" "}
                    <span className="leading-normal">
                        Nikmati transaksi yang lancar dengan sistem pembayaran
                        terpercaya dan perlindungan data tingkat tinggi.
                    </span>
                </li>
                <li className="mb-2">
                    <span className="block text-gray-700 mb-1">
                        Dashboard Pengelolaan Praktis
                    </span>{" "}
                    <span className="leading-normal">
                        Pantau penjualan tiket, atur harga, dan kelola inventori
                        dengan mudah melalui dashboard yang dirancang khusus
                        untuk vendor.
                    </span>
                </li>
                <li className="mb-2">
                    <span className="block text-gray-700 mb-1">
                        Layanan Pelanggan Profesional
                    </span>{" "}
                    <span className="leading-normal">
                        Tim kami siap membantu Anda kapan saja, memastikan semua
                        kebutuhan Anda terpenuhi tanpa hambatan.
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default TMSModalBody;
