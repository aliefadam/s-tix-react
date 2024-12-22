import React from "react";
import TransactionHistoryAction from "./TransactionHistoryAction";
import TransactionHistoryInfo from "./TransactionHistoryInfo";
import TransactionHistoryDetail from "./TransactionHistoryDetail";

function TransactionHistoryItem({ transactions, openModal, setData = null }) {
    return (
        <div id="history-container" className="lg:mt-5 flex flex-col gap-5">
            {transactions.length === 0 && (
                <div className="mt-5">
                    <p className="text-center text-lg text-gray-500">
                        Anda belum memiliki transaksi
                    </p>
                </div>
            )}
            {transactions.map((transaction, i) => (
                <div
                    key={i}
                    className="bg-white rounded-lg shadow-lg border lg:p-5 p-3"
                >
                    <TransactionHistoryInfo
                        created_at_date={transaction.created_at_date}
                        created_at_time={transaction.created_at_time}
                        status={transaction.status}
                    />
                    <TransactionHistoryDetail
                        banner={transaction.event.banner}
                        name={transaction.event.name}
                        tickets={transaction.tickets}
                        total={transaction.total}
                    />
                    <TransactionHistoryAction
                        setData={setData}
                        id={transaction.id}
                        openModal={openModal}
                        status={transaction.status}
                    />
                </div>
            ))}
        </div>
    );
}

export default TransactionHistoryItem;
