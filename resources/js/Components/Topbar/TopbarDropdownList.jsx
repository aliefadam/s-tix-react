import React from "react";
import TopbarDropdownListItem from "./TopbarDropdownListItem";

function TopbarDropdownList({ auth }) {
    return (
        <div
            id="dropdownAvatarName"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
            <div className="px-4 py-3 text-sm flex flex-col gap-2 text-gray-900 dark:text-white">
                <div className="font-medium ">{auth.name}</div>
                <div className="truncate">{auth.email}</div>
            </div>
            <TopbarDropdownListItem />
        </div>
    );
}

export default TopbarDropdownList;
