import { toast } from "@/hooks/use-toast";
import { axiosWithConfig } from "@/services/api/axios-with-config";
import { ICartResponse } from "@/services/interfaces/cart-interface";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCarts = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      try {
        const response = await axiosWithConfig.get<ICartResponse>("/cart");
        return response.data.data;
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          toast({
            description: "Please login first to add product to cart",
            variant: "destructive",
          });
        } else if (error instanceof AxiosError && error.response) {
          toast({
            description: error.response.data.message,
            variant: "destructive",
          });
        } else {
          toast({
            description: "Something went wrong",
            variant: "destructive",
          });
        }
      }
    },
  });
};
