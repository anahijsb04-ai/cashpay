import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable:
    "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono =
  Geist_Mono({
    variable:
      "--font-geist-mono",
    subsets: ["latin"],
  });

export const metadata: Metadata =
  {
    title: "CashPay",
    description:
      "Sistema financiero CashPay",
    applicationName:
      "CashPay",
    icons: {
      icon: "/favicon.ico",
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#F4F7FB] text-[#111827]">
        {children}
      </body>
    </html>
  );
}