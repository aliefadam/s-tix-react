import React from "react";
import TransactionHistoryTickets from "./TransactionHistoryTickets";

function TransactionHistoryDetail({ banner, name, tickets, total }) {
    return (
        <div className="flex justify-between mt-5">
            <div className="flex-[2] flex flex-col gap-5">
                <div className="flex">
                    <div className="flex-[3] flex-col gap-3">
                        <div className="flex lg:gap-5 gap-3">
                            <img
                                src={banner}
                                className="lg:w-[200px] w-[80px] rounded-md"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="poppins-medium">{name}</span>
                                <TransactionHistoryTickets tickets={tickets} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[1] flex flex-col gap-2 items-end">
                <span className="text-sm leading-none">Total Transaksi</span>
                <span className="poppins-semibold">{total}</span>
            </div>
        </div>
    );
}

export default TransactionHistoryDetail;
