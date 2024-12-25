import { useQuery } from "@tanstack/react-query";
import { useAddress } from "./use-address";

export const useDefaultAddress = () => {
  const { data: address } = useAddress();
  return useQuery({
    queryKey: ["default-address"],
    queryFn: async () => {
      if (Array.isArray(address)) {
        return address.find((address) => address.defaultAddress);
      } else {
        return null;
      }
    },
  });
};
