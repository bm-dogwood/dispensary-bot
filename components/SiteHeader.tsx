"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Index" },
  { href: "/finder", label: "Finder" },
  { href: "/menu", label: "Menu" },
  { href: "/strains", label: "Strains" },
  { href: "/states", label: "State Laws" },
  { href: "/guide", label: "First-Timer" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if the current path matches the nav item
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-4 mt-4 rounded-full bg-glass border border-border px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-full bg-leaf-gradient pulse-glow" />
          <div className="font-display font-black tracking-tight text-lg">
            DISPENSARY<span className="text-primary">.BOT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-2 rounded-full transition-colors ${
                isActive(n.href)
                  ? "text-primary-foreground bg-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop CTA */}
        <Link
          href="/finder"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Find Now →
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mx-4 mt-2 rounded-3xl bg-glass border border-border p-4"
        >
          <nav className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-full transition-colors ${
                  isActive(n.href)
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/finder"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors text-center"
            >
              Find Now →
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
