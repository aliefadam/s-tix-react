import Swal from "sweetalert2";

const showLoading = () => {
    Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });
};

export default showLoading;
