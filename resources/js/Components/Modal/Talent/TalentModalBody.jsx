import InputFileGroup from "@/Components/Global/InputFileGroup";
import InputGroup from "@/Components/Profile/InputGroup";
import React from "react";

function TalentModalBody({ data, setData, errors, handleFileChange }) {
    return (
        <div className="p-4 md:p-5">
            <InputGroup
                id={"name"}
                label={"Nama Talent"}
                type={"text"}
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                error={errors.name}
            />
            <InputFileGroup
                error={errors.image}
                id={"image"}
                label={"Foto Talent | Gunakan Ukuran 1:1"}
                onChange={(e) => handleFileChange(e)}
            />
        </div>
    );
}

export default TalentModalBody;
