import initDataTable from "@/utils/initDataTable";
import React, { useEffect, useState } from "react";
import VoucherTableHead from "./VoucherTableHead";
import VoucherTableBody from "./VoucherTableBody";
import VoucherModal from "@/Components/Modal/Voucher/VoucherModal";

function VoucherTable({
    vouchers,
    usage_voucher,
    handleDeleteVoucher,
    handleActiveVoucher,
    handleDeactiveVoucher,
}) {
    const [selectedUsageVoucher, setSelectedUsageVoucher] = useState([]);

    const handleSelectUsageVoucher = (voucher_id) => {
        setSelectedUsageVoucher(
            usage_voucher.filter((item) => item.voucher_id == voucher_id)
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
                <VoucherModal voucher_usage={selectedUsageVoucher} />
            )}
        </div>
    );
}

export default VoucherTable;
