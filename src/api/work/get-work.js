import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetWork(workId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/work/${workId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useWork(workId) {
    return useQuery({
        queryKey: ["work", workId],
        queryFn: () => handleGetWork(workId),
        retry: false
    });
}