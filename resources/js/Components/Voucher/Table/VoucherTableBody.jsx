import React from "react";
import VoucherTableBodyLink from "./VoucherTableBodyLink";

function VoucherTableBody({ vouchers, handleDelete }) {
    return (
        <tbody>
            {vouchers.map((voucher, i) => (
                <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td className="px-6 py-5">{i + 1}</td>
                    <td className="px-6 py-5">{voucher.code}</td>
                    <td className="px-6 py-5 capitalize">{voucher.unit}</td>
                    <td className="px-6 py-5">{voucher.nominal}</td>
                    <td className="px-6 py-5">{voucher.minimal_transaction}</td>
                    <td className="px-6 py-5">{voucher.maximal_used}</td>
                    <td className="px-6 py-5">
                        {voucher.active ? (
                            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                Aktif
                            </span>
                        ) : (
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                Tidak Aktif
                            </span>
                        )}
                    </td>
                    <td className="px-6 py-5">
                        <button
                            id={`dropdownDefaultButton-${i}`}
                            className="w-[30px] py-2 px-3 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md"
                            data-dropdown-toggle={`dropdown-${i}`}
                        >
                            <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                        <div
                            id={`dropdown-${i}`}
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby={`dropdownDefaultButton-${i}`}
                            >
                                <li>
                                    <VoucherTableBodyLink
                                        route={route(
                                            "admin.voucher.edit",
                                            voucher.id
                                        )}
                                        title="Edit"
                                    />
                                </li>
                                <li>
                                    <VoucherTableBodyLink
                                        route="#"
                                        title="Hapus"
                                        onClick={(e) =>
                                            handleDelete(e, voucher.id)
                                        }
                                    />
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default VoucherTableBody;
