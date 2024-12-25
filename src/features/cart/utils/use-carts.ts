import { axiosWithConfig } from "@/services/api/axios-with-config";
import { ICartResponse } from "@/services/interfaces/cart-interface";
import { useQuery } from "@tanstack/react-query";

export const useCarts = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const response = await axiosWithConfig.get<ICartResponse>("/cart");
      return response.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};
