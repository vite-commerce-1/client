// src/components/atoms/Logo.tsx
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  label?: string;
}

const Logo: React.FC<LogoProps> = ({ className, label = "Vite Commerce" }) => {
  return (
    <Link
      to="/"
      className={cn(
        className,
        "text-xl md:text-2xl tracking-widest font-semibold font-bebas whitespace-nowrap"
      )}
      aria-label="Homepage"
    >
      {label}
    </Link>
  );
};

export default Logo;
