import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { IProductResponse } from "@/services/interfaces/product-interface";

const fetchProducts = async () => {
  const response = await axiosWithConfig.get<IProductResponse>("/product");
  return response.data.data;
};

export const useProducts = () => {
  return useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ["products"],
  });
};
