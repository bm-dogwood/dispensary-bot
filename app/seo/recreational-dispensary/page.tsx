import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recreational Dispensary — Adult-Use Cannabis Near You",
  description:
    "Find a recreational dispensary near you. No medical card required — browse adult-use cannabis shops with menus, deals, and reviews. Shop legally today.",
  keywords: [
    "recreational dispensary",
    "recreational cannabis dispensary",
    "adult use dispensary",
    "recreational marijuana dispensary",
    "recreational weed near me",
  ],
  alternates: { canonical: "https://dispensary.bot/recreational-dispensary" },
  openGraph: {
    title: "Recreational Dispensary — Adult-Use Cannabis Near You",
    description: "Find adult-use recreational cannabis dispensaries near you with live menus and deals.",
    url: "https://dispensary.bot/recreational-dispensary",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a medical card to visit a recreational dispensary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Recreational dispensaries are open to any adult 21 years or older with a valid government-issued ID. No medical marijuana card or doctor's prescription is required.",
      },
    },
    {
      "@type": "Question",
      name: "What products can I buy at a recreational dispensary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recreational dispensaries sell flower, pre-rolls, edibles, vape cartridges, concentrates, tinctures, topicals, and accessories. Product availability varies by state law and store inventory.",
      },
    },
    {
      "@type": "Question",
      name: "How much cannabis can I buy at a recreational dispensary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Purchase limits vary by state. Typically, adults can buy up to 1 ounce (28g) of flower per transaction. Edibles and concentrate limits also apply — your budtender will advise.",
      },
    },
    {
      "@type": "Question",
      name: "Are recreational dispensaries more expensive than medical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recreational purchases are subject to excise taxes (often 10–37% depending on the state), which can make them pricier than medical. However, many recreational shops run regular promotions to offset costs.",
      },
    },
  ],
};

export default function RecreationalDispensary() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="content-page">
        <h1>
          <span>Recreational</span> Dispensary
        </h1>
        <p className="lead">
          Adult-use cannabis, no medical card required. Find the best recreational dispensaries near
          you with live menus, current deals, and real customer reviews.
        </p>

        <h2>What Is a Recreational Dispensary?</h2>
        <p>
          A recreational dispensary — also called an adult-use dispensary — is a licensed cannabis
          retail store where any adult 21 or older can legally purchase marijuana products without a
          medical card. As of 2025, recreational cannabis is legal in 24 states plus Washington D.C.,
          making these shops widely accessible across the country.
        </p>
        <p>
          Unlike the gray-market dispensaries of the past, today's recreational cannabis stores are
          professionally run, clean, and offer an experience closer to a modern pharmacy or specialty
          boutique than anything else. Every product is lab-tested, clearly labeled, and compliant
          with state regulations.
        </p>

        <h2>What to Expect at a Recreational Dispensary</h2>
        <ul>
          <li>Check-in at the door with ID verification (21+ required)</li>
          <li>Welcome from a trained budtender who can guide your selection</li>
          <li>Browse physical or digital menus with strain info and lab results</li>
          <li>Purchase limits enforced per state law (usually 1 oz flower)</li>
          <li>Cash or debit payment (credit cards often not accepted)</li>
          <li>Products in compliant, childproof packaging</li>
        </ul>

        <h2>Popular Recreational Cannabis Products</h2>
        <p>
          Modern recreational dispensaries stock a wide variety of products to suit every experience
          level and preference. Flower remains the most popular category, but edibles, vapes, and
          concentrates have grown significantly in recent years.
        </p>
        <ul>
          <li><strong>Flower / Pre-rolls</strong> — The classic form, available in hundreds of strains</li>
          <li><strong>Edibles</strong> — Gummies, chocolates, beverages, and capsules for discreet dosing</li>
          <li><strong>Vape Cartridges</strong> — Portable and convenient oil-based vaporizers</li>
          <li><strong>Concentrates</strong> — Wax, shatter, and live resin for experienced consumers</li>
          <li><strong>Tinctures</strong> — Liquid drops for precise, smokeless dosing</li>
          <li><strong>Topicals</strong> — Lotions and balms for localized relief without psychoactive effects</li>
        </ul>

        <h2>Recreational vs Medical Dispensaries</h2>
        <p>
          The primary difference is access and taxation. Medical dispensaries require a valid MMJ
          card and often provide higher-potency products at lower tax rates. Recreational dispensaries
          serve all adults 21+ but may carry slightly higher prices due to excise taxes. Some stores
          are "dual-licensed" and serve both populations under the same roof.
        </p>

        <h2>Finding the Best Recreational Dispensary</h2>
        <p>
          Use Dispensary.Bot's filters to sort by distance, rating, open now, and available deals.
          Read verified reviews, browse live menus, and place an online order before you arrive. Our
          platform indexes over 15,000 recreational and medical dispensaries nationwide with daily
          menu updates.
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
