import { toast } from "@/hooks/use-toast";
import { axiosWithConfig } from "@/services/api/axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export const updatePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, "Old password must be at least 6 characters long"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password must match",
    path: ["confirmPassword"],
  });

const updatePassword = async (data: z.infer<typeof updatePasswordSchema>) => {
  const response = await axiosWithConfig.put("/auth/update-password", data);
  return response.data.message;
};

export const useUpdatePassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: z.infer<typeof updatePasswordSchema>) =>
      updatePassword(data),
    mutationKey: ["update-password"],
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Password updated successfully",
      });
      navigate(0);
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response) {
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
