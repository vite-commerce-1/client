import { toast } from "@/hooks/use-toast";
import { axiosWithConfig } from "@/services/api/axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const removeCartItem = async (productId: string) => {
  const response = await axiosWithConfig.delete(`/cart/item/${productId}`);
  return response.data.message;
};

export const useRemoveCartItem = () => {
  return useMutation({
    mutationKey: ["remove-cart-item"],
    mutationFn: (productId: string) => removeCartItem(productId),
    onSuccess: () => {
      toast({
        description: "Item removed from cart",
      });
    },
    onError: (error) => {
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
    },
  });
};
