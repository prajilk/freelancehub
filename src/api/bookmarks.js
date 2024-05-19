import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleGetBookmarks() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/bookmarks", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useBookmarks() {
    return useQuery({
        queryKey: ["bookmarks"],
        queryFn: handleGetBookmarks,
        retry: false
    });
}