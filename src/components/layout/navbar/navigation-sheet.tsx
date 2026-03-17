"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-2xl border-border/60 bg-background/80 shadow-sm backdrop-blur hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] border-l border-border/60 bg-background/95 px-6 py-5 backdrop-blur-xl"
      >
        <div className="mb-6">
          <Logo />
        </div>

        <div className="rounded-3xl border border-border/60 bg-background/80 p-4 shadow-sm">
          <NavMenu
            orientation="vertical"
            className="[&>div]:h-full"
            closeOnClick={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
