import { Link } from "@inertiajs/react";
import React from "react";

function NavbarBrand() {
    return (
        <Link
            href="/"
            className="text-2xl poppins-black text-teal-700 flex items-center gap-2"
        >
            <img
                src="/imgs/logo.png"
                alt=""
                className="w-9 rounded-md p-1 bg-teal-700"
            />
            S-TIX
        </Link>
    );
}

export default NavbarBrand;
