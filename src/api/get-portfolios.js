import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handlePortfolios() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("/api/portfolio", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function usePortfolios() {
    return useQuery({
        queryKey: ["portfolio"],
        queryFn: handlePortfolios,
        retry: false
    });
}