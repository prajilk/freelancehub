import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

async function handleClientProfile(clientId) {
    const { data } = await axios.get("/api/user/client-profile", {
        params: {
            user: clientId
        }
    });
    return data;
}

export function useClientProfile(clientId) {
    return useQuery({
        queryKey: ["client-profile"],
        queryFn: () => handleClientProfile(clientId),
        retry: false
    });
}