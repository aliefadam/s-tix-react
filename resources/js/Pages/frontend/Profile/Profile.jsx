import BreadCrumb from "@/Components/BreadCrumb";
import ChangePasswordTab from "@/Components/Profile/ChangePasswordTab";
import ChangeProfileTab from "@/Components/Profile/ChangeProfileTab";
import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

function Profile({ title, profile }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
        ],
        active: title,
    };

    return (
        <UserLayout title={title}>
            <div className="flex justify-between">
                <BreadCrumb breadCrumbData={breadCrumbData} />
                <Link
                    href={route("logout")}
                    className="border bg-red-700 text-white hover:bg-red-800 duration-200 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 flex items-center gap-2"
                >
                    <i className="fa-regular fa-power-off" />
                    Keluar
                </Link>
            </div>

            <div className="mb-4 mt-5 border-b border-gray-200 dark:border-gray-700">
                <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    id="default-styled-tab"
                    data-tabs-toggle="#default-styled-tab-content"
                    data-tabs-active-classes="text-teal-600 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-500 border-teal-600 dark:border-teal-500"
                    data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                    role="tablist"
                >
                    <li className="me-2" role="presentation">
                        <button
                            className="flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg"
                            id="profile-styled-tab"
                            data-tabs-target="#styled-profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                        >
                            <i className="fa-regular fa-user" />
                            Edit Profil
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className="flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="change-password-styled-tab"
                            data-tabs-target="#styled-change-password"
                            type="button"
                            role="tab"
                            aria-controls="chane-password"
                            aria-selected="false"
                        >
                            <i className="fa-regular fa-lock" />
                            Ganti Kata Sandi
                        </button>
                    </li>
                </ul>
            </div>

            <div id="default-styled-tab-content">
                <ChangeProfileTab profile={profile} />
                <ChangePasswordTab />
            </div>
        </UserLayout>
    );
}

export default Profile;
