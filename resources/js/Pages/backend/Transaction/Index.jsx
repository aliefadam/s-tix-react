import BreadCrumb from "@/Components/BreadCrumb";
import TransactionDetailModal from "@/Components/Modal/Transaction/TransactionDetailModal";
import TransactionTable from "@/Components/Transaction/Table/TransactionTable";
import TransactionTableTitle from "@/Components/Transaction/Table/TransactionTableTitle";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

function Index({ title, transactions }) {
    const breadCrumbData = {
        active: title,
    };

    const [transaction, setTransaction] = useState(transactions[0]);
    const setDataModal = (id) => {
        setTransaction(
            transactions.find((transaction) => transaction.id == id)
        );
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white shadow-md rounded-md overflow-hiddens">
                <TransactionTableTitle />
                <TransactionTable
                    transactions={transactions}
                    setDataModal={setDataModal}
                />
            </div>

            <TransactionDetailModal transaction={transaction} />
        </AdminLayout>
    );
}

export default Index;
