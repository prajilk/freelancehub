import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "../config/axios";

async function handleProfile(values) {
  const token = localStorage.getItem("token");
  const { data } = await axios.patch("/api/user/profile", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export function useUpdateProfile(onSuccess) {
  return useMutation({
    mutationFn: handleProfile,
    onSuccess,
    onError: (error) => {
      toast.error(error.response.data.message || "Something went wrong!");
    },
  });
}
