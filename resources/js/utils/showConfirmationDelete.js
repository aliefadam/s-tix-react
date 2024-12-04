import Swal from "sweetalert2";

const showConfirmationDelete = ({ title, text, onConfirm }) => {
    return Swal.fire({
        title: title,
        text: "Aksi ini tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, yakin!",
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
};

export default showConfirmationDelete;
