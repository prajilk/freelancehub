import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function handleGetChats() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`${import.meta.env.VITE_CHAT_SERVER_URL}/get-chat-list`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        withCredentials: true
    });
    return data;
}

export function useChats() {
    return useQuery({
        queryKey: ["chats"],
        queryFn: handleGetChats,
        retry: false
    });
}