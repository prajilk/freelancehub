import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetUserJobs(userId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/job/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUserJobs(userId) {
    return useQuery({
        queryKey: ["jobs", userId],
        queryFn: () => handleGetUserJobs(userId),
        retry: false
    });
}