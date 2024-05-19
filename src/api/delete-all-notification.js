import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleDeleteAllNotifications() {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete("/api/notifications/all", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

export function useDeleteAllNotifications(onSuccess) {
    return useMutation({
        mutationFn: handleDeleteAllNotifications,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
