import { useMutation } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

const removeAddress = async (id: string) => {
  const response = await axiosWithConfig.delete(`/address/${id}`);
  return response.data.message;
};

export const useDeleteAddress = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => removeAddress(id),
    mutationKey: ["remove-address"],
    onSuccess: () => {
      toast({
        description: "Delete address success",
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
