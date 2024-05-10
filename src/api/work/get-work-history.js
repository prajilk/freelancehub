import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetWorkHistory() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/proposal`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useWorkHistory() {
    return useQuery({
        queryKey: ["proposal"],
        queryFn: handleGetWorkHistory,
        retry: false
    });
}