import React from "react";
import InputGroup from "./Form/InputGroup";
import SelectBirthDate from "./Form/SelectBirthDate";
import SelectGender from "./Form/SelectGender";
import SelectIdentity from "./Form/SelectIdentity";

function EventDataPembeliForm({ data_pembeli, handleChange, errors }) {
    return (
        <div className="border border-teal-700 text-white rounded-md shadow-md overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-teal-400 to-teal-500">
                <span className="text-center block">Detail Pembeli</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
                <InputGroup
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    value={data_pembeli.email}
                    title={"Email"}
                    handleChange={handleChange}
                    userType={"pembeli"}
                    error={errors["data_pembeli.email"]}
                />
                <InputGroup
                    id={"name"}
                    type={"text"}
                    name={"name"}
                    value={data_pembeli.name}
                    title={"Nama"}
                    handleChange={handleChange}
                    userType={"pembeli"}
                    error={errors["data_pembeli.name"]}
                />
                {/* <SelectBirthDate
                    date={data_pembeli.date}
                    month={data_pembeli.month}
                    year={data_pembeli.year}
                    handleChange={handleChange}
                    userType={"pembeli"}
                    error={{
                        date: errors["data_pembeli.date"],
                        month: errors["data_pembeli.month"],
                        year: errors["data_pembeli.year"],
                    }}
                /> */}
                <SelectGender
                    gender={data_pembeli.gender}
                    handleChange={handleChange}
                    name={"gender"}
                    userType={"pembeli"}
                    idFemale={"gender-female"}
                    idMale={"gender-male"}
                    error={errors["data_pembeli.gender"]}
                />
                <SelectIdentity
                    identity_type={data_pembeli.identity_type}
                    identity_number={data_pembeli.identity_number}
                    handleChange={handleChange}
                    userType={"pembeli"}
                    error={{
                        identity_type: errors["data_pembeli.identity_type"],
                        identity_number: errors["data_pembeli.identity_number"],
                    }}
                />
            </div>
        </div>
    );
}

export default EventDataPembeliForm;
