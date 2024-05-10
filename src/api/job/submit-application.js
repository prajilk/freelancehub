import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleSubmitApplication(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/application", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useSubmitApplication(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleSubmitApplication,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}