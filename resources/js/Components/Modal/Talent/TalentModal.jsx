import React from "react";
import TalentModalHeader from "./TalentModalHeader";
import TalentModalBody from "./TalentModalBody";
import TalentModalFooter from "./TalentModalFooter";

function TalentModal({
    id,
    name,
    data,
    setData,
    processing,
    errors,
    handleSubmit,
    handleFileChange,
}) {
    return (
        <div
            id={id}
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <TalentModalHeader id={id} name={name} />
                    <form
                        onSubmit={handleSubmit}
                        action=""
                        encType="multipart/form-data"
                    >
                        <TalentModalBody
                            data={data}
                            setData={setData}
                            handleFileChange={handleFileChange}
                            errors={errors}
                        />
                        <TalentModalFooter id={id} processing={processing} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TalentModal;
