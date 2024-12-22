import BreadCrumb from "@/Components/BreadCrumb";
import CancelTransactionModal from "@/Components/Modal/CancelTransaction/CancelTransactionModal";
import TransactionDetailModalDynamic from "@/Components/Modal/Transaction/TransactionDetailModalDynamic";
import TransactionHistoryFilter from "@/Components/Transaction/History/TransactionHistoryFilter";
import TransactionHistoryItem from "@/Components/Transaction/History/TransactionHistoryItem";
import UserLayout from "@/Layouts/UserLayout";
import Notification from "@/utils/notification";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

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

    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
        cancel_reason: "Saya berubah pikiran",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("transaction.cancel"), {
            onSuccess: () => {
                reset();
                document
                    .getElementById("cancel-button-pembatalan-transaksi-modal")
                    .click();
            },
        });
    };

    const { notification } = usePage().props;
    useEffect(() => {
        if (notification) {
            Notification(notification);
        }
    }, [notification]);

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
                        setData={setData}
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

            <CancelTransactionModal
                handleSubmit={handleSubmit}
                setData={setData}
            />
        </UserLayout>
    );
}

export default TransactionHistory;
