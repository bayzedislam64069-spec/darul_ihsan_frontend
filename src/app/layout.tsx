import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata (Global SEO + Logo)
export const metadata: Metadata = {
  title: {
    default: "Darul Ihsan",
    template: "%s | Darul Ihsan",
  },
  description: "Darul Ihsan Online Academy",

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "Darul Ihsan",
    description: "Darul Ihsan Online Academy",
    url: "https://darulihsan.site",
    siteName: "Darul Ihsan",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
      },
    ],
    type: "website",
  },

  metadataBase: new URL("https://darulihsan.site"), // পরে change করবে
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
