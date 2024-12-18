import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const login = async (data: z.infer<typeof loginSchema>) => {
  const response = await axiosWithConfig.post("/auth/login", data);
  return response.data.data;
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      localStorage.setItem("jwt", data.jwt);
      navigate("/");
      toast({
        description: "Login successful",
      });
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
