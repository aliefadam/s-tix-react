import React from "react";

function SelectUnit({ data, setData, errors }) {
    const errorClass = () => {
        if (errors.unit) {
            return "border border-red-500";
        } else {
            return "border border-gray-300";
        }
    };
    return (
        <div className="mb-5">
            <label
                htmlFor={"unit"}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Pilih Unit
            </label>
            <div className="grid grid-cols-2 gap-5">
                <div
                    className={`flex items-center ps-4 rounded ${errorClass()}`}
                >
                    <input
                        name={"unit"}
                        value={"percent"}
                        onChange={(e) => setData("unit", e.target.value)}
                        checked={data.unit === "percent"}
                        id="percent"
                        type="radio"
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500"
                    />
                    <label
                        htmlFor="percent"
                        className="w-full py-3.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Persen (%)
                    </label>
                </div>
                <div
                    className={`flex items-center ps-4 rounded ${errorClass()}`}
                >
                    <input
                        id="rupiah"
                        type="radio"
                        name={"unit"}
                        value={"rupiah"}
                        checked={data.unit === "rupiah"}
                        onChange={(e) => setData("unit", e.target.value)}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500"
                    />
                    <label
                        htmlFor="rupiah"
                        className="w-full py-3.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Rupiah (Rp)
                    </label>
                </div>
                {errors.unit && (
                    <span className="text-sm text-red-600">{errors.unit}</span>
                )}
            </div>
        </div>
    );
}

export default SelectUnit;
