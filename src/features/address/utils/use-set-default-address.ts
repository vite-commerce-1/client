import { useMutation } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
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
      navigate(0);
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
