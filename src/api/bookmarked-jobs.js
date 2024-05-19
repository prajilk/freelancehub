import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleGetBookmarkedJobs() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/bookmarks/jobs", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useBookmarkedJobs() {
    return useQuery({
        queryKey: ["bookmarks", "jobs"],
        queryFn: handleGetBookmarkedJobs,
        retry: false
    });
}