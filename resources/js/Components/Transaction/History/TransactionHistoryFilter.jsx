import React from "react";

function TransactionHistoryFilter() {
    return (
        <div
            className="bg-white rounded-lg shadow-lg border p-5 lg:block hidden"
            id="filter-container"
        >
            <div className="flex gap-3">
                <div className="relative lg:flex-[2] flex-[1.5]">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <i className="fa-regular fa-magnifying-glass" />
                    </div>
                    <input
                        type="text"
                        id="keyword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm text-xs rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full ps-10 p-2.5 "
                        placeholder="Cari transaksimu ..."
                    />
                </div>
                <select
                    id="categories"
                    className=" flex-[1] bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm text-xs rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                >
                    <option value="all">Semua Kategori</option>
                    <option value="pesanan_sukses">Pesanan Sukses</option>
                    <option value="pesanan_kadaluarsa">
                        Pesanan Kadaluarsa
                    </option>
                    <option value="pesanan_kadaluarsa">
                        Pesanan Dibatalkan
                    </option>
                    <option value="menunggu_pembayaran">
                        Menunggu Pembayaran
                    </option>
                </select>
            </div>
        </div>
    );
}

export default TransactionHistoryFilter;
