import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetJobApplications(jobId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/application/${jobId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useJobApplications(jobId) {
    return useQuery({
        queryKey: ["application", jobId],
        queryFn: () => handleGetJobApplications(jobId),
        retry: false
    });
}