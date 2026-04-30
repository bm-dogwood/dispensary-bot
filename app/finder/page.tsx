"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Tag, Filter } from "lucide-react";
import { dispensaries } from "@/lib/dispensary-data";

type Filter = "all" | "rec" | "med";

export default function Finder() {
  const [zip, setZip] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return dispensaries.filter((d) => {
      const matchZip = !zip || d.zip.startsWith(zip);
      const matchQuery =
        !query ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.city.toLowerCase().includes(query.toLowerCase());
      const matchFilter =
        filter === "all" ||
        (filter === "rec" && d.type.includes("Rec")) ||
        (filter === "med" && d.type.includes("Med"));
      return matchZip && matchQuery && matchFilter;
    });
  }, [zip, filter, query]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        Section 01 — Locator
      </div>
      <h1 className="font-display font-black text-6xl md:text-8xl mt-3 leading-none">
        Nearest
        <br />
        <span className="italic text-primary">shop finder.</span>
      </h1>
      <p className="mt-6 text-muted-foreground max-w-xl">
        Enter a zip code or search by city. We cross-reference Weedmaps, Leafly,
        and state license databases to only show verified, currently-open
        dispensaries.
      </p>

      {/* SEARCH BAR */}
      <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
        <div className="grid md:grid-cols-[200px_1fr_auto] gap-4">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Zip code
            </label>
            <input
              value={zip}
              onChange={(e) =>
                setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
              }
              placeholder="80202"
              className="mt-2 w-full bg-input border border-border rounded-xl px-4 py-3 font-mono text-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Name / city
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Denver, Green Harbor…"
              className="mt-2 w-full bg-input border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full md:w-auto bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest px-8 py-3 rounded-xl hover:shadow-glow transition-shadow">
              Search
            </button>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-2">
            <Filter className="w-3 h-3" /> Filter:
          </div>
          {(["all", "rec", "med"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {f === "all" ? "All" : f === "rec" ? "Recreational" : "Medical"}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS */}
      <div className="mt-10 flex items-center justify-between">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {results.length} dispensaries matched
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          Sorted by distance ↓
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {results.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group grid md:grid-cols-[auto_1fr_auto] gap-6 items-center p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-leaf-gradient flex items-center justify-center font-display text-2xl font-black text-ink">
              {d.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-2xl font-bold">{d.name}</h3>
                <span className="font-mono text-[10px] uppercase px-2 py-1 rounded bg-secondary">
                  {d.type}
                </span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground flex items-center gap-5 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" /> {d.city} ·{" "}
                  {d.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-primary" /> {d.hours}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-accent" /> {d.rating}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-accent" /> {d.deals} deals
                </span>
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                Specialty: {d.specialty}
              </div>
            </div>
            <button className="font-mono text-xs uppercase tracking-widest bg-secondary hover:bg-primary hover:text-primary-foreground px-5 py-3 rounded-full transition-colors">
              View Menu →
            </button>
          </motion.div>
        ))}
        {results.length === 0 && (
          <div className="p-20 text-center border border-dashed border-border rounded-2xl">
            <div className="font-display text-3xl font-black">
              Nothing matched.
            </div>
            <div className="mt-2 text-muted-foreground">
              Try a broader zip range or clear your filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
