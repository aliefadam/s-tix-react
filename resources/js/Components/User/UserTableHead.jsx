import React from "react";

function UserTableHead() {
    return (
        <thead className="text-xs text-teal-700 uppercase border-b border-t dark:text-teal-400">
            <tr>
                <th scope="col" className="px-6 py-5">
                    No
                </th>
                <th scope="col" className="px-6 py-5">
                    Nama
                </th>
                <th scope="col" className="px-6 py-5">
                    Email
                </th>
                <th scope="col" className="px-6 py-5">
                    Role
                </th>
                <th scope="col" className="px-6 py-5">
                    Bergabung Pada
                </th>
            </tr>
        </thead>
    );
}

export default UserTableHead;
