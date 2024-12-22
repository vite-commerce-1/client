import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export const verificationSchema = z.object({
  otp: z.string().min(6, "OTP must be at least 6 characters long"),
});

const fetchVerificationAccount = async (
  data: z.infer<typeof verificationSchema>
) => {
  const response = await axiosWithConfig.post(
    "/auth/verification-account",
    data
  );
  return response.data.data;
};

export const useVerificationAccount = () => {
  return {
    mutationFn: fetchVerificationAccount,
    mutationKey: ["verification-account"],
    onSuccess: () => {
      toast({
        description: "Verification account success",
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
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
  };
};
