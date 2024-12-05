import React from "react";
import TicketModalHeader from "./TicketModalHeader";
import TicketModalBody from "./TicketModalBody";
import TicketModalFooter from "./TicketModalFooter";

function TicketModal({
    id,
    name,
    data,
    setData,
    processing,
    errors,
    handleSubmit,
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
                    <TicketModalHeader name={name} id={id} />
                    <form onSubmit={handleSubmit} action="" method="POST">
                        <TicketModalBody
                            data={data}
                            setData={setData}
                            errors={errors}
                        />
                        <TicketModalFooter id={id} processing={processing} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TicketModal;
