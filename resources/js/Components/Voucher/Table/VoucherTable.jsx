import initDataTable from "@/utils/initDataTable";
import React, { useEffect, useState } from "react";
import VoucherTableHead from "./VoucherTableHead";
import VoucherTableBody from "./VoucherTableBody";

function VoucherTable({
    vouchers,
    usage_voucher,
    handleDeleteVoucher,
    handleActiveVoucher,
    handleDeactiveVoucher,
}) {
    const [selectedUsageVoucher, setSelectedUsageVoucher] = useState({});

    const handleSelectUsageVoucher = (voucher_id) => {
        console.log(voucher_id);

        setSelectedUsageVoucher(
            usage_voucher.find((item) => item.voucher_id == voucher_id)
        );
    };

    useEffect(() => {
        initDataTable();
    }, []);

    return (
        <div className="relative">
            <table
                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                id="dataTable"
            >
                <VoucherTableHead />
                <VoucherTableBody
                    handleSelectUsageVoucher={handleSelectUsageVoucher}
                    handleActiveVoucher={handleActiveVoucher}
                    handleDeactiveVoucher={handleDeactiveVoucher}
                    vouchers={vouchers}
                    handleDelete={handleDeleteVoucher}
                />
            </table>

            {usage_voucher.length > 0 && (
                <div
                    id="detail-usage-voucher"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative p-4 w-[60%] max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Penggunaan Voucher
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="detail-usage-voucher"
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
                            <div className="p-4 md:p-5 h-[500px] overflow-y-auto scrollbar">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Nama Pengguna
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Email Pengguna
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Event
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Digunakan Pada
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">
                                                    Silver
                                                </td>
                                                <td className="px-6 py-4">
                                                    Nama Pengguna
                                                </td>
                                                <td className="px-6 py-4">
                                                    Email Pengguna
                                                </td>
                                                <td className="px-6 py-4">
                                                    Digunakan Pada Event
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VoucherTable;
