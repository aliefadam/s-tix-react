import React from "react";
import VoucherModalBodyTable from "./VoucherModalBodyTable";

function VoucherModalBody({ voucher_usage }) {
    return (
        <div className="p-4 h-[500px] overflow-y-auto scrollbar">
            <div className="relative overflow-x-auto">
                <VoucherModalBodyTable voucher_usage={voucher_usage} />
            </div>
        </div>
    );
}

export default VoucherModalBody;
