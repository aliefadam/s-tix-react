import React from "react";

function VendorTableBody({ vendors }) {
    return (
        <tbody>
            {vendors.map((vendor, i) => (
                <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td className="px-6 py-5">{i + 1}</td>
                    <td className="px-6 py-5">{vendor.user.name}</td>
                    <td className="px-6 py-5">{vendor.user.email}</td>
                    <td className="px-6 py-5">{vendor.created_at}</td>
                    <td className="px-6 py-5">
                        <button
                            id={`dropdownDefaultButton-${i}`}
                            className="w-[30px] py-1"
                            data-dropdown-toggle={`dropdown-${i}`}
                        >
                            <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                        <div
                            id={`dropdown-${i}`}
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby={`dropdownDefaultButton-${i}`}
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Detail
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={route(
                                            "admin.vendor.edit",
                                            vendor.user.id
                                        )}
                                        className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Edit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        data-id={vendor.user.id}
                                        className="btn-delete block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Hapus
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default VendorTableBody;
