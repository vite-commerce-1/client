import { useMutation } from "@tanstack/react-query";
import { axiosWithConfig } from "../axios-with-config";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "@/store/slices/auth-slicer";
import { AxiosError } from "axios";

const logout = async () => {
  const response = await axiosWithConfig.post("/auth/logout");
  return response.data.message;
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    mutationKey: ["logout"],
    onSuccess: () => {
      toast({
        description: "Logout successful",
      });
      dispatch(logoutAction());
      setTimeout(() => {
        navigate("/login");
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
