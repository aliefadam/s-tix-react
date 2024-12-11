import React from "react";
import ShowPaymentStatus from "../Status/ShowPaymentStatus";

function TransactionTableBody({ transactions, setDataModal }) {
    return (
        <tbody>
            {transactions.map((transaction, i) => (
                <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td className="px-6 py-5">{i + 1}</td>
                    <td className="px-6 py-5">{transaction.event.name}</td>
                    <td className="px-6 py-5">{transaction.buyer.name}</td>
                    <td className="px-6 py-5">
                        {transaction.ticket_count} Tiket
                    </td>
                    <td className="px-6 py-5 leading-normal">
                        {transaction.total}
                    </td>
                    <td className="px-6 py-5 leading-normal">
                        <ShowPaymentStatus status={transaction.status} />
                    </td>
                    <td className="px-6 py-5 leading-normal">
                        {transaction.created_at}
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
                                    <button
                                        onClick={() =>
                                            setDataModal(transaction.id)
                                        }
                                        type="button"
                                        className="block w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="detail-transaksi-modal"
                                        data-modal-toggle="detail-transaksi-modal"
                                    >
                                        Lihat Detail
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default TransactionTableBody;
