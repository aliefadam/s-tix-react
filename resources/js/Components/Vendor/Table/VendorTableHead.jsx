import React from "react";

function VendorTableHead() {
    return (
        <thead className="text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400">
            <tr>
                <th scope="col" className="px-6 py-5">
                    No
                </th>
                <th scope="col" className="px-6 py-5">
                    Nama Vendor
                </th>
                <th scope="col" className="px-6 py-5">
                    Email
                </th>
                <th scope="col" className="px-6 py-5">
                    Bergabung Pada
                </th>
                <th scope="col" className="px-6 py-5">
                    Aksi
                </th>
            </tr>
        </thead>
    );
}

export default VendorTableHead;
