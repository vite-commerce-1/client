// src/components/molecules/DesktopNavigation.tsx
import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/atoms/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  className?: string;
}

const DesktopNavigation: FC<DesktopNavigationProps> = ({ className }) => {
  return (
    <NavigationMenu
      className={cn(
        "bg-secondary border-b-2 border-border fixed top-0 z-50 w-full left-0 right-0",
        className
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/"
            className={navigationMenuTriggerStyle()}
            aria-label="Home"
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/our-stuff"
            className={navigationMenuTriggerStyle()}
            aria-label="Our Stuff"
          >
            Our Stuff
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default React.memo(DesktopNavigation);
