import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispensary Menu — How to Read Cannabis Menus Like a Pro",
  description:
    "Learn how to read a dispensary menu and find the best products. Understand flower, edibles, concentrates, tinctures, and topicals — with pricing and potency explained.",
  keywords: [
    "dispensary menu",
    "cannabis dispensary menu",
    "weed menu near me",
    "dispensary products",
    "dispensary menu guide",
    "how to read a dispensary menu",
  ],
  alternates: { canonical: "https://dispensary.bot/seo/dispensary-menu" },
  openGraph: {
    title: "Dispensary Menu — How to Read Cannabis Menus Like a Pro",
    description: "Your complete guide to understanding dispensary menus, products, and pricing.",
    url: "https://dispensary.bot/seo/dispensary-menu",
  },
  robots: { index: true, follow: true },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dispensary Product Categories",
  description: "Common product categories found on a dispensary menu",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Flower", description: "Dried cannabis buds for smoking or vaporizing" },
    { "@type": "ListItem", position: 2, name: "Pre-Rolls", description: "Pre-rolled cannabis joints, singles and multipacks" },
    { "@type": "ListItem", position: 3, name: "Edibles", description: "Cannabis-infused food and beverages" },
    { "@type": "ListItem", position: 4, name: "Vape Cartridges", description: "Oil-filled cartridges for vaporizer pens" },
    { "@type": "ListItem", position: 5, name: "Concentrates", description: "Highly potent cannabis extracts including wax, shatter, and live resin" },
    { "@type": "ListItem", position: 6, name: "Tinctures", description: "Liquid cannabis extracts taken sublingually" },
    { "@type": "ListItem", position: 7, name: "Topicals", description: "Cannabis-infused creams and balms for localized relief" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a dispensary menu include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dispensary menu typically includes flower (by the gram or eighth), pre-rolls, edibles, vape cartridges, concentrates, tinctures, topicals, and accessories. Each listing shows strain name, THC/CBD percentage, price, and often lab test data.",
      },
    },
    {
      "@type": "Question",
      name: "How is flower priced on a dispensary menu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flower is priced by weight: per gram, eighth (3.5g), quarter (7g), half-ounce (14g), or ounce (28g). Quality tiers — often labeled budget, mid, and top-shelf or premium — also affect pricing, typically ranging from $8/g to $20/g.",
      },
    },
    {
      "@type": "Question",
      name: "Can I browse a dispensary menu before I visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most dispensaries publish live online menus updated in real time via platforms like Leafly, Weedmaps, or their own website. Dispensary.Bot aggregates live menus so you can browse before you go and even place pickup orders.",
      },
    },
  ],
};

export default function DispensaryMenu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="content-page">
        <h1>Dispensary <span>Menu</span> Guide</h1>
        <p className="lead">
          A dispensary menu can feel overwhelming the first time. This guide breaks down every product category, explains pricing tiers, and teaches you exactly what to look for before you buy.
        </p>

        <h2>How Dispensary Menus Are Organized</h2>
        <p>Modern dispensary menus — whether digital, printed, or online — are organized by product category. Within each category, products are further sorted by brand, strain type (indica/sativa/hybrid), potency, and price. Most dispensaries use a tiered pricing model: budget or value-tier, mid-shelf, and premium or top-shelf.</p>

        <h2>Flower — The Menu Foundation</h2>
        <p>Flower (dried cannabis buds) is the cornerstone of any dispensary menu. It's priced by weight and available in several common sizes. When evaluating flower on a menu, pay attention to THC percentage, terpene profile (if listed), and the cultivar or farm source — not just price.</p>
        <ul>
          <li><strong>Gram (1g)</strong> — $8–$20; great for trying a new strain</li>
          <li><strong>Eighth (3.5g)</strong> — $25–$60; most popular purchase size</li>
          <li><strong>Quarter (7g)</strong> — $45–$100; mid-quantity for regular consumers</li>
          <li><strong>Half-ounce (14g)</strong> — $80–$160; frequent user value</li>
          <li><strong>Ounce (28g)</strong> — $120–$280; maximum single purchase in most states</li>
        </ul>

        <h2>Pre-Rolls</h2>
        <p>Pre-rolled joints are convenient and beginner-friendly. Menu listings show the strain, weight, and whether the pre-roll is infused (dipped in oil or dusted with kief, making it significantly more potent). Singles typically run $5–$15; multipacks offer savings.</p>

        <h2>Edibles</h2>
        <p>Edibles appear on menus with total mg of THC and CBD per package, and per serving. Start low — 2.5mg to 5mg per serving — especially if you're new to edibles. Common edible types include gummies, chocolates, mints, beverages, and baked goods. Effects take 45 minutes to 2 hours to onset.</p>

        <h2>Vape Cartridges & Disposables</h2>
        <p>Vape products are listed by cart size (usually 0.5g or 1g) and oil type: distillate, live resin, rosin, or full-spectrum. Live resin and rosin cartridges retain more terpenes and typically cost more but offer a richer flavor profile. Disposable vapes include the battery; cartridges require a 510-thread battery.</p>

        <h2>Concentrates</h2>
        <p>Concentrates are for experienced consumers. The menu will list the extraction type — shatter, wax, budder, live resin, rosin, HTFSE — along with THC percentages that can range from 60% to 95%+. Sold in 0.5g and 1g increments, concentrates are consumed using a dab rig or vaporizer.</p>

        <h2>Tinctures & Topicals</h2>
        <p>Tinctures are alcohol or oil-based cannabis extracts taken under the tongue for rapid absorption. Topicals are non-psychoactive creams, patches, and balms applied to the skin for localized relief. Both appear on menus with total cannabinoid content per bottle or package.</p>

        <div className="faq-list" style={{ marginTop: "2.5rem" }}>
          {faqSchema.mainEntity.map((q, i) => (
            <div key={i} className="faq-item">
              <h3>{q.name}</h3>
              <p>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
