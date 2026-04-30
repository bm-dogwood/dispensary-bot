import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispensary Hours Near Me — What Time Do Dispensaries Close?",
  description:
    "Find dispensary hours near you. Learn when dispensaries open and close, holiday hours, 24-hour dispensaries, and how to check real-time dispensary hours before you visit.",
  keywords: [
    "dispensary hours",
    "dispensary hours near me",
    "what time does a dispensary close",
    "dispensary open now",
    "dispensary open late",
    "24 hour dispensary",
  ],
  alternates: { canonical: "https://dispensary.bot/seo/dispensary-hours" },
  openGraph: {
    title: "Dispensary Hours Near Me — What Time Do Dispensaries Close?",
    description: "Real-time dispensary hours, holiday schedules, and late-night dispensary finder.",
    url: "https://dispensary.bot/seo/dispensary-hours",
  },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What time do dispensaries open and close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most dispensaries open between 8am and 10am and close between 9pm and 11pm, 7 days a week. Hours vary by state law — some states cap dispensary hours, and individual stores may have shorter weekend or holiday schedules.",
      },
    },
    {
      "@type": "Question",
      name: "Are dispensaries open on holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many dispensaries remain open on major holidays like Thanksgiving, Christmas, and New Year's, often with reduced hours. April 20 (4/20) is typically the busiest day of the year and dispensaries are fully staffed.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a 24-hour dispensary near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "True 24-hour dispensaries are rare due to state regulations, but some cities in Nevada (Las Vegas) allow late-night or near-24-hour cannabis sales. Use Dispensary.Bot's 'Open Now' filter to find the latest-closing dispensary in your area.",
      },
    },
  ],
};

export default function DispensaryHours() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="content-page">
        <h1>Dispensary <span>Hours</span> Near Me</h1>
        <p className="lead">
          Don't make a wasted trip. Find real-time dispensary hours near you — including late-night, holiday, and delivery hours updated daily on Dispensary.Bot.
        </p>

        <h2>Typical Dispensary Operating Hours</h2>
        <p>Cannabis dispensaries operate on hours determined by a combination of state law, local ordinance, and individual business choice. While there's no single universal schedule, most licensed dispensaries in legal states follow a pattern that accommodates both morning and evening shoppers.</p>
        <p>The majority of dispensaries open between 8:00am and 10:00am and close between 9:00pm and 11:00pm, seven days a week. Some urban dispensaries push their closing time to midnight where local law permits. In competitive markets like Los Angeles, Denver, and Portland, hours are often extended to maximize foot traffic.</p>

        <h2>Dispensary Hours by State</h2>
        <ul>
          <li><strong>California</strong> — Typically 6am–10pm; some cities allow until midnight</li>
          <li><strong>Colorado</strong> — 8am–12am in Denver; varies by municipality</li>
          <li><strong>Nevada (Las Vegas)</strong> — Some dispensaries operate 24 hours</li>
          <li><strong>Michigan</strong> — Generally 9am–9pm; some until 11pm</li>
          <li><strong>Illinois</strong> — Typically 8am–9pm; Chicago varies by ward</li>
          <li><strong>Florida</strong> — Typically 7am–9pm for medical dispensaries</li>
          <li><strong>Washington</strong> — 8am–11pm in most cities</li>
          <li><strong>Oregon</strong> — 7am–10pm in Portland; varies elsewhere</li>
        </ul>

        <h2>Holiday Dispensary Hours</h2>
        <p>Most dispensaries stay open on major U.S. holidays, though hours may be reduced. The cannabis industry treats April 20 (4/20) as its Super Bowl — most shops open early, run all-day specials, and staff up heavily. Green Wednesday (the day before Thanksgiving) rivals 4/20 as the second-biggest sales day and typically carries full or extended hours.</p>
        <ul>
          <li><strong>4/20 (April 20)</strong> — Full hours, extended in many cases, major sales events</li>
          <li><strong>Green Wednesday</strong> — Full hours with holiday deals</li>
          <li><strong>Thanksgiving Day</strong> — Reduced hours, typically noon–6pm</li>
          <li><strong>Christmas Day</strong> — Many closed or operating noon–5pm</li>
          <li><strong>New Year's Eve/Day</strong> — Often extended hours on NYE, reduced on NYD</li>
        </ul>

        <h2>Dispensary Delivery Hours</h2>
        <p>Delivery hours often differ from in-store hours. Some dispensaries offer delivery windows starting at 9am and ending at 10pm. Age verification is always required at the door. Check Dispensary.Bot's delivery filter to find dispensaries in your area that offer late delivery windows.</p>

        <h2>How to Check Dispensary Hours Before You Go</h2>
        <p>The most reliable method is Dispensary.Bot's real-time hours feature, which syncs with dispensaries' live POS and Google Business data. You can also call ahead or check the dispensary's Instagram page, where most shops announce schedule changes same-day. Never rely solely on a dispensary's website — hours pages are often the last to be updated.</p>

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
