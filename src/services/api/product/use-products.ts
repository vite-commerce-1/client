import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { IProductResponse } from "@/services/interfaces/product-interface";

interface IProps {
  [key: string]: string | number;
}

const fetchProducts = async (params?: IProps) => {
  const response = await axiosWithConfig.get<IProductResponse>("/product", {
    params,
  });
  return {
    products: response.data.data,
    pagination: response.data.pagination,
  };
};

export const useProducts = (params?: IProps) => {
  return useQuery({
    queryFn: () => fetchProducts(params),
    queryKey: ["products", params],
  });
};
