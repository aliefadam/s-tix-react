import InputGroup from "@/Components/Profile/InputGroup";
import React from "react";

function TicketModalBody({ data, setData, errors }) {
    return (
        <div className="p-4 md:p-5">
            <InputGroup
                id={"name"}
                label={"Nama Tiket"}
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                type={"text"}
                error={errors.name}
                placeholder={"Presale 1"}
            />
            <InputGroup
                id={"price"}
                label={"Harga"}
                value={data.price}
                onChange={(e) => setData("price", e.target.value)}
                type={"number"}
                error={errors.price}
            />
            <div className="-mb-5">
                <InputGroup
                    id={"target"}
                    label={"Target Penjualan"}
                    value={data.target}
                    onChange={(e) => setData("target", e.target.value)}
                    type={"number"}
                    error={errors.target}
                />
            </div>
        </div>
    );
}

export default TicketModalBody;
