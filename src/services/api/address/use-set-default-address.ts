import { useMutation } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

const setDefaultAddress = async (id: string) => {
  const response = await axiosWithConfig.put(`address/setDefault/${id}`);
  return response.data.message;
};

export const useSetDefaultAddress = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => setDefaultAddress(id),
    mutationKey: ["set-default-address"],
    onSuccess: () => {
      toast({
        description: "Set default address success",
      });
      setTimeout(() => {
        navigate(0);
      }, 2000);
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
