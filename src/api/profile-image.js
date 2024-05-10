import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleUpdateProfileImage(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/api/user/image", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUpdateProfileImage(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleUpdateProfileImage,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}