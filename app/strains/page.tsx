"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { strains } from "@/lib/dispensary-data";
import leaf from "@/public/leaf.jpeg";

export default function StrainsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        Section 03 — Library
      </div>
      <h1 className="font-display font-black text-6xl md:text-8xl mt-3 leading-none">
        Strain
        <br />
        <span className="italic text-primary">intelligence.</span>
      </h1>
      <p className="mt-6 text-muted-foreground max-w-xl">
        Every strain profile is cross-referenced between the Leafly database and
        real shelf prices. Click a card to see full terpene breakdown and
        reviews.
      </p>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {strains.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-primary transition-colors"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={leaf}
                alt={`${s.name} strain`}
                fill
                className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-ink/80 backdrop-blur border border-border">
                {s.type}
              </div>
              <div className="absolute top-4 right-4 font-mono text-xs text-accent">
                ★ {s.rating}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl font-black">{s.name}</h3>
              <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase tracking-widest">
                <div className="border border-border rounded-lg p-3">
                  <div className="text-muted-foreground">THC</div>
                  <div className="text-primary text-xl font-bold mt-1">
                    {s.thc}
                  </div>
                </div>
                <div className="border border-border rounded-lg p-3">
                  <div className="text-muted-foreground">CBD</div>
                  <div className="text-accent text-xl font-bold mt-1">
                    {s.cbd}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {s.effects.map((e) => (
                  <span
                    key={e}
                    className="font-mono text-[10px] uppercase px-2 py-1 rounded-full bg-secondary"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-display text-xl font-bold">{s.price}</div>
                <button className="font-mono text-[10px] uppercase tracking-widest text-primary hover:underline">
                  Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
