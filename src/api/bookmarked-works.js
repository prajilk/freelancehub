import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleGetBookmarkedWorks() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/bookmarks/works", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useBookmarkedWorks() {
    return useQuery({
        queryKey: ["bookmarks", "works"],
        queryFn: handleGetBookmarkedWorks,
        retry: false
    });
}