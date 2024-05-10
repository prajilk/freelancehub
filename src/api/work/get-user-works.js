import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetUserWorks(userId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/work/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useUserWorks(userId) {
    return useQuery({
        queryKey: ["works", userId],
        queryFn: () => handleGetUserWorks(userId),
        retry: false
    });
}