import initDataTable from "@/utils/initDataTable";
import React, { useEffect } from "react";
import VoucherTableHead from "./VoucherTableHead";
import VoucherTableBody from "./VoucherTableBody";

function VoucherTable({ vouchers, handleDeleteVoucher }) {
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
                    vouchers={vouchers}
                    handleDelete={handleDeleteVoucher}
                />
            </table>
        </div>
    );
}

export default VoucherTable;
