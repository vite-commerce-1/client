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
import Cookies from "js-cookie";
import { buttonVariants } from "../atoms/button";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ className }: { className?: string }) => {
  const isLogin = Cookies.get("isLogin") === "true";
  return (
    <>
      {isLogin ? (
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(className, "")}>
            <Avatar>
              <AvatarImage src="https://github.com/ekmas.png" />
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
            <DropdownMenuItem>
              <ShoppingBasketIcon />
              Cart
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BoxesIcon />
              Order History
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOutIcon />
              Logout
            </DropdownMenuItem>
            <ModeToggle className="ml-2 mt-4" />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          to={"/login"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "justify-self-end w-fit"
          )}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default ProfileDropdown;
