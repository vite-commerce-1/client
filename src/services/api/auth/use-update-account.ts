import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { IUserUpdateResponse } from "@/services/interfaces/user-interface";

export const updateAccountSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  image: z.instanceof(FileList).optional(),
});

const updateAccount = async (data: FormData) => {
  const response = await axiosWithConfig.put<IUserUpdateResponse>(
    `/user/update`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
};

export const useUpdateAccout = () => {
  return useMutation({
    mutationFn: (data: FormData) => updateAccount(data),
    onSuccess: () => {},
    onError: () => {},
  });
};
