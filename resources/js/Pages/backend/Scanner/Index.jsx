import BreadCrumb from "@/Components/BreadCrumb";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import scannerTicket from "@/utils/scannerTicket";
import sendRequest from "@/utils/sendRequest";
import showLoading from "@/utils/showLoading";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Html5Qrcode } from "html5-qrcode";

function Index({ title }) {
    const [isFound, setIsFound] = useState(false);
    const [transaction, setTransaction] = useState({});
    const [isChecked, setIsChecked] = useState(false);

    const disableButton = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        invoice: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.activateTicket"), {
            onSuccess: () => {
                setIsFound(false);
            },
        });
    };

    const { notification } = usePage().props;
    useEffect(() => {
        scannerTicket(async (decodedText) => {
            showLoading();
            const invoice = decodedText;
            await sendRequest({
                url: route("find-transaction-by-invoice", invoice),
                method: "GET",
                onSuccess: (result) => {
                    const tr = result.transaction;
                    if (tr != null) {
                        setTransaction(tr);
                        setData("invoice", invoice);
                        setIsFound(true);
                        Swal.close();
                    } else {
                        Notification({
                            title: "Gagal",
                            text: "E-Tiket tidak ditemukan",
                            icon: "error",
                        });
                        return false;
                    }
                },
            });
        });

        if (notification) {
            Notification(notification);
        }
    }, [notification]);
    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={{ active: title }} />

            <div className="mt-5">
                {!isFound && (
                    <div className="w-1/2">
                        <div
                            className="flex items-center p-4 mb-4 text-sm text-teal-800 border border-teal-300 rounded-lg bg-teal-50"
                            role="alert"
                        >
                            <svg
                                className="flex-shrink-0 inline w-4 h-4 me-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">
                                    Silahkan arahkan QRCODE ke arah kamera
                                </span>
                            </div>
                        </div>

                        <div id="preview" className="rounded-md"></div>
                    </div>
                )}

                {isFound && (
                    <div className="w-1/2 bg-white rounded-md shadow-md p-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[14px] text-gray-500">
                                        Event
                                    </span>
                                    <span>{transaction.event.name}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[14px] text-gray-500">
                                        Total Belanja
                                    </span>
                                    <span>{transaction.total}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[14px] text-gray-500">
                                        Tanggal Transaksi
                                    </span>
                                    <span>{transaction.created_at}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[14px] text-gray-500">
                                        Total Tiket
                                    </span>
                                    <span>{transaction.tickets.length}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-1">
                            <h1 className="text-lg poppins-medium border-b pb-3">
                                Detail Pembeli
                            </h1>
                            <div className="mt-3 text-sm flex justify-between">
                                <span>Nama</span>
                                <span>{transaction.buyer.name}</span>
                            </div>
                            <div className="mt-3 text-sm flex justify-between">
                                <span>Email</span>
                                <span>{transaction.buyer.email}</span>
                            </div>
                            <div className="mt-3 text-sm flex justify-between">
                                <span>Jenis Kelamin</span>
                                <span>{transaction.buyer.gender}</span>
                            </div>
                            <div className="mt-3 text-sm flex justify-between">
                                <span>Tipe Identitas</span>
                                <span>{transaction.buyer.identity_type}</span>
                            </div>
                            <div className="mt-3 text-sm flex justify-between">
                                <span>Nomor Identitas</span>
                                <span>{transaction.buyer.identity_number}</span>
                            </div>
                        </div>

                        {transaction.visitor.map((visitor, i) => (
                            <div key={i} className="mt-8 flex flex-col gap-1">
                                <h1 className="text-lg poppins-medium border-b pb-3">
                                    Detail Pengunjung {i + 1}
                                </h1>
                                <div className="mt-3 text-sm flex justify-between">
                                    <span>Jenis Tiket</span>
                                    <span>{visitor.ticket_name}</span>
                                </div>
                                <div className="mt-3 text-sm flex justify-between">
                                    <span>Nama</span>
                                    <span>{visitor.name}</span>
                                </div>
                                <div className="mt-3 text-sm flex justify-between">
                                    <span>Email</span>
                                    <span>{visitor.email}</span>
                                </div>
                                <div className="mt-3 text-sm flex justify-between">
                                    <span>Jenis Kelamin</span>
                                    <span>{visitor.gender}</span>
                                </div>
                                <div className="mt-3 text-sm flex justify-between">
                                    <span>Tipe Identitas</span>
                                    <span>{visitor.identity_type}</span>
                                </div>
                                <div className="mt-3 text-sm flex justify-between">
                                    <span>Nomor Identitas</span>
                                    <span>{visitor.identity_number}</span>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8">
                            <div className="flex items-center">
                                <input
                                    defaultChecked=""
                                    id="checked-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    onChange={(e) => disableButton(e)}
                                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 "
                                />
                                <label
                                    htmlFor="checked-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Tiket telah diberikan pada setiap pengunjung
                                </label>
                            </div>

                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    disabled={!isChecked}
                                    className={`text-white ${
                                        isChecked
                                            ? "bg-teal-700 hover:bg-teal-800 cursor-pointer focus:ring-4 focus:ring-teal-300"
                                            : "bg-gray-400 cursor-default"
                                    } font-medium rounded-lg text-sm px-5 py-2.5`}
                                >
                                    Aktivasi E-Ticket
                                </button>
                                <Link
                                    href={route("admin.scanTicket.index")}
                                    className={`bg-white text-teal-700 hover:bg-teal-800 hover:bg-opacity-20 border border-teal-700 duration-200 cursor-pointer focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5`}
                                >
                                    Lakukan Scan Ulang
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export default Index;
