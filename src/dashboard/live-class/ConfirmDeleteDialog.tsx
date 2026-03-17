"use client";

import type { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  onConfirm: () => void;
  children: ReactNode;
};

export default function ConfirmDeleteDialog({ onConfirm, children }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Live Class?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this live class? This action cannot
            be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
