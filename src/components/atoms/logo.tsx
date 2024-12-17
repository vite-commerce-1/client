import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
}

const Logo = ({ className }: IProps) => {
  return (
    <Link
      to={"/"}
      className={cn(
        className,
        "text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap"
      )}
    >
      Vite Commerce
    </Link>
  );
};

export default Logo;
