import React from "react";

function SelectIdentity({
    identity_type,
    identity_number,
    handleChange,
    userType,
    index = null,
    ticketID = null,
    error = {
        identity_type: null,
        identity_number: null,
    },
}) {
    const onChange = (e) => {
        if (userType === "pembeli") {
            handleChange(e, "data_pembeli");
        } else {
            handleChange(e, "data_pengunjung", index, ticketID);
        }
    };

    const identityTypeErrorClass = () => {
        if (error.identity_type) {
            return "border border-red-500 focus:border-red-500 focus:ring-0 error-field";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    const identityNumberErrorClass = () => {
        if (error.identity_number) {
            return "border border-red-500 focus:border-red-500 focus:ring-0 error-field";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    return (
        <div>
            <label
                htmlFor="identity-type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Nomor Identitas
            </label>
            <div className="flex mb-2">
                <select
                    id="identity-type"
                    name="identity_type"
                    value={identity_type}
                    onChange={(e) => onChange(e)}
                    className={`poppins-medium bg-gray-100 rounded-s-lg text-gray-900 text-sm block p-2.5 ${identityTypeErrorClass()}`}
                >
                    <option value="">Pilih Identitas</option>
                    <option value="KTP">KTP</option>
                    <option value="SIM">SIM</option>
                    <option value="PASSPORT">Passport</option>
                </select>

                <input
                    type="number"
                    id="identity-number"
                    name="identity_number"
                    value={identity_number}
                    onChange={(e) => onChange(e)}
                    className={`poppins-medium bg-gray-50 w-full text-gray-900 text-sm block p-2.5 ${identityNumberErrorClass()}`}
                />
            </div>

            {error.identity_number && (
                <p className="text-sm text-red-600">{error.identity_number}</p>
            )}

            {error.identity_type && (
                <p className="text-sm text-red-600">{error.identity_type}</p>
            )}
        </div>
    );
}

export default SelectIdentity;
