import initDataTable from "@/utils/initDataTable";
import React, { useEffect } from "react";
import UserTableHead from "./UserTableHead";
import UserTableBody from "./UserTableBody";

function UserTable({ users }) {
    useEffect(() => {
        initDataTable();
    }, []);
    return (
        <div className="relative">
            <table
                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                id="dataTable"
            >
                <UserTableHead />
                <UserTableBody users={users} />
                {/* <VendorTableHead />
                <VendorTableBody
                    handleDelete={handleDelete}
                    vendors={vendors}
                /> */}
            </table>
        </div>
    );
}

export default UserTable;
