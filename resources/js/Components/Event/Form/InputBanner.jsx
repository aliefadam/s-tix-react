import React from "react";

function InputBanner({ onChange, errors, oldBanner = null }) {
    const errorClass = () => {
        if (errors.banner) {
            return "border border-red-500 focus:border-red-500 focus:ring-0";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };
    return (
        <>
            <h1 className="poppins-semibold text-lg">Banner Event</h1>
            <div className="mb-5 mt-5">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Pilih Gambar | Gunakan Ratio 16:9
                </label>
                <input
                    id="banner"
                    name="banner"
                    type="file"
                    onChange={onChange}
                    className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full ${errorClass()}`}
                />
                {errors.banner && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.banner}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm poppins-medium">Preview Image</span>
                <img
                    src={
                        `${oldBanner}` ?? "https://via.placeholder.com/1600x900"
                    }
                    alt="Placeholder Image"
                    className="rounded-lg shadow-md w-full h-[259px] object-cover"
                    id="banner-preview"
                />
            </div>
        </>
    );
}

export default InputBanner;
