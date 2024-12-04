import React from "react";
import VendorTableBodyLink from "./VendorTableBodyLink";

function VendorTableBody({ vendors, handleDelete }) {
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
                            className="w-[30px] py-2 px-3 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md"
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
                                    <VendorTableBodyLink
                                        route={"#"}
                                        title={"Detail"}
                                    />
                                </li>
                                <li>
                                    <VendorTableBodyLink
                                        route={route(
                                            "admin.vendor.edit",
                                            vendor.user.id
                                        )}
                                        title="Edit"
                                    />
                                </li>
                                <li>
                                    <VendorTableBodyLink
                                        route="#"
                                        title="Hapus"
                                        onClick={(e) =>
                                            handleDelete(e, vendor.user.id)
                                        }
                                    />
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
