import { useForm } from "@inertiajs/react";
import getDatePart from "@/utils/getDatePart";

import React from "react";
import InputGroup from "./InputGroup";
import SelectBirthDate from "./SelectBirthDate";
import InputGroupPrefix from "./InputGroupPrefix";
import SelectIdentity from "./SelectIdentity";
import SelectGender from "./SelectGender";
import SelectGroup from "./SelectGroup";
import ButtonChangeProfile from "./ButtonChangeProfile";

function ChangeProfileTab({ profile }) {
    const { data, setData, put, processing, errors } = useForm({
        name: profile.name,
        email: profile.email,
        date: getDatePart(profile.date_of_birth, "day"),
        month: getDatePart(profile.date_of_birth, "month"),
        year: getDatePart(profile.date_of_birth, "year"),
        whatsapp: profile.whatsapp,
        gender: profile.gender,
        identity_type: profile.identity_type,
        identity_number: profile.identity_number,
        works: profile.works,
        height: profile.height,
        weight: profile.weight,
        religion: profile.religion,
        instagram: profile.instagram,
        tiktok: profile.tiktok,
    });

    const changeProfile = (e) => {
        e.preventDefault();
        put(route("profile.update"));
    };

    return (
        <div
            className="hidden p-4 rounded-lg"
            id="styled-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
        >
            <h1 className="text-center text-2xl poppins-semibold text-teal-700">
                Edit Profil
            </h1>

            <form
                onSubmit={changeProfile}
                action=""
                method="POST"
                className="grid grid-cols-2 w-[80%] mx-auto gap-8 mt-8"
            >
                <div className="">
                    <InputGroup
                        type={"text"}
                        id={"name"}
                        label={"Nama Lengkap"}
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputGroup
                        type={"email"}
                        id={"email"}
                        label={"Email"}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <SelectBirthDate
                        date={data.date}
                        month={data.month}
                        year={data.year}
                        onChange={(e) => setData(e.target.name, e.target.value)}
                    />
                    <InputGroupPrefix
                        id={"whatsapp"}
                        label={"Nomor Whatsapp"}
                        type={"number"}
                        value={data.whatsapp}
                        prefix={"+62"}
                        onChange={(e) => setData("whatsapp", e.target.value)}
                    />
                    <SelectIdentity
                        identity_number={data.identity_number}
                        identity_type={data.identity_type}
                        onChange={(e) => setData(e.target.name, e.target.value)}
                    />
                    <SelectGender
                        gender={data.gender}
                        onChange={(e) => setData("gender", e.target.value)}
                    />
                </div>
                <div className="">
                    <InputGroup
                        type={"text"}
                        id={"works"}
                        label={"Pekerjaan"}
                        value={data.works}
                        onChange={(e) => setData("works", e.target.value)}
                    />
                    <InputGroup
                        type={"number"}
                        id={"height"}
                        label={"Tinggi Badan (cm)"}
                        value={data.height}
                        onChange={(e) => setData("height", e.target.value)}
                    />
                    <InputGroup
                        type={"number"}
                        id={"weight"}
                        label={"Berat Badan (kg)"}
                        value={data.weight}
                        onChange={(e) => setData("weight", e.target.value)}
                    />
                    <SelectGroup
                        id={"religion"}
                        label={"Agama"}
                        value={data.religion}
                        onChange={(e) => setData("religion", e.target.value)}
                        options={[
                            { label: "Islam", value: "Islam" },
                            { label: "Kristen", value: "Kristen" },
                            { label: "Hindu", value: "Hindu" },
                            { label: "Budha", value: "Budha" },
                            { label: "Konghucu", value: "Konghucu" },
                        ]}
                    />
                    <InputGroupPrefix
                        id={"instagram"}
                        label={"Instagram"}
                        prefix={<i className="fa-solid fa-at"></i>}
                        value={data.instagram}
                        onChange={(e) => setData("instagram", e.target.value)}
                    />
                    <InputGroupPrefix
                        id={"tiktok"}
                        label={"TikTok"}
                        prefix={<i className="fa-solid fa-at"></i>}
                        value={data.tiktok}
                        onChange={(e) => setData("tiktok", e.target.value)}
                    />
                </div>
                <ButtonChangeProfile processing={processing} />
            </form>
        </div>
    );
}

export default ChangeProfileTab;
