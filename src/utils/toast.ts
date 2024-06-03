import { toast } from "react-toastify";

export const notify = (content: String, type: ("success" | "error" | "info" | "warning" | undefined) = "success") =>
    toast(content, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: type,
    });