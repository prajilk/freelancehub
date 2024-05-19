import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleReadNotification(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.patch("/api/notifications/status", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export function useReadNotification(onSuccess) {
    return useMutation({
        mutationFn: handleReadNotification,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
