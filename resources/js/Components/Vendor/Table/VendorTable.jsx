import React, { useEffect } from "react";
import VendorTableHead from "./VendorTableHead";
import VendorTableBody from "./VendorTableBody";
import initDataTable from "@/utils/initDataTable";

function VendorTable({ vendors, handleDelete }) {
    useEffect(() => {
        initDataTable();
    }, []);
    return (
        <div className="relative">
            <table
                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                id="dataTable"
            >
                <VendorTableHead />
                <VendorTableBody
                    handleDelete={handleDelete}
                    vendors={vendors}
                />
            </table>
        </div>
    );
}

export default VendorTable;
