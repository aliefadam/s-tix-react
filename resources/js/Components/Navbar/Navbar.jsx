import React, { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
    const [isShowSideBar, setIsShowSideBar] = useState(false);

    return (
        <nav className="fixed top-0 z-10 w-full bg-white h-[80px] md:px-10 px-5 flex justify-between items-center shadow-md">
            <div className="flex gap-5 items-center">
                <NavbarBrand />
                <NavbarSearch />
            </div>
            <button
                onClick={() => setIsShowSideBar(!isShowSideBar)}
                className="md:hidden border border-teal-700 px-3 py-1.5 rounded-md hover:bg-teal-700 hover:bg-opacity-20 duration-200 focus:ring-4 focus:ring-teal-300"
                type="button"
            >
                <i className="fa-solid fa-bars text-xl text-teal-700" />
            </button>
            <NavbarMenu
                isShowSideBar={isShowSideBar}
                setIsShowSideBar={setIsShowSideBar}
            />
        </nav>
    );
}

export default Navbar;
