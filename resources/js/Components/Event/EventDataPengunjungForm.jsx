import { formatMoney } from "@/utils/formatMoney";
import React from "react";
import InputGroup from "./Form/InputGroup";
import SelectBirthDate from "./Form/SelectBirthDate";
import SelectGender from "./Form/SelectGender";
import SelectIdentity from "./Form/SelectIdentity";
import EventTicketHeader from "./EventTicketHeader";
import EventCopyData from "./EventCopyData";

function EventDataPengunjungForm({
    tickets,
    samakanDataPembeli,
    data_pengunjung,
    handleChange,
    errors,
}) {
    return (
        <>
            {tickets.map((ticket, index) => (
                <div
                    key={index}
                    className="border border-teal-700 text-white rounded-md shadow-md overflow-hidden pengunjung"
                >
                    <div className="p-5 flex justify-between items-center bg-gradient-to-r from-teal-400 to-teal-500">
                        <span className="text-center block">
                            Detail Pengunjung {index + 1}
                        </span>
                        <EventCopyData
                            index={index}
                            ticketID={ticket.id}
                            samakanDataPembeli={samakanDataPembeli}
                        />
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                        <EventTicketHeader ticket={ticket} />
                        <InputGroup
                            id={`email-pengunjung-${index}`}
                            type={`email`}
                            name={`email`}
                            title={"Email"}
                            handleChange={handleChange}
                            value={data_pengunjung[index]?.email}
                            userType={"pengunjung"}
                            index={index}
                            ticketID={ticket.id}
                            error={errors[`data_pengunjung.${index}.email`]}
                        />
                        <InputGroup
                            id={`name-pengunjung-${index}`}
                            type={`text`}
                            name={`name`}
                            title={"Nama"}
                            userType={"pengunjung"}
                            handleChange={handleChange}
                            value={data_pengunjung[index]?.name}
                            index={index}
                            ticketID={ticket.id}
                            error={errors[`data_pengunjung.${index}.name`]}
                        />
                        <SelectBirthDate
                            date={data_pengunjung[index]?.date}
                            month={data_pengunjung[index]?.month}
                            year={data_pengunjung[index]?.year}
                            handleChange={handleChange}
                            index={index}
                            ticketID={ticket.id}
                            userType={"pengunjung"}
                            error={{
                                date: errors[`data_pengunjung.${index}.date`],
                                month: errors[`data_pengunjung.${index}.month`],
                                year: errors[`data_pengunjung.${index}.year`],
                            }}
                        />
                        <SelectGender
                            gender={data_pengunjung[index]?.[`gender`]}
                            handleChange={handleChange}
                            userType={"pengunjung"}
                            index={index}
                            ticketID={ticket.id}
                            data_pengunjung={data_pengunjung}
                            name={`gender-${index}`}
                            idMale={`gender-male-${index}`}
                            idFemale={`gender-female-${index}`}
                            error={errors[`data_pengunjung.${index}.gender`]}
                        />
                        <SelectIdentity
                            identity_type={
                                data_pengunjung[index]?.identity_type
                            }
                            identity_number={
                                data_pengunjung[index]?.identity_number
                            }
                            handleChange={handleChange}
                            userType={"pengunjung"}
                            index={index}
                            ticketID={ticket.id}
                            error={{
                                identity_type:
                                    errors[
                                        `data_pengunjung.${index}.identity_type`
                                    ],
                                identity_number:
                                    errors[
                                        `data_pengunjung.${index}.identity_number`
                                    ],
                            }}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default EventDataPengunjungForm;
