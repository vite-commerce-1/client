import { z } from "zod";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { IUserUpdateResponse } from "@/services/interfaces/user-interface";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: FormData) => updateAccount(data),
    onSuccess: () => {
      toast({
        description: "Update account success",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        alert("Unauthorized");
        navigate("/login");
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
