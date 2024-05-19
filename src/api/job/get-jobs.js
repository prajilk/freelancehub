import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetJobs({ pageParam, limit = 5 }) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/job", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            page: pageParam,
            limit
        }
    });
    return data;
}

export function useJobs(limit) {
    return useInfiniteQuery({
        queryKey: ["jobs"],
        queryFn: ({ pageParam = 1 }) => handleGetJobs({ pageParam, limit }),
        getNextPageParam: (_, pages) => pages.length + 1,
        retry: false
    });
}