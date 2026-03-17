"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { TCreateLiveClassPayload, TLivePlatform } from "@/types/liveClass";

type Props = {
  onSubmit: (payload: TCreateLiveClassPayload) => Promise<void>;
  isSubmitting?: boolean;
};

const defaultForm: TCreateLiveClassPayload = {
  title: "",
  platform: "GOOGLE_MEET",
  meetingLink: "",
  isActive: true,
  startsAt: "",
  endsAt: "",
  note: "",
};

export default function LiveClassForm({ onSubmit, isSubmitting }: Props) {
  const [form, setForm] = useState<TCreateLiveClassPayload>(defaultForm);

  const handleChange = (
    field: keyof TCreateLiveClassPayload,
    value: string | boolean,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await onSubmit({
      ...form,
      title: form.title?.trim() || "Live Class",
      meetingLink: form.meetingLink.trim(),
      startsAt: form.startsAt || undefined,
      endsAt: form.endsAt || undefined,
      note: form.note?.trim() || undefined,
    });

    setForm(defaultForm);
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm">
      <h2 className="text-lg font-semibold">Add New Live Class</h2>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Live Quran Class"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Platform</label>
          <select
            value={form.platform}
            onChange={(e) =>
              handleChange("platform", e.target.value as TLivePlatform)
            }
            className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="GOOGLE_MEET">Google Meet</option>
            <option value="ZOOM">Zoom</option>
            <option value="YOUTUBE">YouTube</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Meeting Link</label>
          <Input
            value={form.meetingLink}
            onChange={(e) => handleChange("meetingLink", e.target.value)}
            placeholder="https://meet.google.com/..."
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Starts At</label>
            <Input
              type="datetime-local"
              value={form.startsAt}
              onChange={(e) => handleChange("startsAt", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Ends At</label>
            <Input
              type="datetime-local"
              value={form.endsAt}
              onChange={(e) => handleChange("endsAt", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Note</label>
          <textarea
            value={form.note}
            onChange={(e) => handleChange("note", e.target.value)}
            placeholder="Join 5 minutes before class starts"
            className="min-h-[110px] w-full rounded-2xl border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={!!form.isActive}
            onChange={(e) => handleChange("isActive", e.target.checked)}
          />
          Make this active
        </label>

        <Button
          type="submit"
          className="w-full rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Live Class"}
        </Button>
      </form>
    </div>
  );
}
