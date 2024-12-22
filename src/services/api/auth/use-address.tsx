import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";

const fetchUserAddress = async () => {
  const response = await axiosWithConfig.get("/address/userId");
  return response.data.data;
};

export const useAddress = () => {
  return useQuery({
    queryFn: fetchUserAddress,
    queryKey: ["address"],
  });
};
