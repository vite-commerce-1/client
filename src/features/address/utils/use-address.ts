import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { IAddressResponse } from "@/services/interfaces/address-interface";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export const useAddress = () => {
  return useQuery({
    queryFn: async () => {
      try {
        const response = await axiosWithConfig.get<IAddressResponse>(
          "/address/userId"
        );
        return response.data.data;
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          toast({
            description: "You don't have any address Please add address before checkout",
            variant: "destructive",
          });
        }
      }
    },
    queryKey: ["address"],
  });
};
