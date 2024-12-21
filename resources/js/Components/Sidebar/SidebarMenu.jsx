import { Link } from "@inertiajs/react";
import React from "react";

function SidebarMenu({ menu_title, menu_link }) {
    const getActiveMenu = (name) => {
        if (route().current(`admin.scanTicket.*`) && name == "scan ticket") {
            return true;
        }

        if (
            route().current(`admin.${name}`) ||
            route().current(`admin.${name}.*`)
        ) {
            return true;
        }
    };

    return (
        <>
            {menu_title.map((menu, i) => (
                <div key={i} className="flex flex-col gap-1.5 mb-1">
                    <span className="text-sm text-gray-600 poppins-medium block mb-1">
                        {menu.name}
                    </span>
                    {menu_link
                        .filter((link) => link.slug_id == menu.slug)
                        .map((link, i) => (
                            <Link
                                key={i}
                                href={route(link.url)}
                                className={`flex gap-2 items-center p-3 rounded-md duration-200 ${
                                    getActiveMenu(link.name)
                                        ? "text-white bg-gradient-to-r from-teal-600 to-teal-700"
                                        : "hover:shadow-md active:scale-[0.98]"
                                }`}
                            >
                                <i
                                    className={`${link.icon} w-[20px] flex justify-center`}
                                />
                                <span className="text-sm capitalize">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                </div>
            ))}
        </>
    );
}

export default SidebarMenu;
