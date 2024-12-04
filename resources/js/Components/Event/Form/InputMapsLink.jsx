import React from "react";

function InputMapsLink() {
    return (
        <div className="mt-3 mb-5 hidden" id="google-map">
            <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Berikan titik pada peta
            </label>
            <input
                id="pac-input"
                className="controls bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2.5"
                type="text"
                placeholder="Cari Lokasi"
            />
            <div id="map" style={{ height: 300 }} />
        </div>
    );
}

export default InputMapsLink;
