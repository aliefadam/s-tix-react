import BreadCrumb from "@/Components/BreadCrumb";
import DateTimePicker from "@/Components/Event/Form/DateTimePicker";
import InputBanner from "@/Components/Event/Form/InputBanner";
import InputEventLocation from "@/Components/Event/Form/InputEventLocation";
import InputMapsLink from "@/Components/Event/Form/InputMapsLink";
import Button from "@/Components/Global/Button";
import InputGroup from "@/Components/Profile/InputGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import InitEditor from "@/utils/initEditor";
import initGoogleMaps from "@/utils/initGoogleMaps";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

function Edit({ title, event }) {
    const breadCrumbData = {
        before: [
            {
                url: route("admin.event.index"),
                name: "Event",
            },
        ],
        active: title,
    };

    const { data, setData, post, processing, errors } = useForm({
        name: event.name,
        tax: event.tax,
        description: event.description,
        start_date: event.date_start_raw,
        start_time: event.time_start_raw,
        end_date: event.date_end_raw,
        end_time: event.time_end_raw,
        building_name: event.building_name,
        address: event.address,
        maps_link: event.maps_link,
        banner: null,
        _method: "PUT",
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("banner", file);
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const previewImage = document.getElementById("banner-preview");
                previewImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        InitEditor({
            id: "description",
            setData,
            defaultValue: event.description,
        });
        initGoogleMaps({ setData, locationFromDatabase: event.maps_link });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.event.update", event.id), {
            forceFormData: true,
            onError: (e) => {
                console.log(e);
            },
        });
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <form
                onSubmit={handleSubmit}
                action=""
                method="POST"
                encType="multipart/form-data"
            >
                <div className="mt-5 grid grid-cols-12 gap-7 bg-white p-5">
                    <div className="col-span-7">
                        <h1 className="poppins-semibold text-lg mb-5">
                            Informasi Umum
                        </h1>
                        <InputGroup
                            id={"name"}
                            label={"Nama Event"}
                            onChange={(e) => setData("name", e.target.value)}
                            type={"text"}
                            value={data.name}
                            error={errors.name}
                        />
                        <InputGroup
                            id={"tax"}
                            label={"Pajak (%)"}
                            onChange={(e) => setData("tax", e.target.value)}
                            type={"number"}
                            value={data.tax}
                            error={errors.tax}
                        />
                        <InputGroup
                            id={"description"}
                            label={"Deskripsi"}
                            onChange={(e) => function () {}}
                            type={"text"}
                            value={data.description}
                            error={errors.description}
                        />
                        <div className="mb-5 flex gap-5">
                            <DateTimePicker
                                idDate={"start_date"}
                                idTime={"start_time"}
                                label={"Waktu Mulai"}
                                errorDate={errors.start_date}
                                errorTime={errors.start_time}
                                onChangeDate={(e) =>
                                    setData("start_date", e.target.value)
                                }
                                onChangeTime={(e) =>
                                    setData("start_time", e.target.value)
                                }
                                valueDate={data.start_date}
                                valueTime={data.start_time}
                            />
                            <DateTimePicker
                                idDate={"end_date"}
                                idTime={"end_time"}
                                label={"Waktu Akhir"}
                                errorDate={errors.end_date}
                                errorTime={errors.end_time}
                                onChangeDate={(e) =>
                                    setData("end_date", e.target.value)
                                }
                                onChangeTime={(e) =>
                                    setData("end_time", e.target.value)
                                }
                                valueDate={data.end_date}
                                valueTime={data.end_time}
                            />
                        </div>
                        <InputEventLocation
                            data={data}
                            setData={setData}
                            errors={errors}
                        />
                        <InputMapsLink />
                    </div>
                    <div className="col-span-5">
                        <InputBanner
                            oldBanner={event.banner}
                            errors={errors}
                            onChange={(e) => handleFileChange(e)}
                        />
                        <div className="flex justify-end mt-5">
                            <Button
                                color={"teal"}
                                name={"Simpan Perubahan"}
                                type={"submit"}
                                processing={processing}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}

export default Edit;
