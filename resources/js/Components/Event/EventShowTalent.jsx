import React from "react";
import EventShowTalentItem from "./EventShowTalentItem";

function EventShowTalent({ talents, setTalent, handleDeleteTalent }) {
    return (
        <div className="p-5 bg-white shadow-md rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-lg poppins-semibold">Talents</h1>
                <button
                    data-modal-target="add-talent-modal"
                    data-modal-toggle="add-talent-modal"
                    className="bg-teal-700 shadow-sm text-white size-10 rounded-full focus:ring-4 focus:ring-teal-300 hover:bg-teal-800 duration-200"
                >
                    <i className="fa-solid fa-plus" />
                </button>
            </div>
            <div className="mt-5 flex flex-col gap-3">
                {talents.map((talent, i) => (
                    <EventShowTalentItem
                        key={i}
                        i={i}
                        talent={talent}
                        setTalent={setTalent}
                        handleDeleteTalent={handleDeleteTalent}
                    />
                ))}
            </div>
        </div>
    );
}

export default EventShowTalent;
