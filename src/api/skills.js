import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleSkills(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/api/user/skills", values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUpdatedSkills(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleSkills,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}