import React from "react";

function VoucherModalBodyTable({ voucher_usage }) {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-teal-700">
                <tr>
                    <th scope="col" className="px-6 py-4">
                        No
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Nama Pengguna
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Email Pengguna
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Event
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Digunakan Pada
                    </th>
                </tr>
            </thead>
            <tbody>
                {voucher_usage.map((item, i) => (
                    <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <td className="px-6 py-4">{i + 1}</td>
                        <td className="px-6 py-4">{item.user_name}</td>
                        <td className="px-6 py-4">{item.user_email}</td>
                        <td className="px-6 py-4">{item.event_name}</td>
                        <td className="px-6 py-4">{item.used_at}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default VoucherModalBodyTable;
