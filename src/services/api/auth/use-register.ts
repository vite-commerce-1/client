import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { IRegisterResponse } from "@/services/interfaces/auth-interface";

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const register = async (data: z.infer<typeof registerSchema>) => {
  const response = await axiosWithConfig.post<IRegisterResponse>(
    "/auth/register",
    data
  );
  return response.data.data;
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: register,
    mutationKey: ["register"],
    onSuccess: () => {
      Cookies.set("isLogin", "true", { expires: 1 / 24 });
      toast({
        description: "Registration successful",
      });
      setTimeout(() => navigate("/verification-account"), 2000);
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
