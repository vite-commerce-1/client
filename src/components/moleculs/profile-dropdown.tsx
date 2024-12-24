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

const ProfileDropdown = ({ className }: { className?: string }) => {
  const { mutate: logout } = useLogout();
  const { data: carts } = useCarts();
  const { data: user, error } = useCurrentUser();

  return (
    <>
      {error === null ? (
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(className, "")}>
            <Avatar>
              <AvatarImage
                src={user?.image || "https://github.com/ekmas.png"}
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="pb-4 z-[51]">
            <DropdownMenuLabel className="font-bold">Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={"/profile"} className="flex w-full h-full gap-2">
                <User2Icon size={16} />
                User
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="relative">
              <Link
                to={"/profile/cart"}
                className="flex items-center gap-2 justify-start"
              >
                <div className="absolute top-1/2 -translate-y-1/2 left-20 w-5 h-5 text-primary-foreground rounded-full bg-primary aspect-square flex items-center justify-center">
                  <p className="text-[10px]">{carts && carts.items.length}</p>
                </div>
                <ShoppingBasketIcon />
                Cart
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BoxesIcon />
              Order History
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => logout()}
              className="cursor-pointer"
            >
              <LogOutIcon />
              Logout
            </DropdownMenuItem>
            <ModeToggle className="ml-2 mt-4" />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          to={"/login"}
          className={cn(buttonVariants({}), "w-fit justify-self-end")}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default ProfileDropdown;
