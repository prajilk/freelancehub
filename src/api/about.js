import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleAbout(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/api/user/about", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUpdateAbout(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleAbout,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}