// app/guide/layout.tsx
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First-Timer Guide — DISPENSARY.BOT",
  description:
    "A step-by-step walkthrough for first-time dispensary visitors. What to bring, what to ask, product formats, dosing, and state-specific notes.",
  openGraph: {
    title: "First-Timer Cannabis Guide — DISPENSARY.BOT",
    description: "Dispensary 101: bring this, ask this, start low.",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
