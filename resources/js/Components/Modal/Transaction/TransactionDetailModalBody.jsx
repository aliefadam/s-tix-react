import React from "react";
import TransactionDetailModalBodyInfo from "./TransactionDetailModalBodyInfo";
import TransactionDetailModalBodyEvent from "./TransactionDetailModalBodyEvent";
import TransactionDetailModalBodyBuyer from "./TransactionDetailModalBodyBuyer";
import TransactionDetailModalBodyVisitor from "./TransactionDetailModalBodyVisitor";
import TransactionDetailModalBodyPayment from "./TransactionDetailModalBodyPayment";

function TransactionDetailModalBody({ transaction }) {
    const { tickets, buyer, visitor, payment, event } = transaction;
    console.log(transaction);

    return (
        <div id="detail-transaksi-body">
            <div className="modal-transaction-detail p-4 md:p-5 space-y-4 h-[500px] overflow-y-auto scrollbar">
                {transaction.status == "Pemesanan Dibatalkan" && (
                    <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                    >
                        <span className="font-medium">
                            Dibatalkan dengan alasan {transaction.cancel_reason}
                        </span>
                    </div>
                )}
                <TransactionDetailModalBodyInfo transaction={transaction} />
                <hr />
                <TransactionDetailModalBodyEvent
                    transaction={transaction}
                    event={event}
                    tickets={tickets}
                />
                <hr />
                <TransactionDetailModalBodyBuyer buyer={buyer} />
                <hr />
                <TransactionDetailModalBodyVisitor visitor={visitor} />
                <hr />
                <TransactionDetailModalBodyPayment
                    payment={payment}
                    transaction={transaction}
                />
            </div>
        </div>
    );
}

export default TransactionDetailModalBody;
