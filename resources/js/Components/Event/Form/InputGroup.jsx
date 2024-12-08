import React from "react";

function InputGroup({
    type,
    id,
    name,
    value,
    handleChange,
    title,
    userType,
    index = null,
    ticketID = null,
    error = null,
}) {
    const onChange = (e) => {
        if (userType === "pembeli") {
            handleChange(e, "data_pembeli");
        } else {
            handleChange(e, "data_pengunjung", index, ticketID);
        }
    };

    const errorClass = () => {
        if (error) {
            return "border border-red-500 focus:border-red-500 focus:ring-0 error-field";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {title}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
                className={`${errorClass()} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
            />
            {type === "email" && id === "email" && (
                <span className="text-xs poppins-medium text-teal-700 mt-2 block">
                    Email ini digunakan untuk mengirim E-Ticket
                </span>
            )}
            {error && (
                <span className="text-sm poppins-medium text-red-600 mt-2 block">
                    {error}
                </span>
            )}
        </div>
    );
}

export default InputGroup;
