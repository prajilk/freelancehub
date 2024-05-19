import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleNewLanguage(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/user/language", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

export function useNewLanguage(onSuccess) {
    return useMutation({
        mutationFn: handleNewLanguage,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
