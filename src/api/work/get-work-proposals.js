import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

async function handleGetWorkProposals(workId) {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/api/proposal/${workId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export function useWorkProposals(workId) {
    return useQuery({
        queryKey: ["proposal", workId],
        queryFn: () => handleGetWorkProposals(workId),
        retry: false
    });
}