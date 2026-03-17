import AdminAccessGuard from "@/components/AdminAccessGuard";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AdminAccessGuard>{children}</AdminAccessGuard>
    </section>
  );
}
