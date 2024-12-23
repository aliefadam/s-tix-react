import React from "react";

function FooterFollowUs() {
    const items = [
        {
            name: "Instagram",
            url: "#",
            icon: "fa-brands fa-instagram",
            color: "bg-gradient-to-r from-pink-500 to-pink-700 text-white",
        },
        {
            name: "YouTube",
            url: "#",
            icon: "fa-brands fa-youtube",
            color: "bg-red-700 text-white",
        },
        {
            name: "Twitter",
            url: "#",
            icon: "fa-brands fa-x-twitter",
            color: "bg-black text-white",
        },
        {
            name: "TikTok",
            url: "#",
            icon: "fa-brands fa-tiktok",
            color: "bg-gray-800 text-white",
        },
    ];
    return (
        <div className="mt-4 flex items-center gap-4">
            {items.map(({ name, url, icon, color }) => (
                <a
                    key={name}
                    href={url}
                    className={`flex justify-center items-center size-[50px] rounded-lg text-lg ${color} hover:scale-105 duration-200`}
                >
                    <i className={icon} />
                </a>
            ))}
        </div>
    );
}

export default FooterFollowUs;
