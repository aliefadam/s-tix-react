import React from "react";

function FormGroup({
    data,
    setData,
    type,
    placeholder,
    name,
    id,
    icon,
    title,
}) {
    return (
        <div className="mb-5">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {title}
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={icon} />
                </span>
                <input
                    onChange={(e) => setData(name, e.target.value)}
                    value={data[name]}
                    type={type}
                    id={id}
                    name={name}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-teal-500 focus:border-teal-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default FormGroup;
