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
import { BoxesIcon, SettingsIcon, ShoppingBasketIcon, User2Icon } from "lucide-react";

const ProfileDropdown = ({ className }: { className?: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(className, "")}>
        <Avatar>
          <AvatarImage src="https://github.com/ekmas.png" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-bold">Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User2Icon />
          User
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
