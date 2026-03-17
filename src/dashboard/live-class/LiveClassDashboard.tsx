"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { liveClassService } from "@/services/liveClass.service";
import type { TCreateLiveClassPayload, TLiveClass } from "@/types/liveClass";

import LiveClassForm from "./LiveClassForm";
import LiveClassTable from "./LiveClassTable";

export default function LiveClassDashboard() {
  const [items, setItems] = useState<TLiveClass[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const res = await liveClassService.getAllLiveClasses();
      setItems(res?.data ?? []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load", {
        description: "Live classes load করা যায়নি",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (payload: TCreateLiveClassPayload) => {
    try {
      setIsSubmitting(true);

      await liveClassService.createLiveClass(payload);

      toast.success("Success", {
        description: "Live class created successfully",
      });

      await loadData();
    } catch (error) {
      console.error(error);
      toast.error("Create failed", {
        description: "Live class create করা যায়নি",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMakeActive = async (item: TLiveClass) => {
    try {
      await liveClassService.updateLiveClass(item.id, {
        isActive: true,
      });

      toast.success("Updated", {
        description: "Active live class updated successfully",
      });

      await loadData();
    } catch (error) {
      console.error(error);
      toast.error("Update failed", {
        description: "Active live class update করা যায়নি",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await liveClassService.deleteLiveClass(id);

      toast.success("Deleted", {
        description: "Live class deleted successfully",
      });

      await loadData();
    } catch (error) {
      console.error(error);
      toast.error("Delete failed", {
        description: "Live class delete করা যায়নি",
      });
    }
  };

  const activeItem = items.find((item) => item.isActive);

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Live Class Dashboard
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          এখান থেকে live class link add, active, delete এবং manage করতে পারবে।
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
        <LiveClassForm onSubmit={handleCreate} isSubmitting={isSubmitting} />

        <div className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Current Active Class</h2>

            {activeItem ? (
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-medium">Title:</span> {activeItem.title}
                </p>
                <p>
                  <span className="font-medium">Platform:</span>{" "}
                  {activeItem.platform}
                </p>
                <p className="break-all">
                  <span className="font-medium">Link:</span>{" "}
                  {activeItem.meetingLink}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  {activeItem.isCurrentlyLive
                    ? "Live now"
                    : "Active / Scheduled"}
                </p>
              </div>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                No active live class found.
              </p>
            )}
          </div>

          <LiveClassTable
            items={items}
            isLoading={isLoading}
            onMakeActive={handleMakeActive}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
