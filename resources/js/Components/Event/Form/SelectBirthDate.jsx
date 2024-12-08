import React from "react";

function SelectBirthDate({
    date,
    month,
    year,
    handleChange,
    userType,
    index = null,
    ticketID = null,
    error = {
        date: null,
        month: null,
        year: null,
    },
}) {
    const onChange = (e) => {
        if (userType === "pembeli") {
            handleChange(e, "data_pembeli");
        } else {
            handleChange(e, "data_pengunjung", index, ticketID);
        }
    };

    const dateErrorClass = () => {
        if (error.date) {
            return "border border-red-500 focus:border-red-500 focus:ring-0 error-field";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    const monthErrorClass = () => {
        if (error.month) {
            return "border border-red-500 focus:border-red-500 focus:ring-0 error-field";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    const yearErrorClass = () => {
        if (error.year) {
            return "border border-red-500 focus:border-red-500 focus:ring-0 error-field";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div>
            <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Tanggal Lahir
            </label>
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                    <select
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => onChange(e)}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${dateErrorClass()}`}
                    >
                        <option value="">Tanggal</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option
                                key={i}
                                value={String(i + 1).padStart(2, "0")}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </option>
                        ))}
                    </select>
                    {error.date && (
                        <p className="text-red-600 text-sm">{error.date}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <select
                        id="month"
                        name="month"
                        value={month}
                        onChange={(e) => onChange(e)}
                        className={`h-fit bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${monthErrorClass()}`}
                    >
                        <option value="">Bulan</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option
                                key={i}
                                value={String(i + 1).padStart(2, "0")}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </option>
                        ))}
                    </select>
                    {error.month && (
                        <p className="text-red-600 text-sm">{error.month}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <select
                        id="year"
                        name="year"
                        value={year}
                        onChange={(e) => onChange(e)}
                        className={`h-fit bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${yearErrorClass()}`}
                    >
                        <option value="">Tahun</option>
                        {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={String(2024 - i)}>
                                {2024 - i}
                            </option>
                        ))}
                    </select>
                    {error.year && (
                        <p className="text-red-600 text-sm">{error.year}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SelectBirthDate;
