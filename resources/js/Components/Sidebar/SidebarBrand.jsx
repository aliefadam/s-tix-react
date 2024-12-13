import { Link } from "@inertiajs/react";
import React from "react";

function SidebarBrand() {
    return (
        <div className="h-[80px] flex items-center justify-center p-5 text-teal-700">
            <Link
                href={route("admin.dashboard")}
                className="text-2xl poppins-black"
            >
                {/* <img
                    src="/imgs/logo.png"
                    alt=""
                    className="w-8 rounded-md p-1 bg-teal-700"
                /> */}
                S-TIX
            </Link>
        </div>
    );
}

export default SidebarBrand;
