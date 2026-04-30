import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cannabis Strains Guide — Indica, Sativa & Hybrid Explained",
  description:
    "Complete cannabis strains guide for dispensary shoppers. Learn the difference between indica, sativa, and hybrid strains, top terpenes, THC vs CBD, and how to choose the right strain.",
  keywords: [
    "cannabis strains",
    "dispensary strains guide",
    "indica vs sativa",
    "best cannabis strains",
    "marijuana strains",
    "weed strains explained",
  ],
  alternates: { canonical: "https://dispensary.bot/seo/cannabis-strains" },
  openGraph: {
    title: "Cannabis Strains Guide — Indica, Sativa & Hybrid Explained",
    description: "Everything you need to know about cannabis strains before visiting a dispensary.",
    url: "https://dispensary.bot/seo/cannabis-strains",
  },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between indica and sativa strains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indica strains are traditionally associated with relaxing, body-heavy effects ideal for evenings. Sativa strains are linked to energizing, cerebral effects suited for daytime. Modern science shows terpene profiles matter more than the indica/sativa label for predicting effects.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular cannabis strains at dispensaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top-selling strains at dispensaries include Blue Dream, OG Kush, Gelato, Wedding Cake, Runtz, Girl Scout Cookies (GSC), Sour Diesel, Jack Herer, and Granddaddy Purple. Availability varies by region and season.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right cannabis strain for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell your budtender your desired effects (relaxation, energy, sleep, pain relief), your experience level, and your preferred consumption method. They'll recommend strains based on THC/CBD percentage, dominant terpenes, and your profile.",
      },
    },
  ],
};

export default function CannabisStrains() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="content-page">
        <h1>Cannabis <span>Strains</span> Guide</h1>
        <p className="lead">
          Walk into any dispensary with confidence. This guide explains indica, sativa, hybrid strains, terpenes, cannabinoids, and how to find the perfect match for your goals.
        </p>

        <h2>Indica vs. Sativa vs. Hybrid: The Basics</h2>
        <p>The traditional cannabis classification divides plants into indica, sativa, and hybrid categories. While these labels originated as botanical descriptors for plant morphology, dispensaries and consumers use them as shorthand for expected effects. Modern research, however, emphasizes that terpene profiles and cannabinoid ratios are far more predictive of your experience than the indica/sativa label alone.</p>

        <h2>Indica Strains</h2>
        <p>Indica plants are shorter, bushier, and produce denser buds. They are traditionally associated with relaxing, sedating effects — often described as a "body high." Indicas are popular for evening use, sleep support, muscle relaxation, and anxiety relief.</p>
        <ul>
          <li>Popular indica strains: Granddaddy Purple, Northern Lights, Bubba Kush, Purple Punch</li>
          <li>Best for: Sleep, pain relief, relaxation, stress, appetite stimulation</li>
          <li>Dominant terpenes: Myrcene, Linalool, Caryophyllene</li>
        </ul>

        <h2>Sativa Strains</h2>
        <p>Sativa plants grow tall and produce lighter, airier buds. They're traditionally linked to uplifting, cerebral, energizing effects — a "head high." Sativas are popular for daytime use, creative work, socializing, and combating fatigue.</p>
        <ul>
          <li>Popular sativa strains: Sour Diesel, Jack Herer, Durban Poison, Green Crack, Super Lemon Haze</li>
          <li>Best for: Creativity, energy, focus, daytime use, mood elevation</li>
          <li>Dominant terpenes: Limonene, Terpinolene, Pinene</li>
        </ul>

        <h2>Hybrid Strains</h2>
        <p>Most modern commercially-grown cannabis is a hybrid — a cross between indica and sativa genetics. Hybrids can be indica-dominant, sativa-dominant, or balanced. They represent the majority of what you'll find at any dispensary today.</p>
        <ul>
          <li>Popular hybrid strains: Blue Dream, Gelato, Wedding Cake, Runtz, Girl Scout Cookies, OG Kush</li>
          <li>Best for: Balanced effects tailored to specific experiences</li>
        </ul>

        <h2>Understanding Terpenes</h2>
        <p>Terpenes are the aromatic compounds that give cannabis strains their distinctive smells and significantly influence their effects. Key dispensary terpenes to know:</p>
        <ul>
          <li><strong>Myrcene</strong> — Earthy, musky; relaxing, sedating, found in most indicas</li>
          <li><strong>Limonene</strong> — Citrusy; mood-lifting, anti-anxiety, common in sativas</li>
          <li><strong>Caryophyllene</strong> — Spicy, peppery; anti-inflammatory, stress relief</li>
          <li><strong>Linalool</strong> — Floral, lavender-like; calming, anti-anxiety, sleep support</li>
          <li><strong>Pinene</strong> — Pine; alertness, memory retention, bronchodilator</li>
          <li><strong>Terpinolene</strong> — Floral, herby; uplifting, anti-anxiety, common in sativas</li>
        </ul>

        <h2>THC vs. CBD: What the Numbers Mean</h2>
        <p>THC (tetrahydrocannabinol) is the primary psychoactive compound in cannabis. Higher THC percentages (20%+) produce stronger psychoactive effects. CBD (cannabidiol) is non-psychoactive and modulates THC's effects, reducing anxiety and increasing therapeutic benefit. Beginners should start with lower THC (under 18%) and consider strains with meaningful CBD content for a balanced experience.</p>

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
