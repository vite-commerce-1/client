import { toast } from "@/hooks/use-toast";
import { axiosWithConfig } from "@/services/api/axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const removeCart = async () => {
  const response = await axiosWithConfig.delete("/cart");
  return response.data.message;
};

export const useRemoveCart = () => {
  return useMutation({
    mutationFn: () => removeCart(),
    onSuccess: () => {
      toast({
        description: "Cart removed successfully",
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
