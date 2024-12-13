import Swal from "sweetalert2";

const showConfirmation = ({
    title,
    icon = "warning",
    text,
    onConfirm,
    onCancel = () => {},
    confirmButtonText = "Ya, yakin!",
    cancelButtonText = "Batal",
    showDenyButton = false,
}) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        showDenyButton: showDenyButton,
        denyButtonText: "Batal",
        denyButtonColor: "#808080",
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        } else if (result.isDismissed) {
            onCancel();
        }
    });
};

export default showConfirmation;
