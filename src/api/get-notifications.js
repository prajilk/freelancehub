import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleGetNotifications() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/notifications", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        withCredentials: true
    });
    return data;
}

export function useNotifications() {
    return useQuery({
        queryKey: ["notifications"],
        queryFn: handleGetNotifications,
        retry: false
    });
}