import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AMBASSADOR_URL } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const TITLE = "Ambassador — AI meeting proxy by Npire";
const DESCRIPTION =
  "An AI meeting proxy that joins your calls, listens in real time, and speaks in a synthesized voice — while you direct every response from your phone.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: AMBASSADOR_URL,
    siteName: "Ambassador · by Npire",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  metadataBase: new URL(AMBASSADOR_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
