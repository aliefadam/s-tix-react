import BreadCrumb from "@/Components/BreadCrumb";
import ChangePasswordTab from "@/Components/Profile/ChangePasswordTab";
import ChangeProfileTab from "@/Components/Profile/ChangeProfileTab";
import ProfileTab from "@/Components/Profile/ProfileTab";
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

            <ProfileTab />

            <div id="default-styled-tab-content">
                <ChangeProfileTab profile={profile} />
                <ChangePasswordTab />
            </div>
        </UserLayout>
    );
}

export default Profile;
