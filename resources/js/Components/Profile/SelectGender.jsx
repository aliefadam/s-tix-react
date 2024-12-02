import React from "react";

function SelectGender({ gender, onChange }) {
    return (
        <div className="mb-5">
            <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Jenis Kelamin
            </label>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                        id="laki-laki"
                        type="radio"
                        value="Laki-laki"
                        name="gender"
                        checked={gender === "Laki-laki"}
                        onChange={onChange}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="laki-laki"
                        className="w-full py-[10.5px] ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Laki-laki
                    </label>
                </div>

                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                        id="perempuan"
                        type="radio"
                        value="Perempuan"
                        name="gender"
                        checked={gender === "Perempuan"}
                        onChange={onChange}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="perempuan"
                        className="w-full py-[10.5px] ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Perempuan
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SelectGender;
