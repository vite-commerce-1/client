import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { useMutation } from "@tanstack/react-query";

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const register = async (data: z.infer<typeof registerSchema>) => {
  const response = await axiosWithConfig.post("/auth/register", data);
  return response.data.data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    mutationKey: ["register"],
  });
};
