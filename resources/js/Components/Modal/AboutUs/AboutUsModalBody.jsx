import React from "react";

function AboutUsModalBody() {
    return (
        <div className="p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar">
            <p className="text-base leading-relaxed text-gray-500">
                Selamat datang di S-TIX, platform terbaik untuk solusi penjualan
                tiket dan manajemen acara yang terintegrasi! Di S-TIX, kami
                menyediakan layanan Ticket Management System (TMS) yang
                dirancang untuk mempermudah proses penjualan tiket konser.
                platform kami hadir untuk memberikan pengalaman yang mudah dan
                efisien bagi semua pengguna.
            </p>
            <div className="flex flex-col">
                <p className="text-lg leading-relaxed text-gray-700 poppins-medium">
                    Visi S-TIX
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                    Menghubungkan penyelenggara acara dengan peserta melalui
                    layanan penjualan tiket yang cepat, aman, dan terpercaya.
                </p>
            </div>
            <div className="flex flex-col">
                <p className="text-lg leading-relaxed text-gray-700 poppins-medium">
                    Misi S-TIX
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                    Menjadi pelopor dalam teknologi manajemen acara yang
                    memudahkan semua orang dalam menikmati dan mengelola acara
                    mereka.
                </p>
            </div>
            <div className="flex flex-col">
                <p className="text-lg leading-relaxed text-gray-700 poppins-medium">
                    Apa yang kami tawarkan?
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li className="text-base leading-relaxed text-gray-500">
                        Kemudahan Penggunaan: Antarmuka yang sederhana untuk
                        pembelian tiket dalam hitungan detik.
                    </li>
                    <li className="text-base leading-relaxed text-gray-500">
                        Keamanan dan Keandalan: Sistem yang andal untuk
                        memastikan transaksi yang aman dan lancar.
                    </li>
                    <li className="text-base leading-relaxed text-gray-500">
                        Fleksibilitas: Fitur khusus bagi penyelenggara acara
                        untuk mengelola penjualan tiket, memantau kehadiran, dan
                        meningkatkan efisiensi operasional acara.
                    </li>
                    <li className="text-base leading-relaxed text-gray-500">
                        Dukungan Profesional: Tim kami siap membantu Anda dengan
                        layanan pelanggan yang responsif dan solusi inovatif.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUsModalBody;
