import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleEditEducation(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/api/user/education", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

export function useEditEducation(onSuccess) {
    return useMutation({
        mutationFn: handleEditEducation,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
