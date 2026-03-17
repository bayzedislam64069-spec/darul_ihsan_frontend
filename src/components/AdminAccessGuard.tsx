"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  children: React.ReactNode;
};

const ADMIN_PASSWORD_KEY = "admin_dashboard_password";
const ADMIN_ACCESS_KEY = "admin_dashboard_access_granted";

export default function AdminAccessGuard({ children }: Props) {
  const [savedPassword, setSavedPassword] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(ADMIN_PASSWORD_KEY) ?? "";
  });

  const [isAllowed, setIsAllowed] = useState(() => {
    if (typeof window === "undefined") return false;

    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) ?? "";
    const accessGranted = localStorage.getItem(ADMIN_ACCESS_KEY) === "true";

    return Boolean(storedPassword) && accessGranted;
  });

  const [inputPassword, setInputPassword] = useState("");
  const [setupPassword, setSetupPassword] = useState("");
  const [error, setError] = useState("");

  const isPasswordSet = Boolean(savedPassword);

  const handleSetPassword = () => {
    const trimmed = setupPassword.trim();

    if (!trimmed) {
      setError("Please set a password first.");
      return;
    }

    localStorage.setItem(ADMIN_PASSWORD_KEY, trimmed);
    localStorage.setItem(ADMIN_ACCESS_KEY, "true");

    setSavedPassword(trimmed);
    setIsAllowed(true);
    setSetupPassword("");
    setError("");
  };

  const handleUnlock = () => {
    const trimmed = inputPassword.trim();

    if (!trimmed) {
      setError("Please enter the password.");
      return;
    }

    if (trimmed !== savedPassword) {
      setError("Wrong password.");
      return;
    }

    localStorage.setItem(ADMIN_ACCESS_KEY, "true");
    setIsAllowed(true);
    setInputPassword("");
    setError("");
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_ACCESS_KEY);
    setIsAllowed(false);
  };

  if (isAllowed) {
    return (
      <div className="min-h-screen">
        <div className="flex justify-end border-b border-border/60 bg-background/80 px-4 py-3">
          <Button variant="outline" onClick={handleLogout}>
            Lock Dashboard
          </Button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">
          Admin Dashboard Access
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {isPasswordSet
            ? "Enter the admin password to continue."
            : "No password set yet. Set a password first."}
        </p>

        {!isPasswordSet ? (
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Set Password</label>
              <Input
                type="password"
                value={setupPassword}
                onChange={(e) => setSetupPassword(e.target.value)}
                placeholder="Enter a password"
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <Button className="w-full rounded-full" onClick={handleSetPassword}>
              Save Password
            </Button>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter admin password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUnlock();
                  }
                }}
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <Button className="w-full rounded-full" onClick={handleUnlock}>
              Unlock Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
