import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleProfile(userId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/user/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            user: userId
        }
    });
    return data;
}

export function useProfile(userId) {
    return useQuery({
        queryKey: ["profile"],
        queryFn: () => handleProfile(userId),
        retry: false
    });
}