import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "DISPENSARY.BOT — Nearest Dispensaries, Menus & State Laws",
    template: "%s — DISPENSARY.BOT",
  },
  description:
    "Find the nearest dispensary, browse live menus and prices, explore strains, and decode state cannabis laws. Built for rec and med users across the US.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://dispensary.bot"
  ),
  openGraph: {
    type: "website",
    siteName: "DISPENSARY.BOT",
    title: "DISPENSARY.BOT — Nearest Dispensaries, Menus & State Laws",
    description:
      "Find the nearest dispensary, browse live menus and prices, explore strains, and decode state cannabis laws.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DISPENSARY.BOT — Nearest Dispensaries, Menus & State Laws",
    description:
      "Find the nearest dispensary, browse live menus and prices, explore strains, and decode state cannabis laws.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen grain bg-background text-foreground antialiased">
        <SiteHeader />
        <main className="pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
