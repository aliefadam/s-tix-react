import React from "react";

function TermConditionModalBody() {
    return (
        <div className="p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar">
            <p className="text-base leading-relaxed text-gray-500">
                Selamat datang di S-TIX! Sebelum menggunakan layanan kami, mohon
                untuk membaca Syarat dan Ketentuan berikut ini dengan seksama.
                Dengan membeli atau menggunakan layanan kami, Anda dianggap
                telah menyetujui seluruh Syarat dan Ketentuan di bawah ini.
            </p>
            <ol className="list-decimal pl-5 text-gray-500">
                <li>Umum</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Layanan ini disediakan oleh S-TIX untuk pembelian tiket
                        konser musik.
                    </li>
                    <li className="leading-normal">
                        Semua informasi yang Anda berikan harus akurat dan
                        benar. Penyedia tidak bertanggung jawab atas kesalahan
                        data yang diberikan oleh pengguna.
                    </li>
                    <li className="leading-normal">
                        Kami berhak untuk mengubah atau memperbarui Syarat dan
                        Ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.
                    </li>
                </ul>
                <li>Pemesanan Tiket</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Semua pemesanan tiket bersifat final dan tidak dapat
                        dibatalkan atau diuangkan kembali.
                    </li>
                    <li className="leading-normal">
                        Tiket hanya berlaku untuk satu kali masuk pada acara
                        yang telah ditentukan.
                    </li>
                    <li className="leading-normal">
                        Pemesanan tiket harus dilakukan melalui platform resmi
                        kami. Kami tidak bertanggung jawab atas tiket yang
                        dibeli dari pihak ketiga.
                    </li>
                </ul>
                <li>Pembayaran</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Pembayaran dapat dilakukan melalui metode yang telah
                        kami sediakan.
                    </li>
                    <li className="leading-normal">
                        Semua transaksi pembayaran akan diproses dalam mata uang
                        yang ditentukan di platform kami.
                    </li>
                    <li className="leading-normal">
                        Kami tidak bertanggung jawab atas biaya tambahan seperti
                        biaya transfer bank atau konversi mata uang.
                    </li>
                </ul>
                <li>Ketentuan Masuk Acara</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Tiket harus ditunjukkan dalam bentuk digital atau fisik
                        saat masuk ke lokasi acara.
                    </li>
                    <li className="leading-normal">
                        Penyelenggara berhak melarang masuk jika tiket tidak
                        valid atau telah digunakan sebelumnya.
                    </li>
                    <li className="leading-normal">
                        Dilarang membawa barang-barang terlarang, termasuk
                        senjata tajam, minuman keras, atau obat-obatan
                        terlarang.
                    </li>
                </ul>
                <li>Pembatalan atau Penundaan Acara</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Jika konser dibatalkan atau ditunda, kami akan
                        memberikan informasi lebih lanjut mengenai kebijakan
                        pengembalian dana atau penggantian tiket.
                    </li>
                    <li className="leading-normal">
                        Penyelenggara tidak bertanggung jawab atas kerugian yang
                        timbul akibat pembatalan atau penundaan konser.
                    </li>
                </ul>
                <li>Tanggung Jawab Pengguna</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Anda bertanggung jawab untuk menjaga keamanan tiket
                        Anda. Kehilangan tiket menjadi tanggung jawab pemegang
                        tiket.
                    </li>
                    <li className="leading-normal">
                        Pastikan Anda mematuhi semua aturan yang berlaku di
                        lokasi acara.
                    </li>
                </ul>
                <li>Privasi dan Keamanan</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Informasi pribadi Anda akan kami simpan dan gunakan
                        sesuai dengan kebijakan privasi kami.
                    </li>
                    <li className="leading-normal">
                        Kami berkomitmen untuk menjaga keamanan data pengguna
                        sesuai dengan standar yang berlaku.
                    </li>
                </ul>
                <li>Pembatasan Tanggung Jawab</li>
                <ul className="list-disc pl-5 mt-2 mb-3">
                    <li className="leading-normal">
                        Kami tidak bertanggung jawab atas kerusakan, kerugian,
                        atau gangguan yang disebabkan oleh pihak ketiga selama
                        acara berlangsung.
                    </li>
                    <li className="leading-normal">
                        Semua risiko yang timbul akibat kehadiran di acara
                        konser menjadi tanggung jawab masing-masing individu.
                    </li>
                </ul>
            </ol>
            <p className="text-base leading-relaxed text-gray-500">
                Jika Anda memiliki pertanyaan lebih lanjut mengenai Syarat dan
                Ketentuan ini, silakan hubungi kami melalui admin@stix.com.
                Terima kasih telah menggunakan layanan S-TIX!
            </p>
        </div>
    );
}

export default TermConditionModalBody;
