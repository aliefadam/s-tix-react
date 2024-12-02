import React from "react";

function InputGroup({ id, label, value, onChange, type }) {
    const variant = () => {
        if (type == "email") {
            return "bg-gray-200 cursor-not-allowed";
        } else {
            return "bg-gray-50";
        }
    };
    return (
        <div className="mb-5">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                disabled={type == "email"}
                className={`${variant()} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500`}
            />
        </div>
    );
}

export default InputGroup;
