import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleCreateEducation(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/user/education", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

export function useCreateEducation(onSuccess) {
    return useMutation({
        mutationFn: handleCreateEducation,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
