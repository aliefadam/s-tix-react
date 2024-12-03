import { Link } from "@inertiajs/react";
import React from "react";

function SidebarMenu({ menu_title, menu_link }) {
    return (
        <>
            {menu_title.map((menu, i) => (
                <div key={i} className="">
                    <span className="text-sm text-gray-700 poppins-medium block mb-2">
                        {menu.name}
                    </span>
                    {menu_link
                        .filter((link) => link.slug_id == menu.slug)
                        .map((link, i) => (
                            <Link
                                key={i}
                                href={route(link.url)}
                                className={`flex gap-2 items-center p-3 rounded-md duration-200 ${
                                    route().current(`admin.${link.name}`) ||
                                    route().current(`admin.${link.name}.*`)
                                        ? "text-white bg-gradient-to-r from-teal-600 to-teal-700"
                                        : "hover:shadow-md active:scale-[0.98]"
                                }`}
                            >
                                <i className={link.icon} />
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
