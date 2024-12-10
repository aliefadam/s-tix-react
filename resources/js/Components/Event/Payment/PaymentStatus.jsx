import ShowPaymentStatus from "@/Components/Transaction/Status/showPaymentStatus";
import React from "react";

function PaymentStatus({ transaction }) {
    return (
        <div className="flex justify-between p-5 border-b">
            <h1 className="lg:text-sm text-xs">Status Pembayaran</h1>
            <div className="flex items-center gap-2 lg:text-sm text-xs text-right">
                <ShowPaymentStatus status={transaction.status} />
            </div>
        </div>
    );
}

export default PaymentStatus;
