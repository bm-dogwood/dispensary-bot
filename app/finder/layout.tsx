import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispensary Finder — DISPENSARY.BOT",
  description:
    "Search licensed dispensaries by zip code. Filter by recreational or medical, with live hours, ratings, and deal counts.",
  openGraph: {
    title: "Dispensary Finder — DISPENSARY.BOT",
    description: "Zip code search across 12,000+ licensed US dispensaries.",
  },
};

export default function FinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
