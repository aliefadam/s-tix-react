import Notification from "./notification";

const sendRequest = async ({ url, method, data, onSuccess }) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        onSuccess(result);
    } catch (error) {
        Notification({
            title: "Error",
            text: error.message,
            icon: "error",
        });
    }
};

export default sendRequest;
