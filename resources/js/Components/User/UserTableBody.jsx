import React from "react";

function UserTableBody({ users }) {
    return (
        <tbody>
            {users.map((users, i) => (
                <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td className="px-6 py-5">{i + 1}</td>
                    <td className="px-6 py-5">{users.name}</td>
                    <td className="px-6 py-5">{users.email}</td>
                    <td className="px-6 py-5">{users.role}</td>
                    <td className="px-6 py-5">{users.created_at}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default UserTableBody;
