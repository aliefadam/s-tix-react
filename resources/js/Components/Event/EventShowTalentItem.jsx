import React from "react";

function EventShowTalentItem({ i, talent, setTalent, handleDeleteTalent }) {
    return (
        <div
            key={i}
            className="border rounded-md px-5 py-3 relative overflow-hiddens"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        className="w-[50px] h-[50px] rounded-full object-cover"
                        src={talent.image}
                        alt=""
                    />
                    <span className="text-sm poppins-medium">
                        {talent.name}
                    </span>
                </div>
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => setTalent(talent.id)}
                        data-modal-target="edit-talent-modal"
                        data-modal-toggle="edit-talent-modal"
                        className="btn-edit-talent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white duration-200 bg-white rounded-md p-2"
                    >
                        <i
                            className="fa-regular fa-pen-to-square"
                            onClick={() => setTalent(talent.id)}
                        />
                    </button>
                    <button
                        onClick={(e) => handleDeleteTalent(e, talent.id)}
                        className="btn-delete-talent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 bg-white rounded-md p-2"
                    >
                        <i
                            className="fa-regular fa-trash"
                            onClick={(e) => handleDeleteTalent(e, talent.id)}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventShowTalentItem;
