import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../../config/axios";

async function handleSearchJob(values) {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/api/job/search", values.filter, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            q: values.search || ""
        }
    });
    return data;
}

export const useSearchJobs = () => {
    return useMutation({
        mutationFn: handleSearchJob,
        onError: (error) => {
            toast.error(
                error.response.data.message || "Something went wrong!",
            );
        },
    })
}