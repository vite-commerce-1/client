// src/components/ProtectedRoute.tsx
import Loader from "@/components/shared/loader";
import { useCurrentUser } from "@/features/auth/utils/use-current-user";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const { data: user, isLoading, error } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (error || !user) {
        toast({
          description: "Please login first to access this page",
          variant: "destructive",
        });
        navigate("/login", { replace: true });
      }
    }
  }, [isLoading, error, user, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
