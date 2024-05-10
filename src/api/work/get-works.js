import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetWorks() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/work", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useWorks() {
    return useQuery({
        queryKey: ["works"],
        queryFn: handleGetWorks,
        retry: false
    });
}