import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleUpdateJobStatus(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.patch(`/api/job/status`, values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUpdateJobStatus(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleUpdateJobStatus,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}