import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleSearchWork(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/work/search", values.filter, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            q: values.search || ""
        }
    });
    return data;
}

export const useSearchWorks = () => {
    return useMutation({
        mutationFn: handleSearchWork,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    })
}