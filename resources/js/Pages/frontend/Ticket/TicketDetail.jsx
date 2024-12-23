import BreadCrumb from "@/Components/BreadCrumb";
import TransactionDetailModal from "@/Components/Modal/Transaction/TransactionDetailModal";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function TicketDetail({ title, transaction }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
            {
                url: route("ticket"),
                name: "Ticket",
            },
        ],
        active: `${title} : ${transaction.event.name}`,
    };

    return (
        <UserLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-12 min-h-[50vh]">
                <h1 className="text-center text-3xl poppins-bold text-teal-700">
                    E-Tiket
                </h1>
                <div className="mt-8 flex justify-center">
                    <div className="border border-teal-700 rounded-md shadow-md w-1/2 grid grid-cols-2 gap-5">
                        <div className="flex flex-col items-center gap-8 p-5">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">
                                    Nama Event
                                </span>
                                <span className="block text-center">
                                    {transaction.event.name}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">
                                    Tanggal Event
                                </span>
                                <span className="block text-center">
                                    {transaction.event.date}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">
                                    Jumlah Tiket
                                </span>
                                <span className="block text-center">
                                    {transaction.ticket_count} Tiket
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-8 p-5">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">
                                    Nomor Invoice
                                </span>
                                <span className="block text-center">
                                    {transaction.invoice}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">
                                    Tanggal Transaksi
                                </span>
                                <span>
                                    {transaction.created_at} -{" "}
                                    {transaction.created_at_time} WIB
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">
                                    Total Pembayaran
                                </span>
                                <span>{transaction.total}</span>
                            </div>
                        </div>
                        <div className="col-span-2 p-5 border-t border-b border-teal-700 -mt-5">
                            <span className="text-center block text-sm">
                                Anda dapat melihat daftar E-Ticket dengan
                                menekan tombol "Lihat E-Ticket" atau Anda dapat
                                langsung mendownload E-ticket yang terlampir
                                dalam Email ini
                            </span>
                        </div>
                        <div className="col-span-2 p-5 -mt-5 flex justify-center items-center gap-5">
                            <button
                                type="button"
                                data-modal-target="detail-transaksi-modal"
                                data-modal-toggle="detail-transaksi-modal"
                                className="text-center lg:py-2.5 py-2 flex-[1] text-sm poppins-semibold rounded-lg hover:bg-teal-700 hover:bg-opacity-20 text-teal-700 border border-teal-700 duration-200 focus:ring-4 focus:ring-teal-300"
                            >
                                Detail Transaksi
                            </button>
                            <button
                                type="button"
                                data-modal-target="e-ticket-modal"
                                data-modal-toggle="e-ticket-modal"
                                className="text-center lg:py-2.5 py-2 flex-[1] text-sm poppins-semibold rounded-lg text-white bg-teal-700 hover:bg-teal-800 duration-200 focus:ring-4 focus:ring-teal-300"
                            >
                                Lihat E-Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <TransactionDetailModal transaction={transaction} />

            <div
                id="e-ticket-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-[550px]">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-hidden">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="lg:text-lg text-sm font-semibold text-gray-900 dark:text-white">
                                E-Ticket
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="e-ticket-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div id="detail-transaksi-body">
                            <div className="h-[80vh]s overflow-y-auto scrollbar">
                                <div className="flex flex-col gap-5 justify-center items-center mt-5">
                                    <span>
                                        Pindai kode ini saat mengambil tiket
                                    </span>
                                    <img src={transaction.e_ticket} alt="" />
                                </div>
                                <div className="flex flex-col items-center gap-1 p-3 border-b border-t w-full mt-10">
                                    <span className="text-xl poppins-semibold text-teal-700">
                                        {transaction.event.name}
                                    </span>
                                </div>
                                <div className="p-5 grid grid-cols-2 border-b">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">
                                                Nama Pembeli
                                            </span>
                                            <span className="">
                                                {transaction.buyer.name}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">
                                                Tanggal Transaksi
                                            </span>
                                            <span className="">
                                                {transaction.created_at}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">
                                                Total Transaksi
                                            </span>
                                            <span className="">
                                                {transaction.total}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-600">
                                                Jumlah Pengunjung
                                            </span>
                                            <span className="">
                                                {transaction.visitor.length}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-center text-red-600 leading-normal text-sm poppins-medium">
                                        Harap jaga baik-baik kode tiket ini!.
                                        Setelah ditukarkan kode ini tidak akan
                                        bisa digunakan kembali
                                    </p>
                                </div>
                                {/* <div className="flex flex-col mt-10">
                                    <div className="flex flex-col items-center gap-1 p-3 border-b border-t w-full">
                                        <span className="text-sm text-gray-600">
                                            Event
                                        </span>
                                        <span>{transaction.event.name}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 p-3 border-b w-full">
                                        <span className="text-sm text-gray-600">
                                            Nama Pembeli
                                        </span>
                                        <span>{transaction.buyer.name}</span>
                                    </div>
                                </div> */}
                                {/* <div className="mt-5 flex justify-center">
                                    <a
                                        href={route(
                                            "ticket.print",
                                            transaction.invoice
                                        )}
                                        className="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 flex justify-center items-center gap-2 w-1/2"
                                    >
                                        <i className="fa-regular fa-down" />
                                        Unduh E-Ticket
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default TicketDetail;
