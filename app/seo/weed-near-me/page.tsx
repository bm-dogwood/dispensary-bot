import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weed Near Me — Find Legal Cannabis Dispensaries Open Now",
  description:
    "Search 'weed near me' and find legal cannabis dispensaries in your area. Compare marijuana shops by distance, hours, menus, and reviews. Fast, free, and accurate.",
  keywords: [
    "weed near me",
    "marijuana near me",
    "cannabis near me",
    "weed store near me",
    "buy weed near me",
    "legal weed near me",
  ],
  alternates: { canonical: "https://dispensary.bot/seo/weed-near-me" },
  openGraph: {
    title: "Weed Near Me — Find Legal Cannabis Dispensaries Open Now",
    description: "Find legal cannabis near you. Compare dispensaries by location, menu, and deals.",
    url: "https://dispensary.bot/seo/weed-near-me",
  },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find legal weed near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use Dispensary.Bot to search by ZIP code or enable location services. We show only state-licensed, legal cannabis dispensaries — no gray-market shops. Filter by open now, recreational or medical, rating, and deals.",
      },
    },
    {
      "@type": "Question",
      name: "Is buying weed legal near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adult-use cannabis is legal in 24 states plus D.C. as of 2025. Medical marijuana is legal in 38 states. Dispensary.Bot only lists dispensaries in states where cannabis is legally licensed and regulated.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order weed online for delivery near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in states that allow cannabis delivery (California, Nevada, Michigan, Massachusetts, and others). Browse dispensaries with delivery enabled on Dispensary.Bot, add products to cart, and schedule same-day delivery with age verification at your door.",
      },
    },
    {
      "@type": "Question",
      name: "How much does weed cost at a dispensary near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dispensary cannabis prices vary by state, tier, and product. Expect to pay $8–$20 per gram of flower, $25–$60 per eighth, and $15–$25 for a pre-roll. Edibles range from $10–$30. Prices are lower in mature markets like Oregon and Colorado due to high supply.",
      },
    },
  ],
};

export default function WeedNearMe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="content-page">
        <h1>Weed <span>Near Me</span></h1>
        <p className="lead">
          Find legal cannabis near you in seconds. Dispensary.Bot shows only licensed, state-regulated marijuana dispensaries — with live menus, open hours, and real deals.
        </p>

        <h2>Finding Legal Weed Near You</h2>
        <p>With cannabis now legal recreationally in 24 states and medically in 38, finding a nearby legal dispensary has never been easier — but knowing where to look matters. Dispensary.Bot indexes over 15,000 licensed cannabis retailers, updated daily, so you always get accurate results rather than outdated listings or illegal shops.</p>
        <p>To find weed near you, simply enter your ZIP code or allow location access. Results are sorted by distance and show operating status in real time. Use our filters to narrow down by type (recreational or medical), minimum rating, open now, delivery, and active deals.</p>

        <h2>What to Expect When You Buy Weed Nearby</h2>
        <p>Legal cannabis dispensaries operate like modern specialty retailers. The process is straightforward: show your ID at the door, speak with a budtender, browse the menu, purchase your products, and leave with them in compliant packaging. The whole process typically takes 10–20 minutes. Online ordering with express pickup can cut that to under 5 minutes.</p>

        <h2>Weed Prices Near You</h2>
        <p>Cannabis pricing varies significantly by state due to regulatory taxes, supply levels, and market maturity. States like Oregon, Colorado, and Washington have the most competitive prices due to years of legal cultivation. Newer markets like New York and New Jersey still carry premium pricing as supply catches up to demand.</p>
        <ul>
          <li><strong>Flower</strong> — $8–$20/gram; $25–$60/eighth</li>
          <li><strong>Pre-Rolls</strong> — $5–$15 each</li>
          <li><strong>Edibles</strong> — $10–$30 per package</li>
          <li><strong>Vape Cartridges</strong> — $25–$60 per 0.5g–1g</li>
          <li><strong>Concentrates</strong> — $30–$80 per gram</li>
        </ul>

        <h2>Weed Delivery Near Me</h2>
        <p>Cannabis home delivery is available in an expanding number of states. California, Nevada, Michigan, Massachusetts, Colorado, and New Jersey all allow regulated weed delivery. Delivery requires age verification at your door and typically has a 1–3 hour window. Some dispensaries offer free delivery on first orders or orders over a minimum amount.</p>

        <h2>Is It Safe to Buy Weed from a Dispensary?</h2>
        <p>Legal dispensaries are among the most regulated retail environments in the country. Every product is tested by a state-certified laboratory for potency, pesticides, heavy metals, and microbial contamination before it can be sold. Certificates of Analysis (COAs) are available for every product — something you'll never get from an unlicensed source. Buying from a licensed dispensary protects both your health and your legal standing.</p>

        <h2>States Where You Can Find Legal Weed Near You</h2>
        <p>Recreational cannabis is currently legal in: Alaska, Arizona, California, Colorado, Connecticut, Delaware, Illinois, Maine, Maryland, Massachusetts, Michigan, Minnesota, Missouri, Montana, Nevada, New Jersey, New Mexico, New York, Ohio, Oregon, Rhode Island, Vermont, Virginia, Washington, and Washington D.C.</p>
        <p>Medical cannabis is additionally available in Florida, Louisiana, Pennsylvania, Texas (limited), West Virginia, and many others. Use Dispensary.Bot to confirm availability and find licensed dispensaries in your specific area.</p>

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
