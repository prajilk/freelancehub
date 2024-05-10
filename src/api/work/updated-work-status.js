import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleUpdateWorkStatus(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.patch(`/api/work/status`, values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUpdateWorkStatus(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleUpdateWorkStatus,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}