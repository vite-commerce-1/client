import Navbar from "@/components/organisme/navbar/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
