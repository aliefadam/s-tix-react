import BreadCrumb from "@/Components/BreadCrumb";
import TransactionDetailModalDynamic from "@/Components/Modal/Transaction/TransactionDetailModalDynamic";
import TransactionHistoryFilter from "@/Components/Transaction/History/TransactionHistoryFilter";
import TransactionHistoryItem from "@/Components/Transaction/History/TransactionHistoryItem";
import UserLayout from "@/Layouts/UserLayout";
import React, { useState } from "react";

function TransactionHistory({ title, transactions }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
        ],
        active: title,
    };

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [transactionID, setTransactionID] = useState(null);

    const openModal = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-transaction-id");
        setIsOpenModal(true);
        setTransactionID(id);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <UserLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />
            <div className="mt-10">
                <h1 className="text-center text-3xl poppins-bold text-teal-700">
                    Transaksi
                </h1>
                <div className="lg:w-full w-full mt-10">
                    <TransactionHistoryFilter />
                    <TransactionHistoryItem
                        openModal={openModal}
                        transactions={transactions}
                    />
                </div>
            </div>

            <TransactionDetailModalDynamic
                transactionID={transactionID}
                setTransactionID={setTransactionID}
                isOpenModal={isOpenModal}
                closeModal={closeModal}
            />
        </UserLayout>
    );
}

export default TransactionHistory;
