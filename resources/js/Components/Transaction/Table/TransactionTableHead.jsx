import React from "react";

function TransactionTableHead() {
    return (
        <thead className="text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400">
            <tr>
                <th scope="col" className="px-6 py-5">
                    No
                </th>
                <th scope="col" className="px-6 py-5">
                    Event
                </th>
                <th scope="col" className="px-6 py-5">
                    Nama Pembeli
                </th>
                <th scope="col" className="px-6 py-5">
                    Tiket Dibeli
                </th>
                <th scope="col" className="px-6 py-5 w-[150px]">
                    Total
                </th>
                <th scope="col" className="px-6 py-5">
                    Status
                </th>
                <th scope="col" className="px-6 py-5">
                    Belanja Pada
                </th>
                <th scope="col" className="px-6 py-5">
                    Aksi
                </th>
            </tr>
        </thead>
    );
}

export default TransactionTableHead;
