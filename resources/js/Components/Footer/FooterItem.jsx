import { Link } from "@inertiajs/react";
import React from "react";

function FooterItem({ title, links }) {
    return (
        <div className="">
            <span className="poppins-bold">{title}</span>
            <div className="mt-4 flex flex-col gap-4 text-[13px]">
                {links.map((link, i) => {
                    return link.type == "link" ? (
                        <Link
                            key={i}
                            className="hover:translate-x-1 hover:text-teal-700 duration-200"
                            href={route(link.url)}
                        >
                            {link.name}
                        </Link>
                    ) : (
                        <button
                            data-modal-target={link.modalId}
                            data-modal-toggle={link.modalId}
                            key={i}
                            className="block text-left hover:translate-x-1 hover:text-teal-700 duration-200"
                        >
                            {link.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default FooterItem;
