import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleCreateWork(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/work", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useCreateWork(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleCreateWork,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}