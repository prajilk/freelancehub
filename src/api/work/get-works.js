import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetWorks({ pageParam, limit = 5 }) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/work", {
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

export function useWorks(limit) {
    return useInfiniteQuery({
        queryKey: ["works"],
        queryFn: ({ pageParam = 1 }) => handleGetWorks({ pageParam, limit }),
        getNextPageParam: (_, pages) => pages.length + 1,
        retry: false
    });
}