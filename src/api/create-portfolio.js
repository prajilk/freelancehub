import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleCreatePortfolio(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/portfolio", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}

export function useCreatePortfolio(onSuccess) {
    return useMutation({
        mutationFn: handleCreatePortfolio,
        onSuccess,
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong!");
        },
    });
}
