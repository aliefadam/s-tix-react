import { Link } from "@inertiajs/react";
import React from "react";

function VoucherTableIndex() {
    return (
        <div className="bg-teal-700 rounded-t-md py-4 px-5 flex items-center justify-between">
            <h1 className="text-lg poppins-medium text-white">Data Voucher</h1>
            <Link
                href={route("admin.voucher.create")}
                className="bg-white text-teal-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 text-center"
            >
                <i className="fa-solid fa-plus mr-1.5"></i>
                Tambah Voucher
            </Link>
        </div>
    );
}

export default VoucherTableIndex;
