import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Menus & Prices — DISPENSARY.BOT",
  description:
    "Real-time dispensary menus with pricing, THC percentages, brands, and stock levels pulled from Dutchie and Weedmaps.",
  openGraph: {
    title: "Live Dispensary Menus — DISPENSARY.BOT",
    description: "Browse actual shelf pricing from dispensaries across the US.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
