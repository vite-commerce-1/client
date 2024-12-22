import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { IAddressResponse } from "@/services/interfaces/address-interface";

const fetchUserAddress = async () => {
  const response = await axiosWithConfig.get<IAddressResponse>(
    "/address/userId"
  );
  return response.data.data;
};

export const useAddress = () => {
  return useQuery({
    queryFn: fetchUserAddress,
    queryKey: ["address"],
  });
};
