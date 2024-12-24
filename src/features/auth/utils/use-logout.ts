import { useMutation } from "@tanstack/react-query";
import { axiosWithConfig } from "../../../services/api/axios-with-config";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const logout = async () => {
  const response = await axiosWithConfig.post("/auth/logout");
  return response.data.message;
};

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    mutationKey: ["logout"],
    onSuccess: () => {
      toast({
        description: "Logout successful",
      });
      navigate("/login");
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
