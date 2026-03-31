import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darul Ihsan",
  description: "Darul Ihsan Online Academy",

  icons: {
    icon: "/logo.jpeg", // favicon
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "Darul Ihsan",
    description: "Online Islamic Academy",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
      },
    ],
  },
};
