import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strain Library — DISPENSARY.BOT",
  description:
    "Detailed strain profiles with THC/CBD levels, terpenes, effects, and pricing. Indica, sativa, and hybrid. Sourced from the Leafly database.",
  openGraph: {
    title: "Strain Library — DISPENSARY.BOT",
    description: "2,400+ strains indexed: THC, CBD, effects, and prices.",
  },
};

export default function StrainsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
