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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
