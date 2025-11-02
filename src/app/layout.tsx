import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/query-provider";
// import { ThemeProvider } from "next-themes"; // testing dark-mode theme

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Tracking System",
  description: "Project Tracking System",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA meta tags (optional but recommended) */}
        <meta name="application-name" content="Project Tracking System" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
      </head>
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        {/* testing dark-mode theme */}
        {/* <ThemeProvider attribute="class" defaultTheme="system"> */}
        <QueryProvider>
          <Toaster />
          {children}
        </QueryProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
