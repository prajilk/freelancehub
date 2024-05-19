import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleDeleteEducation(educationId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete(`/api/user/education/${educationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useDeleteEducation(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleDeleteEducation,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}