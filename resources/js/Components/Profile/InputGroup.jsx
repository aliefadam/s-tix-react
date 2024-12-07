import React from "react";

function InputGroup({
    id,
    label,
    moreLabel = null,
    value,
    onChange,
    type,
    disabled = false,
    error = null,
    placeholder = null,
}) {
    const variant = () => {
        if (disabled) {
            return "bg-gray-200 cursor-not-allowed";
        } else {
            return "bg-gray-50";
        }
    };

    const errorClass = () => {
        if (error) {
            return "border border-red-500 focus:border-red-500 focus:ring-0";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div className="mb-5">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label} {moreLabel}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`${variant()} ${errorClass()} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                placeholder={placeholder ?? ""}
            />
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

export default InputGroup;
