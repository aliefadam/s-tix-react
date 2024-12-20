import React from "react";

function SelectGender({
    gender,
    handleChange,
    index = null,
    ticketID = null,
    userType,
    name,
    idFemale,
    idMale,
    error = null,
}) {
    const onChange = (e) => {
        if (userType === "pembeli") {
            handleChange(e, "data_pembeli");
        } else {
            handleChange(e, "data_pengunjung", index, ticketID, "gender");
        }
    };

    const errorClass = () => {
        if (error) {
            return "border border-red-500 error-field";
        } else {
            return "border border-gray-300";
        }
    };

    const onChecked = (genderType) => {
        return gender === genderType;
    };

    return (
        <div>
            <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Jenis Kelamin
            </label>
            <div className="grid grid-cols-2 gap-5">
                <div
                    className={`flex items-center ps-4 rounded ${errorClass()}`}
                >
                    <input
                        id={idMale}
                        type="radio"
                        value="Laki-laki"
                        name={name}
                        checked={onChecked("Laki-laki")}
                        onChange={(e) => onChange(e)}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor={idMale}
                        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Laki-laki
                    </label>
                </div>

                <div
                    className={`flex items-center ps-4 rounded ${errorClass()}`}
                >
                    <input
                        id={idFemale}
                        type="radio"
                        value="Perempuan"
                        name={name}
                        checked={onChecked("Perempuan")}
                        onChange={(e) => onChange(e)}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor={idFemale}
                        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Perempuan
                    </label>
                </div>
            </div>
            {error && (
                <span className="text-sm text-red-600 block mt-2">{error}</span>
            )}
        </div>
    );
}

export default SelectGender;
