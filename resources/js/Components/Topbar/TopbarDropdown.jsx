import React from "react";

function TopbarDropdown({ auth }) {
    return (
        <button
            id="dropdownAvatarNameButton"
            data-dropdown-toggle="dropdownAvatarName"
            className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-gray-900 dark:hover:text-gray-900 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
            type="button"
        >
            <img
                className="w-8 h-8 me-2 rounded-full"
                src="/imgs/av-2.svg"
                alt="user photo"
            />
            {auth.name}
            <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                />
            </svg>
        </button>
    );
}

export default TopbarDropdown;
