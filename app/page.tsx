"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Leaf,
  BookOpen,
  Scale,
  Flame,
  Search,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { k: "12,847", v: "Licensed Dispensaries" },
  { k: "38", v: "States Tracked" },
  { k: "2,400+", v: "Strains Indexed" },
  { k: "24/7", v: "Menu Updates" },
];

const features = [
  {
    icon: MapPin,
    title: "Zip-Code Finder",
    desc: "Drop a zip, pull the closest licensed shops with hours, deals, and drive time.",
    to: "/finder",
  },
  {
    icon: Flame,
    title: "Live Menus",
    desc: "Real-time Dutchie & Weedmaps menus with stock levels and current pricing.",
    to: "/menu",
  },
  {
    icon: Leaf,
    title: "Strain Library",
    desc: "THC/CBD profiles, terpenes, and effect tags from the Leafly database.",
    to: "/strains",
  },
  {
    icon: Scale,
    title: "State Law Matrix",
    desc: "Possession limits, taxes, medical vs rec, and ID requirements for all 50.",
    to: "/states",
  },
  {
    icon: BookOpen,
    title: "First-Timer Guide",
    desc: "State-by-state walkthroughs: what to bring, what to ask, what to skip.",
    to: "/guide",
  },
  {
    icon: Search,
    title: "Filter Everything",
    desc: "Recreational vs medical, delivery, price range, edibles, concentrates, more.",
    to: "/finder",
  },
];

const tickerItems = [
  "Denver +12 new deals",
  "LA edibles restocked",
  "NY medical program expanded",
  "Oregon rosin drops friday",
  "Arizona ID requirements updated",
  "218 shops nearby",
];

const dataSources = [
  "Leafly",
  "Weedmaps",
  "Dutchie",
  "OpenStates",
  "Places",
  "Registries",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(/hero.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            maskImage:
              "radial-gradient(ellipse at right, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at right, black 30%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            <span className="w-8 h-px bg-primary" /> Nationwide Cannabis Index —
            v2.6
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-6 font-display font-black text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight"
          >
            Find the{" "}
            <span className="italic text-primary text-glow">right shop,</span>
            <br />
            <span className="text-stroke">skip the</span> guesswork.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            A dark, no-nonsense dashboard that pulls live menus from Dutchie,
            Leafly and Weedmaps, then matches them to your state&apos;s legal
            framework — so you always know what&apos;s on the shelf and what you
            can legally carry home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/finder"
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 font-mono text-xs uppercase tracking-widest shadow-glow hover:scale-[1.02] transition-transform"
            >
              Find nearest dispensary{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-glass px-7 py-4 font-mono text-xs uppercase tracking-widest hover:border-primary"
            >
              Browse live menus
            </Link>
          </motion.div>

          {/* stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          >
            {stats.map((s) => (
              <div key={s.v} className="bg-card p-6">
                <div className="font-display text-4xl font-black text-primary">
                  {s.k}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest mt-2 text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* floating badges */}
        <div className="hidden lg:block absolute top-32 right-12 float-slow">
          <div className="bg-glass border border-border rounded-2xl p-4 w-56">
            <div className="font-mono text-[10px] uppercase text-primary">
              Live Now
            </div>
            <div className="mt-1 text-sm">Blue Dream — $42/3.5g</div>
            <div className="text-xs text-muted-foreground">
              Green Harbor · Denver
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-4 overflow-hidden bg-ink">
        <div className="flex ticker whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 mx-6">
              {tickerItems.map((item, j) => (
                <span key={j}>◆ {item}</span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Capabilities
            </div>
            <h2 className="font-display font-black text-5xl md:text-7xl mt-3">
              Everything you need,
              <br />
              nothing you don&apos;t.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Six tools wired together into a single, dark, private dashboard. No
            accounts, no tracking, no fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                href={f.to}
                className="group relative block p-8 rounded-3xl bg-card border border-border hover:border-primary transition-colors h-full overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/20 transition-colors blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mt-6">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
                  <div className="mt-6 font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                    Open → <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            The Method
          </div>
          <h2 className="font-display font-black text-5xl md:text-6xl mt-3 leading-none">
            Every
            <br />
            <span className="italic text-primary">shelf,</span>
            <br />
            indexed.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            We scrape Dutchie POS endpoints, Leafly strain pages, and state-run
            license registries every 15 minutes. The result: the cleanest,
            fastest look at what&apos;s actually in stock — with pricing that
            reflects the door, not yesterday&apos;s ad.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-widest">
            {dataSources.map((s) => (
              <div
                key={s}
                className="border border-border bg-secondary/40 rounded-lg px-3 py-3 text-center"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-card">
            <Image
              src="/dispensary.jpeg"
              alt="Modern dispensary interior with glass display cases"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-glass border border-border rounded-xl px-4 py-3">
              <div className="font-mono text-[10px] uppercase text-primary">
                Verified Shop
              </div>
              <div className="text-sm font-semibold">
                The Ember Room · Los Angeles
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-10 -left-10 w-48 aspect-square rounded-2xl overflow-hidden border border-border shadow-amber">
            <Image
              src="/products.jpeg"
              alt="Cannabis products flat lay"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-leaf-gradient p-12 md:p-20 text-ink">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, black 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.3em]">
              Zero sign-ups · Zero trackers
            </div>
            <h2 className="font-display font-black text-5xl md:text-8xl leading-none mt-4">
              Plug in a zip.
              <br />
              Pull the menu.
            </h2>
            <p className="mt-6 text-ink/80 text-lg max-w-xl">
              The fastest way to find what&apos;s legal, what&apos;s local, and
              what&apos;s actually on the shelf near you — updated minute by
              minute.
            </p>
            <Link
              href="/finder"
              className="inline-flex items-center gap-3 mt-10 bg-ink text-foreground px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-ink transition-colors"
            >
              Launch the finder <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
