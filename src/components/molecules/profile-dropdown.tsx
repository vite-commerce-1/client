// src/components/molecules/ProfileDropdown.tsx
import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import {
  BoxesIcon,
  LogOutIcon,
  SettingsIcon,
  ShoppingBasketIcon,
  User2Icon,
} from "lucide-react";
import { ModeToggle } from "../atoms/mode-toggle";
import { Link } from "react-router-dom";
import { useLogout } from "@/features/auth/utils/use-logout";
import { useCurrentUser } from "@/features/auth/utils/use-current-user";
import { buttonVariants } from "../atoms/button";
import { useCarts } from "@/features/cart/utils/use-carts";

interface ProfileDropdownProps {
  className?: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ className }) => {
  const { mutate: logout, status: statusLoggingOut } = useLogout();
  const { data: carts } = useCarts();
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useCurrentUser();

  const isLoading = statusLoggingOut === "pending" || isUserLoading;

  const isAuthenticated = user && !isUserError;

  if (isUserLoading) {
    return <div>Loading...</div>; // Atau komponen loader khusus
  }

  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(className)}>
            <Avatar>
              <AvatarImage
                src={user?.image || "https://github.com/ekmas.png"}
                alt={user?.username || "User Avatar"}
              />
              <AvatarFallback>{user?.username?.[0] || "U"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="pb-4 z-[51]"
            aria-label="Profile Options"
          >
            <DropdownMenuLabel className="font-bold">Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile" className="flex w-full h-full gap-2">
                <User2Icon size={16} />
                User
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="relative">
              <Link
                to="/profile/cart"
                className="flex items-center gap-2 justify-start"
              >
                {carts && carts.items.length > 0 && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-20 w-5 h-5 text-primary-foreground rounded-full bg-primary aspect-square flex items-center justify-center">
                    <p className="text-[10px]">{carts.items.length}</p>
                  </div>
                )}
                <ShoppingBasketIcon size={16} />
                Cart
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/order-history" className="flex items-center gap-2">
                <BoxesIcon size={16} />
                Order History
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings" className="flex items-center gap-2">
                <SettingsIcon size={16} />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => logout()}
              className="flex items-center gap-2 cursor-pointer disabled:opacity-50"
              disabled={isLoading}
            >
              <LogOutIcon size={16} />
              Logout
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="px-4">
              <ModeToggle />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          to="/login"
          className={cn(buttonVariants({}), "w-fit justify-self-end")}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default memo(ProfileDropdown);
