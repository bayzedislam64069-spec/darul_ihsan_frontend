"use client";

import { Button } from "@/components/ui/button";
import type { TLiveClass } from "@/types/liveClass";
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
  items: TLiveClass[];
  isLoading?: boolean;
  onMakeActive: (item: TLiveClass) => void;
  onDelete: (id: string) => void;
};

const formatDate = (value?: string | null) => {
  if (!value) return "N/A";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "N/A";

  return new Intl.DateTimeFormat("en-BD", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

export default function LiveClassTable({
  items,
  isLoading,
  onMakeActive,
  onDelete,
}: Props) {
  return (
    <div className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">All Live Classes</h2>
        <span className="text-sm text-muted-foreground">
          Total: {items.length}
        </span>
      </div>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-muted-foreground">No live classes found.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-border/60 bg-background p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold">{item.title}</h3>

                    {item.isActive ? (
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        Active
                      </span>
                    ) : null}

                    {item.isCurrentlyLive ? (
                      <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-600 dark:text-red-400">
                        Live Now
                      </span>
                    ) : null}
                  </div>

                  <p className="text-sm">
                    <span className="font-medium">Platform:</span>{" "}
                    {item.platform}
                  </p>

                  <p className="break-all text-sm text-muted-foreground">
                    {item.meetingLink}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Starts:</span>{" "}
                    {formatDate(item.startsAt)}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Ends:</span>{" "}
                    {formatDate(item.endsAt)}
                  </p>

                  {item.note ? (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Note:</span>{" "}
                      {item.note}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-2">
                  {!item.isActive ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => onMakeActive(item)}
                    >
                      Make Active
                    </Button>
                  ) : null}

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" variant="destructive">
                        Delete
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent className="rounded-2xl">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Live Class?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this live class? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-xl">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => onDelete(item.id)}
                          className="rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
