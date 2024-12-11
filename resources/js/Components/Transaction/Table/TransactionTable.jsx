import initDataTable from "@/utils/initDataTable";
import React, { useEffect } from "react";
import TransactionTableHead from "./TransactionTableHead";
import TransactionTableBody from "./TransactionTableBody";

function TransactionTable({ transactions, setDataModal }) {
    useEffect(() => {
        initDataTable();
    }, []);
    return (
        <div className="relative">
            <table
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                id="dataTable"
            >
                <TransactionTableHead />
                <TransactionTableBody
                    transactions={transactions}
                    setDataModal={setDataModal}
                />
            </table>
        </div>
    );
}

export default TransactionTable;
