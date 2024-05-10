import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetJob(jobId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/job/${jobId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useJob(jobId) {
    return useQuery({
        queryKey: ["job", jobId],
        queryFn: () => handleGetJob(jobId),
        retry: false
    });
}