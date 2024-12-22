import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { ICurrentUserResponse } from "@/services/interfaces/user-interface";

const fetchCurrentUser = async () => {
  const response = await axiosWithConfig.get<ICurrentUserResponse>(
    "/auth/current-user"
  );
  return response.data.data;
};

export const useCurrentUser = () => {
  return useQuery({
    queryFn: fetchCurrentUser,
    queryKey: ["current-user"],
  });
};
