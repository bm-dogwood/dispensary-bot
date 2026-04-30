import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispensary Near Me — Find Cannabis Dispensaries Open Now",
  description:
    "Find a dispensary near me open right now. Search cannabis dispensaries by location — compare menus, hours, reviews, and directions. Free, fast, real-time results.",
  keywords: [
    "dispensary near me",
    "cannabis dispensary near me",
    "weed dispensary near me",
    "dispensary open now",
    "marijuana dispensary near me",
  ],
  alternates: { canonical: "https://dispensary.bot/dispensary-near-me" },
  openGraph: {
    title: "Dispensary Near Me — Find Cannabis Dispensaries Open Now",
    description: "Search cannabis dispensaries by location with real-time hours and menus.",
    url: "https://dispensary.bot/dispensary-near-me",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dispensary.bot/dispensary-near-me",
  name: "Dispensary Near Me — Dispensary.Bot",
  description:
    "Find cannabis dispensaries near your location. Real-time data on hours, menus, and deals.",
  url: "https://dispensary.bot/dispensary-near-me",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find the closest dispensary near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your city, ZIP code, or allow location access on Dispensary.Bot to instantly see all cannabis dispensaries near you sorted by distance.",
      },
    },
    {
      "@type": "Question",
      name: "Are dispensaries open today near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dispensary.Bot shows real-time operating hours. Most dispensaries are open 7 days a week, typically 8am–10pm, though hours vary by state law and store policy.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need to bring to a dispensary near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a valid government-issued photo ID (driver's license or passport) proving you are 21+ for recreational, or 18+ with a valid medical marijuana card.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order online from a dispensary near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many dispensaries offer online ordering for pickup and some offer delivery. Use Dispensary.Bot to see which nearby dispensaries support online ordering.",
      },
    },
  ],
};

export default function DispensaryNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="content-page">
        <h1>
          Dispensary <span>Near Me</span>
        </h1>
        <p className="lead">
          Find cannabis dispensaries open right now near your location — with live menus, hours,
          deals, and turn-by-turn directions.
        </p>

        <h2>How to Find a Dispensary Near You</h2>
        <p>
          Whether you're traveling, relocating, or just looking for a new favorite shop,
          Dispensary.Bot makes it simple to find verified cannabis dispensaries in your area.
          Our real-time database covers over 15,000 licensed retailers across all legal states.
        </p>
        <p>
          Simply enter your ZIP code or city name, or tap the location button to use GPS. We'll
          instantly surface the closest dispensaries, sorted by distance, with filters for type
          (recreational or medical), rating, hours, and available deals.
        </p>

        <h2>What to Look for in a Dispensary Near You</h2>
        <ul>
          <li>Valid state license prominently displayed</li>
          <li>Knowledgeable budtenders who can guide your selection</li>
          <li>Diverse product menu — flower, edibles, concentrates, topicals</li>
          <li>Transparent pricing and lab-tested products with COAs</li>
          <li>Convenient hours, parking, and online ordering options</li>
          <li>Strong reviews and community reputation</li>
        </ul>

        <h2>Dispensary Hours Near Me</h2>
        <p>
          Most dispensaries operate 7 days a week, with hours typically ranging from 8am to 10pm
          depending on local ordinances. Some states restrict Sunday sales or limit hours near
          schools and churches. Dispensary.Bot always shows real-time hours so you never make a
          wasted trip.
        </p>

        <h2>Dispensary Delivery Near Me</h2>
        <p>
          Many dispensaries now offer same-day cannabis delivery within their licensed delivery
          zones. Delivery requires age verification at the door. Use our filters to find dispensaries
          in your area that offer this service — often with no minimum order and free delivery on
          first orders.
        </p>

        <h2>Dispensary Deals and Discounts Near Me</h2>
        <p>
          First-time customer discounts, daily specials, loyalty programs, and flash deals are
          common at dispensaries. Dispensary.Bot aggregates current promotions so you can find the
          best value without calling around. Save up to 40% with the right deal on your next visit.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
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
