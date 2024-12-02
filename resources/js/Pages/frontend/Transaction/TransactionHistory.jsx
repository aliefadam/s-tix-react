import BreadCrumb from "@/Components/BreadCrumb";
import TransactionDetailModalDynamic from "@/Components/Modal/Transaction/TransactionDetailModalDynamic";
import UserLayout from "@/Layouts/UserLayout";
import React, { useState } from "react";

function TransactionHistory({ title, transactions }) {
    const before = [
        {
            url: route("home"),
            name: "Beranda",
        },
    ];
    const active = title;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [transactionID, setTransactionID] = useState(null);

    const openModal = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-transaction-id");
        setIsOpenModal(true);
        setTransactionID(id);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <UserLayout title={title}>
            <BreadCrumb active={active} before={before} />
            <div className="mt-10">
                <h1 className="text-center text-3xl poppins-bold text-teal-700">
                    Transaksi
                </h1>
                <div className="lg:w-full w-full mt-10">
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
                                <option selected="" value="all">
                                    Semua Kategori
                                </option>
                                <option value="pesanan_sukses">
                                    Pesanan Sukses
                                </option>
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
                    <div
                        id="history-container"
                        className="lg:mt-5 flex flex-col gap-5"
                    >
                        {transactions.map((transaction, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-lg border lg:p-5 p-3"
                            >
                                <div className="flex items-center justify-between text-sm lg:gap-0 gap-3">
                                    <span className="lg:text-sm text-xs text-gray-700 poppins-medium">
                                        Belanja Pada{" "}
                                        {transaction.created_at_date} -{" "}
                                        {transaction.created_at_time} WIB
                                    </span>
                                    <div className="flex items-center lg:text-sm text-xs text-center gap-3">
                                        <span className="bg-amber-100 text-amber-600 poppins-semibold px-4 py-2.5 rounded-md">
                                            {transaction.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className="flex-[2] flex flex-col gap-5">
                                        <div className="flex">
                                            <div className="flex-[3] flex-col gap-3">
                                                <div className="flex lg:gap-5 gap-3">
                                                    <img
                                                        src={
                                                            transaction.event
                                                                .banner
                                                        }
                                                        className="lg:w-[200px] w-[80px] rounded-md"
                                                    />
                                                    <div className="flex flex-col gap-1">
                                                        <span className="poppins-medium">
                                                            {
                                                                transaction
                                                                    .event.name
                                                            }
                                                        </span>
                                                        <span className="text-sm text-gray-600">
                                                            <ul className="flex flex-col gap-1 mt-1">
                                                                {transaction.tickets.map(
                                                                    (
                                                                        ticket,
                                                                        j
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                j
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    ticket.ticket_name
                                                                                }
                                                                            </span>
                                                                            {
                                                                                " x "
                                                                            }
                                                                            <span>
                                                                                {
                                                                                    ticket.ticket_count
                                                                                }
                                                                            </span>
                                                                            {
                                                                                " : "
                                                                            }
                                                                            <span>
                                                                                {
                                                                                    ticket.ticket_price
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-[1] flex flex-col gap-2 items-end">
                                        <span className="text-sm leading-none">
                                            Total Transaksi
                                        </span>
                                        <span className="poppins-semibold">
                                            {transaction.total}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 mt-5">
                                    <button
                                        onClick={(e) => openModal(e)}
                                        data-transaction-id={transaction.id}
                                        data-modal-target="detail-transaksi-modal"
                                        data-modal-toggle="detail-transaksi-modal"
                                        className="btn-detail-transaksi w-[220px] text-center lg:text-sm text-xs px-3 py-2 rounded-lg poppins-semibold text-teal-700 border border-teal-700 cursor-pointer hover:bg-teal-800 hover:bg-opacity-20 duration-200"
                                    >
                                        <i
                                            data-transaction-id={transaction.id}
                                            className="fa-regular fa-eye mr-1"
                                            onClick={(e) => openModal(e)}
                                        />
                                        Lihat Detail Transaksi
                                    </button>
                                    {transaction.status ===
                                        "Menunggu Pembayaran" && (
                                        <button
                                            data-transaction-id={transaction.id}
                                            data-modal-target="pembatalan-transaksi-modal"
                                            data-modal-toggle="pembatalan-transaksi-modal"
                                            className="btn-batalkan-transaksi w-[220px] text-center lg:text-sm text-xs px-3 py-2 rounded-lg border border-red-700 text-red-700 poppins-semibold cursor-pointer hover:bg-red-800 hover:bg-opacity-20 duration-200"
                                        >
                                            <i className="fa-regular fa-ban mr-1" />
                                            Batalkan Transaksi
                                        </button>
                                    )}
                                    {transaction.status ===
                                        "Dalam Pengiriman" && (
                                        <span
                                            data-transaction-id={transaction.id}
                                            className="btn-terima-pesanan w-[220px] text-center lg:text-sm text-xs px-3 py-2 rounded-lg bg-green-700 poppins-semibold text-white cursor-pointer hover:bg-green-800"
                                        >
                                            <i className="fa-regular fa-person-carry-box mr-1.5" />
                                            Pesanan Telah Diterima
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <TransactionDetailModalDynamic
                transactionID={transactionID}
                setTransactionID={setTransactionID}
                isOpenModal={isOpenModal}
                closeModal={closeModal}
            />
        </UserLayout>
    );
}

export default TransactionHistory;
