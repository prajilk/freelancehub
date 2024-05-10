import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleCreateJob(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/job", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useCreateJob(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleCreateJob,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}