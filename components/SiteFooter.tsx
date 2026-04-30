import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-32">
      {/* Scrolling Ticker */}
      <div className="overflow-hidden border-b border-border py-8">
        <div className="flex ticker whitespace-nowrap font-display text-6xl md:text-8xl font-black">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              DISPENSARY.BOT
              <span className="text-primary">◆</span>
              STAY LIT
              <span className="text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="font-display text-2xl font-black">
            DISPENSARY<span className="text-primary">.BOT</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The clearinghouse for dispensary menus, strain intel, and cannabis
            compliance across the United States.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs uppercase text-muted-foreground mb-3">
            Navigate
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/finder"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Dispensary Finder
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Live Menus
              </Link>
            </li>
            <li>
              <Link
                href="/strains"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Strain Library
              </Link>
            </li>
            <li>
              <Link
                href="/states"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                State Laws
              </Link>
            </li>
            <li>
              <Link
                href="/guide"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                First-Timer Guide
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-xs uppercase text-muted-foreground mb-3">
            Data Sources
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Leafly · Weedmaps</li>
            <li>Dutchie menus</li>
            <li>OpenStates API</li>
            <li>State registries</li>
            <li>Google Places</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} DISPENSARY.BOT — Must be 21+. Cannabis has
        not been analyzed by the FDA.
      </div>
    </footer>
  );
}
