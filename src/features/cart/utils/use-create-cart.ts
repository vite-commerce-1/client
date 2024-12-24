import { toast } from "@/hooks/use-toast";
import { axiosWithConfig } from "@/services/api/axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export const createCartSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
});

const createCart = async (data: z.infer<typeof createCartSchema>) => {
  const response = await axiosWithConfig.post("/cart", data);
  return response.data;
};

export const useCreateCart = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: z.infer<typeof createCartSchema>) => createCart(data),
    mutationKey: ["create-cart"],
    onSuccess: () => {
      toast({
        description: "Product added to cart",
      });
      navigate(0);
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
