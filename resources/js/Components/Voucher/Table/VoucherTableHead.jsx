import React from "react";

function VoucherTableHead() {
    return (
        <thead className="text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400">
            <tr>
                <th scope="col" className="px-6 py-5">
                    No
                </th>
                <th scope="col" className="px-6 py-5">
                    Kode Voucher
                </th>
                <th scope="col" className="px-6 py-5">
                    Unit
                </th>
                <th scope="col" className="px-6 py-5">
                    Nominal
                </th>
                <th scope="col" className="px-6 py-5">
                    Minimal Pembelian
                </th>
                <th scope="col" className="px-6 py-5">
                    Maksimal Pemakaian
                </th>
                <th scope="col" className="px-6 py-5">
                    Jumlah Pemakaian
                </th>
                <th scope="col" className="px-6 py-5">
                    Status
                </th>
                <th scope="col" className="px-6 py-5">
                    Aksi
                </th>
            </tr>
        </thead>
    );
}

export default VoucherTableHead;
