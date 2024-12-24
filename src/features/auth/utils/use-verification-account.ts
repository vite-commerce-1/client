import { IVerificationAccountResponse } from "../../../services/interfaces/auth-interface";
import { z } from "zod";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const verificationSchema = z.object({
  otp: z.string().min(6, "OTP must be at least 6 characters long"),
});

const fetchVerificationAccount = async (
  data: z.infer<typeof verificationSchema>
) => {
  const response = await axiosWithConfig.post<IVerificationAccountResponse>(
    "/auth/verification-account",
    data
  );
  return response.data.message;
};

export const useVerificationAccount = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: fetchVerificationAccount,
    mutationKey: ["verification-account"],
    onSuccess: () => {
      toast({
        description: "Verification account success",
      });
      navigate("/");
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
