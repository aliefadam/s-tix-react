import React from "react";

function InputEventLocation({ data, setData, errors }) {
    const errorClass = () => {
        if (errors.building_name || errors.address) {
            return "border border-red-500 focus:border-red-500 focus:ring-0";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div className="mb-5">
            <label
                htmlFor="tax"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Lokasi Event
            </label>
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    id="building_name"
                    name="building_name"
                    value={data.building_name}
                    onChange={(e) => setData("building_name", e.target.value)}
                    className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errorClass()}`}
                    placeholder="Nama Tempat"
                />
                {errors.building_name && (
                    <p className="text-sm text-red-600 dark:text-red-500">
                        {errors.building_name}
                    </p>
                )}
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errorClass()}`}
                    placeholder="Alamat"
                />
                {errors.address && (
                    <p className="text-sm text-red-600 dark:text-red-500">
                        {errors.address}
                    </p>
                )}
            </div>
        </div>
    );
}

export default InputEventLocation;
