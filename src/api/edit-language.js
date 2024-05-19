import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleEditLanguage(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/api/user/language", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

export function useEditLanguage(onSuccess) {
    return useMutation({
        mutationFn: handleEditLanguage,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
