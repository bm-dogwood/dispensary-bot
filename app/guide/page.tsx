// app/guide/page.tsx
"use client";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
// We'll create this component

const steps = [
  {
    n: "01",
    title: "Bring a valid ID",
    body: "A government-issued photo ID showing you are 21+ (or 18+ with a medical card in select states). Passports and out-of-state licenses are accepted in most markets.",
  },
  {
    n: "02",
    title: "Bring cash",
    body: "Most dispensaries are cash-only or use cashless ATMs due to federal banking restrictions. ATMs on-site typically charge a $3–5 fee.",
  },
  {
    n: "03",
    title: "Start with a budtender",
    body: "Describe your goal — relax, sleep, focus, social — rather than asking for a specific product. Budtenders steer first-timers toward gentle starting doses.",
  },
  {
    n: "04",
    title: "Start low, go slow",
    body: "For edibles, 2.5–5mg THC is a reasonable first dose. Wait 90 minutes before redosing. Inhaled flower hits faster but wears off quicker.",
  },
  {
    n: "05",
    title: "Understand the formats",
    body: "Flower is classic smoked cannabis. Pre-rolls are ready-to-smoke. Vapes are discreet. Edibles are slow and intense. Tinctures are precise and sublingual.",
  },
  {
    n: "06",
    title: "Know what you can legally carry",
    body: "Possession limits vary by state and between rec and med. Check our /states matrix before buying — some states cap flower, concentrate, and edibles separately.",
  },
];

const formats = [
  {
    name: "Flower",
    onset: "Immediate",
    duration: "1–3 hr",
    start: "1 small puff",
  },
  {
    name: "Pre-roll",
    onset: "Immediate",
    duration: "1–3 hr",
    start: "2 puffs",
  },
  {
    name: "Vape Cart",
    onset: "Immediate",
    duration: "1–2 hr",
    start: "1 short pull",
  },
  {
    name: "Edible",
    onset: "45–120 min",
    duration: "4–8 hr",
    start: "2.5–5mg THC",
  },
  {
    name: "Tincture",
    onset: "15–45 min",
    duration: "2–5 hr",
    start: "1 dropper (5mg)",
  },
  {
    name: "Concentrate",
    onset: "Immediate",
    duration: "1–3 hr",
    start: "Rice-grain dab",
  },
];

export default function Guide() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        Section 05 — Orientation
      </div>
      <h1 className="font-display font-black text-6xl md:text-8xl mt-3 leading-none">
        First
        <br />
        <span className="italic text-primary">visit?</span> Read this.
      </h1>
      <p className="mt-6 text-muted-foreground max-w-xl">
        Walking into a dispensary for the first time can feel confusing. Here's
        the full pre-visit briefing — no assumptions, no preaching.
      </p>

      {/* STEPS */}
      <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card p-8 md:p-10"
          >
            <div className="font-display text-6xl font-black text-primary/30">
              {s.n}
            </div>
            <h3 className="font-display text-2xl font-bold mt-3">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.body}</p>
          </motion.div>
        ))}
      </div>

      {/* FORMAT TABLE */}
      <div className="mt-24">
        <h2 className="font-display font-black text-4xl md:text-6xl">
          Product formats, by the numbers.
        </h2>
        <div className="mt-8 rounded-3xl border border-border overflow-hidden">
          <div className="hidden md:grid grid-cols-4 px-6 py-4 bg-secondary/40 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div>Format</div>
            <div>Onset</div>
            <div>Duration</div>
            <div>First-time dose</div>
          </div>
          <div className="divide-y divide-border">
            {formats.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6 py-5 bg-card"
              >
                <div className="font-display text-xl font-bold">{f.name}</div>
                <div className="font-mono text-sm text-primary">{f.onset}</div>
                <div className="font-mono text-sm text-muted-foreground">
                  {f.duration}
                </div>
                <div className="font-mono text-sm">{f.start}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 rounded-3xl border border-border bg-card p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Ready
          </div>
          <h3 className="font-display text-4xl md:text-5xl font-black mt-3">
            Let's find your first shop.
          </h3>
          <p className="mt-3 text-muted-foreground max-w-md">
            Filter by beginner-friendly dispensaries with educational budtenders
            and gentle pricing.
          </p>
        </div>
        <Link
          href="/finder"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest shadow-glow"
        >
          Open the finder <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
