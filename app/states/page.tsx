"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { states } from "@/lib/dispensary-data";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-3xl font-black mt-2 text-primary">
        {value}
      </div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-border last:border-0">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

export default function StatesPage() {
  const [selected, setSelected] = useState(states[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        Section 04 — Compliance
      </div>
      <h1 className="font-display font-black text-6xl md:text-8xl mt-3 leading-none">
        The <span className="italic text-primary">law,</span>
        <br />
        decoded.
      </h1>
      <p className="mt-6 text-muted-foreground max-w-xl">
        Recreational or medical, possession caps, taxation, and minimum age —
        broken down per state using OpenStates API and verified against the
        state&apos;s cannabis control board.
      </p>

      <div className="mt-14 grid lg:grid-cols-[1fr_1.5fr] gap-6">
        {/* STATE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 self-start">
          {states.map((s) => (
            <button
              key={s.code}
              onClick={() => setSelected(s)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selected.code === s.code
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card border-border hover:border-primary"
              }`}
            >
              <div className="font-display text-3xl font-black leading-none">
                {s.code}
              </div>
              <div
                className={`mt-2 text-[10px] font-mono uppercase tracking-widest ${
                  selected.code === s.code
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {s.status}
              </div>
            </button>
          ))}
        </div>

        {/* DETAIL */}
        <motion.div
          key={selected.code}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-border bg-card p-10 shadow-card"
        >
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="font-display font-black text-6xl">
              {selected.name}
            </h2>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary px-3 py-1 rounded-full border border-primary">
              {selected.status}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            <Stat label="Legal Since" value={String(selected.since)} />
            <Stat label="Minimum Age" value={`${selected.age}+`} />
            <Stat label="Possession Limit" value={selected.possession} />
            <Stat label="Effective Tax" value={selected.tax} />
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <Row label="ID required">
              Government-issued photo ID verifying age.
            </Row>
            <Row label="Reciprocity">
              {selected.status.includes("Med")
                ? "Most states accept out-of-state medical cards — check locally."
                : "No reciprocity — state residency not required but local laws apply."}
            </Row>
            <Row label="Public use">
              Prohibited in all 50 states. Consumption lounges exist in select
              cities.
            </Row>
            <Row label="Driving">
              Impaired driving is a criminal offense. Do not transport opened
              product.
            </Row>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
