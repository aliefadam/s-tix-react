import React from "react";

function InputFileGroup({ id, error, label, onChange }) {
    const errorClass = () => {
        if (error) {
            return "border border-red-500 focus:border-red-500 focus:ring-0";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div className="">
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className={`block w-full text-sm text-gray-900 bg-gray-50 ${errorClass()} rounded-lg focus:outline-none`}
                id={id}
                name={id}
                type="file"
                onChange={onChange}
            />

            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

export default InputFileGroup;
