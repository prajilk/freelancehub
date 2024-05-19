import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleProfile() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/user/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useProfile() {
    return useQuery({
        queryKey: ["profile"],
        queryFn: handleProfile,
        retry: false
    });
}