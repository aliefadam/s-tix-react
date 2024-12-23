import { usePage } from "@inertiajs/react";
import React from "react";
import NavbarLink from "./NavbarLink";

function NavbarMenu({ isShowSideBar, setIsShowSideBar }) {
    const { auth } = usePage().props;
    return (
        <div
            className={`flex md:flex-row flex-col bg-gray-100 md:bg-white absolute md:static top-0 ${
                isShowSideBar ? "right-0" : "-right-[100%]"
            } w-[200px] md:w-auto p-5 md:p-0 h-screen md:h-auto items-center gap-3 duration-200`}
        >
            <NavbarLink
                href={"home"}
                icon={"fa-regular fa-home"}
                name={"Beranda"}
            />
            {auth ? (
                <>
                    <NavbarLink
                        href={"transaction"}
                        icon={"fa-regular fa-money-from-bracket"}
                        name={"Transaksi"}
                    />
                    <NavbarLink
                        href={"ticket"}
                        icon={"fa-regular fa-ticket"}
                        name={"Tiket"}
                    />
                    <NavbarLink
                        href={"profile"}
                        icon={"fa-regular fa-user"}
                        name={`Profil Saya`}
                    />
                </>
            ) : (
                <>
                    <NavbarLink href={"login"} name={"Masuk"} />
                    <NavbarLink href={"register"} name={"Daftar"} />
                </>
            )}

            <button
                onClick={() => setIsShowSideBar(!isShowSideBar)}
                className="md:hidden border border-teal-700 px-3.5 py-3 rounded-full hover:bg-teal-700 hover:bg-opacity-20 duration-200 focus:ring-4 focus:ring-teal-300 mt-5"
                type="button"
            >
                <i className="fa-solid fa-xmark text-teal-700"></i>
            </button>
        </div>
    );
}

export default NavbarMenu;
