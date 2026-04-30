"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { menu } from "@/lib/dispensary-data";

type Category =
  | "All"
  | "Flower"
  | "Concentrate"
  | "Vape"
  | "Edible"
  | "Pre-roll"
  | "Tincture";

const categories: Category[] = [
  "All",
  "Flower",
  "Concentrate",
  "Vape",
  "Edible",
  "Pre-roll",
  "Tincture",
];

function StockPill({ stock }: { stock: string }) {
  const color =
    stock === "In"
      ? "text-primary"
      : stock === "Low"
      ? "text-yellow-400"
      : "text-red-500";

  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-widest ${color}`}
    >
      ● {stock === "In" ? "In stock" : stock === "Low" ? "Low stock" : "Out"}
    </span>
  );
}

export default function MenuPage() {
  const [cat, setCat] = useState<Category>("All");
  const items = cat === "All" ? menu : menu.filter((m) => m.category === cat);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Section 02 — Inventory
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl mt-3 leading-none">
            Live menu,
            <br />
            <span className="text-stroke">live prices.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Prices refresh every 15 minutes from Dutchie and Weedmaps POS feeds.
            Stock indicators reflect the shelf in real time.
          </p>
        </div>

        <div className="hidden lg:block w-64 aspect-square rounded-3xl overflow-hidden border border-border">
          <Image
            src="/products.jpeg"
            alt="Flat lay of cannabis products"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`font-mono text-xs uppercase tracking-widest whitespace-nowrap px-5 py-3 rounded-full border transition-colors ${
              cat === c
                ? "bg-primary text-primary-foreground border-primary shadow-glow"
                : "border-border text-muted-foreground hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-8 rounded-3xl border border-border overflow-hidden">
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_120px] gap-4 px-6 py-4 bg-secondary/40 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>Product</div>
          <div>THC</div>
          <div>Size</div>
          <div>Brand</div>
          <div className="text-right">Price</div>
        </div>

        <div className="divide-y divide-border">
          {items.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="grid md:grid-cols-[2fr_1fr_1fr_1fr_120px] gap-4 px-6 py-5 items-center bg-card hover:bg-secondary/30 transition-colors"
            >
              <div>
                <div className="font-display text-lg font-semibold">
                  {m.name}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-secondary">
                    {m.category}
                  </span>
                  <StockPill stock={m.stock} />
                </div>
              </div>
              <div className="font-mono text-primary">{m.thc}</div>
              <div className="font-mono text-muted-foreground">{m.size}</div>
              <div className="text-sm">{m.vendor}</div>
              <div className="md:text-right">
                <div className="font-display text-2xl font-black">
                  ${m.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        ◆ Prices shown pre-tax · Taxes vary by state — see /states for full
        breakdown
      </div>
    </div>
  );
}
