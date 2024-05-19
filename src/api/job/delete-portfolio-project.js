import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleDeletePortfolioProject(projectId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete(`/api/portfolio/${projectId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useDeletePortfolioProject(
    onSuccess,
) {
    return useMutation({
        mutationFn: handleDeletePortfolioProject,
        onSuccess,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    });
}