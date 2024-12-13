import React from "react";
import VoucherModalHead from "./VoucherModalHead";
import VoucherModalBody from "./VoucherModalBody";

function VoucherModal({ voucher_usage }) {
    return (
        <div
            id="detail-usage-voucher"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-[60%] max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <VoucherModalHead />
                    <VoucherModalBody voucher_usage={voucher_usage} />
                </div>
            </div>
        </div>
    );
}

export default VoucherModal;
