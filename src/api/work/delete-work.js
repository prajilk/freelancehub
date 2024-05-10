import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleDeleteWork(workId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete(`/api/work/${workId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useDeleteWork(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleDeleteWork,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}