import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispensary Deals & Discounts — Best Cannabis Sales Today",
  description:
    "Find the best dispensary deals, daily specials, and cannabis discounts near you. First-time customer offers, loyalty rewards, flash sales, and holiday promotions updated daily.",
  keywords: [
    "dispensary deals",
    "dispensary discounts",
    "dispensary specials",
    "cannabis deals near me",
    "weed deals today",
    "dispensary coupons",
  ],
  alternates: { canonical: "https://dispensary.bot/seo/dispensary-deals" },
  openGraph: {
    title: "Dispensary Deals & Discounts — Best Cannabis Sales Today",
    description: "Daily dispensary deals, specials, and coupons updated in real time.",
    url: "https://dispensary.bot/seo/dispensary-deals",
  },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of deals do dispensaries offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dispensaries offer first-time customer discounts (often 15–25% off), daily specials by product category, loyalty point programs, veteran and senior discounts, birthday deals, and holiday flash sales.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best day to get deals at a dispensary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many dispensaries run their best deals on Tuesdays and Wednesdays to drive mid-week traffic. 420 (April 20) and Green Wednesday (day before Thanksgiving) are the two biggest cannabis sales days of the year.",
      },
    },
    {
      "@type": "Question",
      name: "Do dispensaries have loyalty programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most established dispensaries run points-based loyalty programs. Customers earn points per dollar spent and redeem them for discounts. Some programs also offer tier-based rewards, birthday bonuses, and exclusive early access to new products.",
      },
    },
  ],
};

export default function DispensaryDeals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="content-page">
        <h1>Dispensary <span>Deals</span> & Discounts</h1>
        <p className="lead">
          Cannabis doesn't have to break the bank. From daily specials to loyalty rewards and first-time discounts, the best dispensary deals can save you 15–40% on every visit.
        </p>

        <h2>Types of Dispensary Deals</h2>
        <p>The legal cannabis market is competitive, which is great news for consumers. Dispensaries use a variety of promotional strategies to attract and retain customers. Understanding the types of deals available helps you shop smarter and save more.</p>

        <h2>First-Time Customer Discounts</h2>
        <p>Almost every reputable dispensary offers a first-visit discount to welcome new customers — typically 15% to 25% off your entire first purchase. Some shops offer a free pre-roll or sample product on top of the discount. Dispensary.Bot flags first-timer deals prominently on each dispensary listing so you never miss one.</p>

        <h2>Daily Specials & Rotating Deals</h2>
        <ul>
          <li><strong>Munchie Monday</strong> — Discounts on edibles and beverages</li>
          <li><strong>Topical Tuesday</strong> — Sales on CBD creams, balms, and patches</li>
          <li><strong>Wax Wednesday</strong> — Concentrate and extract promotions</li>
          <li><strong>Throwback Thursday</strong> — Deals on classic strains and house brands</li>
          <li><strong>Flower Friday</strong> — BOGO or discounted eighths and ounces</li>
          <li><strong>Sesh Saturday</strong> — Weekend specials on accessories and bundles</li>
        </ul>

        <h2>Loyalty & Rewards Programs</h2>
        <p>Long-term savings come from loyalty programs. Most dispensary chains and many independents offer points per dollar spent. Accumulate enough points and redeem them for free products, discounts, or exclusive merchandise. Dual-license dispensaries sometimes allow points to carry across recreational and medical purchases.</p>

        <h2>Veteran, Senior & Patient Discounts</h2>
        <p>Compassionate pricing is a hallmark of community-focused dispensaries. Veterans typically receive 10–20% off, seniors (65+) get similar discounts, and low-income patients may qualify for sliding-scale pricing. Medical patients in some states also benefit from tax exemptions that further reduce the final price.</p>

        <h2>Holiday & Seasonal Cannabis Sales</h2>
        <p>The cannabis industry has its own retail calendar. The biggest deal days include April 20 (4/20), Green Wednesday (the Wednesday before Thanksgiving), and increasingly, Black Friday weekend. New Year's promotions, Valentine's Day bundles, and Super Bowl weekend specials round out the annual calendar.</p>

        <h2>Flash Sales & Limited-Time Offers</h2>
        <p>Many dispensaries run spontaneous flash sales announced via SMS or email lists. Signing up for your favorite dispensary's newsletter or text alerts is one of the best ways to catch hourly or same-day deals on premium products. Dispensary.Bot aggregates active flash sales in real time so you can act fast.</p>

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
