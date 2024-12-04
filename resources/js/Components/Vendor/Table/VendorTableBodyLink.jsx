import { Link } from "@inertiajs/react";
import React from "react";

function VendorTableBodyLink({ route, title, onClick }) {
    return (
        <Link
            onClick={onClick}
            href={route}
            className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
            {title}
        </Link>
    );
}

export default VendorTableBodyLink;
