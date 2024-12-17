import { useQuery } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { ICategoryResponse } from "@/services/interfaces/category-interface";

const fetchCategories = async () => {
  const response = await axiosWithConfig.get<ICategoryResponse>("/category");
  return response.data.data;
};

export const useCategories = () => {
  return useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ["categories"],
  });
};
