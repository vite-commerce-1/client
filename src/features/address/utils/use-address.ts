import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { IAddressResponse } from "@/services/interfaces/address-interface";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const useAddress = () => {
  const navigate = useNavigate();
  return useQuery({
    queryFn: async () => {
      try {
        const response = await axiosWithConfig.get<IAddressResponse>(
          "/address/userId"
        );
        return response.data.data;
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          alert("Unauthorized");
          navigate("/login");
        } else if (error instanceof AxiosError && error.response) {
          toast({
            description: error.response.data.message,
            variant: "destructive",
          });
        }
      }
    },
    queryKey: ["address"],
  });
};
