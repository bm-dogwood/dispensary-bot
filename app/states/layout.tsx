import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "State Law Matrix — DISPENSARY.BOT",
  description:
    "Cannabis legality, possession limits, tax rates, and ID requirements for every US state. Sourced from OpenStates and state registries.",
  openGraph: {
    title: "State Cannabis Laws — DISPENSARY.BOT",
    description: "Full 50-state legal framework: rec, med, possession, tax.",
  },
};

export default function StatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
