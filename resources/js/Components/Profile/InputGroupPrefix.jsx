import React from "react";

function InputGroupPrefix({ id, label, type, value, onChange, prefix }) {
    return (
        <div className="mb-5">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <span
                        className={`text-gray-700 text-sm poppins-semibold ${
                            prefix == "+62"
                                ? ""
                                : "translate-y-[1.8px] translate-x-[0.3px]"
                        }`}
                    >
                        {prefix}
                    </span>
                </div>
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 ${
                        prefix == "+62" ? "pl-12" : "pl-8"
                    } dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500`}
                />
            </div>
        </div>
    );
}

export default InputGroupPrefix;
