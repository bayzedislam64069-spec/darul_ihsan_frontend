import Footer from "@/components/layout/Footer";
import NavbarPage from "@/components/layout/navbar/navbar";
import TopNavber from "@/components/layout/navbar/TopNavber";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavber />
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <NavbarPage />
      </div>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
