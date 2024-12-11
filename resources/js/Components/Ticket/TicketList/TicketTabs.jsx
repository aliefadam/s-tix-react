import React from "react";

function TicketTabs({ dataTabsTarget }) {
    const { ticketCommings, ticketPasts } = dataTabsTarget;
    return (
        <div className="mb-4 mt-5 border-b border-gray-200 dark:border-gray-700">
            <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="default-styled-tab"
                data-tabs-toggle="#default-styled-tab-content"
                data-tabs-active-classes="text-teal-600 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-500 border-teal-600 dark:border-teal-500"
                data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                role="tablist"
            >
                <li className="me-2" role="presentation">
                    <button
                        className="flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg"
                        id={`${ticketCommings}-button`}
                        data-tabs-target={`#${ticketCommings}`}
                        type="button"
                        role="tab"
                        aria-controls={`${ticketCommings}`}
                        aria-selected="false"
                    >
                        Event Mendatang
                    </button>
                </li>
                <li className="me-2" role="presentation">
                    <button
                        className="flex justify-center items-center gap-2 p-4 border-b-2 w-full rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id={`#${ticketPasts}-button`}
                        data-tabs-target={`#${ticketPasts}`}
                        type="button"
                        role="tab"
                        aria-controls={`${ticketPasts}`}
                        aria-selected="false"
                    >
                        Event Berlalu
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default TicketTabs;
