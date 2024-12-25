import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { IAddressResponse } from "@/services/interfaces/address-interface";

export const useAddress = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosWithConfig.get<IAddressResponse>(
        "/address/userId"
      );
      return response.data.data;
    },
    queryKey: ["address"],
  });
};
