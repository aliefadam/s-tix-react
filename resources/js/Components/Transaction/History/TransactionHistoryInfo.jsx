import React from "react";

function TransactionHistoryInfo({ created_at_date, created_at_time, status }) {
    return (
        <div className="flex items-center justify-between text-sm lg:gap-0 gap-3">
            <span className="lg:text-sm text-xs text-gray-700 poppins-medium">
                Belanja Pada {created_at_date} - {created_at_time} WIB
            </span>
            <div className="flex items-center lg:text-sm text-xs text-center gap-3">
                <span className="bg-amber-100 text-amber-600 poppins-semibold px-4 py-2.5 rounded-md">
                    {status}
                </span>
            </div>
        </div>
    );
}

export default TransactionHistoryInfo;
