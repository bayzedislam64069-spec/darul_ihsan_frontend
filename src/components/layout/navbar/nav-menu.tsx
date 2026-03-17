import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
  closeOnClick?: () => void;
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Live Class", href: "/liveclass" },
  { label: "Women’s Course", href: "/womenscourse" },
  { label: "About Us", href: "/aboutas" },
  { label: "Contact", href: "/contact" },
];

export const NavMenu = ({
  className,
  closeOnClick,
  ...props
}: NavMenuProps) => (
  <NavigationMenu className={cn("max-w-none", className)} {...props}>
    <NavigationMenuList className="gap-2 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      {menuItems.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              onClick={closeOnClick}
              className={cn(
                "group inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground/80 transition",
                "hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-400",
                "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:rounded-2xl",
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
