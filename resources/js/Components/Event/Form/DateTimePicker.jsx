import React from "react";

function DateTimePicker({
    errorDate,
    errorTime,
    valueDate,
    valueTime,
    onChangeDate,
    onChangeTime,
    label,
    idDate,
    idTime,
}) {
    const errorClass = () => {
        if (errorDate || errorTime) {
            return "border border-red-500 focus:border-red-500 focus:ring-0";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div className="flex-[1]">
            <label
                htmlFor={idDate}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <div className="flex items-center gap-3">
                <input
                    type="date"
                    id={idDate}
                    name={idDate}
                    value={valueDate}
                    onChange={onChangeDate}
                    className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errorClass()}`}
                />
                <div className="relative">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <i className="w-4 h-4 fa-solid fa-clock" />
                    </div>
                    <input
                        type="time"
                        id={idTime}
                        name={idTime}
                        value={valueTime}
                        onChange={onChangeTime}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errorClass()}`}
                    />
                </div>
            </div>

            {errorDate && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errorDate}
                </p>
            )}
            {errorTime && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errorTime}
                </p>
            )}
        </div>
    );
}

export default DateTimePicker;
