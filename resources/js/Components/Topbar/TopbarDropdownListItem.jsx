import { Link } from "@inertiajs/react";
import React from "react";

function TopbarDropdownListItem() {
    return (
        <>
            <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
                <li>
                    <Link
                        href={route("admin.dashboard")}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("admin.changePassword")}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Ganti Password
                    </Link>
                </li>
            </ul>
            <div className="py-2">
                <Link
                    href={route("logout")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                    Keluar
                </Link>
            </div>
        </>
    );
}

export default TopbarDropdownListItem;
