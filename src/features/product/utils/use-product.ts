import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";

const fetchProduct = async (id: string) => {
  const response = await axiosWithConfig.get(`/product/${id}`);
  return response.data.data;
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    staleTime: 60000,
  });
};
