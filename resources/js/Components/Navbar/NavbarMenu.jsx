import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import NavbarLink from "./NavbarLink";

function NavbarMenu({ isShowSideBar, setIsShowSideBar }) {
    const { auth } = usePage().props;
    const { data, setData, get, processing, errors, reset } = useForm({
        keyword: "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        router.visit(route("event.search", { keyword: data.keyword }), {
            method: "get",
            replace: true,
        });
    };
    return (
        <div
            className={`flex md:flex-row flex-col bg-gray-100 md:bg-white absolute md:static top-0 ${
                isShowSideBar ? "right-0" : "-right-[100%]"
            } w-[250px] md:w-auto p-5 md:p-0 h-screen md:h-auto items-center gap-3 duration-200`}
        >
            <form onSubmit={handleSearch}>
                <div className="md:hidden flex w-full mb-5">
                    <div className="relative w-full">
                        <input
                            onChange={(e) => setData("keyword", e.target.value)}
                            type="search"
                            id="search"
                            className="block py-2.5 px-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500"
                            placeholder="Cari berdasarkan artis, acara atau nama tempat..."
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 py-2.5 px-3 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                        >
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </form>
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
