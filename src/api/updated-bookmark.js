import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleUpdateBookmark(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/bookmarks", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUpdateBookmark(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleUpdateBookmark,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}