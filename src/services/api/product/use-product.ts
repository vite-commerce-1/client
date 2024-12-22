import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { IProductResponse } from "@/services/interfaces/product-interface";

const fetchProduct = async (id: string) => {
  const response = await axiosWithConfig.get<IProductResponse>(
    `/product/${id}`
  );
  return response.data.data;
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};
