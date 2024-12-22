import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";

const fetchCurrentUser = async () => {
  const response = await axiosWithConfig.get("/auth/current-user");
  return response.data.data;
};

export const useCurrentUser = () => {
  return useQuery({
    queryFn: fetchCurrentUser,
    queryKey: ["current-user"],
  });
};
