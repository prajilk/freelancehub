import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetJobs() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/job", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useJobs() {
    return useQuery({
        queryKey: ["jobs"],
        queryFn: handleGetJobs,
        retry: false
    });
}