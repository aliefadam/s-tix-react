import DataTable from "datatables.net-dt";

const initDataTable = () => {
    new DataTable("#dataTable", {
        info: true,
        pageLength: 10,
        lengthChange: true,
    });
};

export default initDataTable;
