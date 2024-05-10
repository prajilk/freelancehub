import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleDeleteJob(jobId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete(`/api/job/${jobId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useDeleteJob(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleDeleteJob,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}