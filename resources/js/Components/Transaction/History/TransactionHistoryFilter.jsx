import React from "react";

function TransactionHistoryFilter({ handleFilterStatus, handleFilterKeyword }) {
    return (
        <div
            className="bg-white rounded-lg shadow-lg border p-5 mb-5"
            id="filter-container"
        >
            <div className="flex gap-3">
                <div className="relative lg:flex-[2] flex-[1.5]">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <i className="fa-regular fa-magnifying-glass" />
                    </div>
                    <input
                        onChange={handleFilterKeyword}
                        type="text"
                        id="keyword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm text-xs rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full ps-10 p-2.5 "
                        placeholder="Cari transaksimu ..."
                    />
                </div>
                <select
                    id="categories"
                    onChange={handleFilterStatus}
                    className=" flex-[1] bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm text-xs rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                >
                    <option value="Semua Kategori">Semua Kategori</option>
                    <option value="Pembayaran Berhasil">
                        Pembayaran Berhasil
                    </option>
                    <option value="Pesanan Kadaluarsa">
                        Pesanan Kadaluarsa
                    </option>
                    <option value="Pemesanan Dibatalkan">
                        Pemesanan Dibatalkan
                    </option>
                    <option value="Menunggu Pembayaran">
                        Menunggu Pembayaran
                    </option>
                </select>
            </div>
        </div>
    );
}

export default TransactionHistoryFilter;
