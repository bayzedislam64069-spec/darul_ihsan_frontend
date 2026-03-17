export type TLivePlatform = "ZOOM" | "GOOGLE_MEET" | "YOUTUBE";

export type TLiveClass = {
  id: string;
  title: string;
  platform: TLivePlatform;
  meetingLink: string;
  isActive: boolean;
  startsAt: string | null;
  endsAt: string | null;
  note?: string | null;
  createdAt: string;
  updatedAt: string;
  isCurrentlyLive?: boolean;
};

export type TCreateLiveClassPayload = {
  title?: string;
  platform: TLivePlatform;
  meetingLink: string;
  isActive?: boolean;
  startsAt?: string;
  endsAt?: string;
  note?: string;
};
