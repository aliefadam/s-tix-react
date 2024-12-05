import Button from "@/Components/Global/Button";
import ButtonBordered from "@/Components/Global/ButtonBordered";
import React from "react";

function TalentModalFooter({ processing, id }) {
    return (
        <div className="flex items-center gap-3 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Button
                processing={processing}
                type="submit"
                color={"teal"}
                name={id === "add-talent-modal" ? "Tambah" : "Simpan"}
            />
            <ButtonBordered
                name={"Batal"}
                type={"button"}
                props={{
                    "data-modal-hide": id,
                    id: `close-${id}`,
                }}
            />
        </div>
    );
}

export default TalentModalFooter;
