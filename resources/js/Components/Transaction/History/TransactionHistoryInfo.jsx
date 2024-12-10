import React from "react";
import ShowPaymentStatus from "../Status/showPaymentStatus";

function TransactionHistoryInfo({ created_at_date, created_at_time, status }) {
    return (
        <div className="flex items-center justify-between text-sm lg:gap-0 gap-3">
            <span className="lg:text-sm text-xs text-gray-700 poppins-medium">
                Belanja Pada {created_at_date} - {created_at_time} WIB
            </span>
            <div className="flex items-center lg:text-sm text-xs text-center gap-3">
                <ShowPaymentStatus status={status} withBackground={true} />
            </div>
        </div>
    );
}

export default TransactionHistoryInfo;
