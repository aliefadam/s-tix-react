import React from "react";
import SidebarBrand from "./SidebarBrand";
import SidebarMenu from "./SidebarMenu";

function Sidebar({ menus }) {
    const { menu_title, menu_link } = menus;

    return (
        <aside className="w-[250px] bg-white shadow-sm fixed top-0">
            <SidebarBrand />
            <div className="p-5 flex flex-col gap-3 h-[calc(100vh-80px)] overflow-auto scrollbar">
                <SidebarMenu menu_link={menu_link} menu_title={menu_title} />
            </div>
        </aside>
    );
}

export default Sidebar;
