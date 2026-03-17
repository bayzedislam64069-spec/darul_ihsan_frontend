import { Input } from "@/components/ui/input";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Search } from "lucide-react";

const NavbarPage = () => {
  return (
    <div className="border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <nav className="h-18">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <NavMenu />
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="h-10 w-[180px] rounded-full border-border/60 bg-background/70 pl-9 shadow-sm focus-visible:ring-emerald-500 lg:w-[220px]"
              />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
