import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleDeleteNotification(notificationId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete("/api/notifications", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            notificationId
        }
    });
    return data;
}

export function useDeleteNotification(onSuccess) {
    return useMutation({
        mutationFn: handleDeleteNotification,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
