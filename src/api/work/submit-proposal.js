import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleSubmitProposal(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/proposal", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useSubmitProposal(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleSubmitProposal,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}