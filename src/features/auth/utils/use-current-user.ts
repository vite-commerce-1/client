import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { ICurrentUserResponse } from "@/services/interfaces/user-interface";
import { AxiosError } from "axios";

export const useCurrentUser = () => {
  return useQuery({
    queryFn: async () => {
      try {
        const response = await axiosWithConfig.get<ICurrentUserResponse>(
          "/auth/current-user"
        );
        return response.data.data;
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          console.error("Unauthorized, redirecting to login...");
        } else if (error instanceof AxiosError && error.response) {
          console.error("Error fetching current user:", error.response.data);
        }
      }
    },
    queryKey: ["current-user"],
  });
};
