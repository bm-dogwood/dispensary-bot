import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Time at a Dispensary — Complete Beginner's Guide 2025",
  description:
    "Going to a dispensary for the first time? Our complete guide covers what to bring, what to expect, how to talk to a budtender, and which products to try as a beginner.",
  keywords: [
    "first time dispensary",
    "dispensary for beginners",
    "what to expect at a dispensary",
    "first time buying weed",
    "dispensary guide",
    "dispensary tips for beginners",
  ],
  alternates: { canonical: "https://dispensary.bot/first-time-at-dispensary" },
  openGraph: {
    title: "First Time at a Dispensary — Complete Beginner's Guide 2025",
    description: "Everything first-time dispensary visitors need to know before they go.",
    url: "https://dispensary.bot/first-time-at-dispensary",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a first-time dispensary customer bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring a valid government-issued photo ID (driver's license or passport) proving you are 21+. Cash is also recommended as many dispensaries are cash-only or cash-preferred due to banking restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "What should I ask for as a first-time dispensary visitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell your budtender it's your first time. Share your experience level (none), your goals (relaxation, sleep, creativity, pain relief), and your preferred consumption method. They'll recommend beginner-friendly, low-dose products.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good cannabis product for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For first-timers, low-dose edibles (2.5–5mg THC), indica-dominant flower with moderate THC levels (under 18%), or CBD-dominant products with a 1:1 THC:CBD ratio are commonly recommended for a manageable experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is it embarrassing to go to a dispensary for the first time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all! Dispensary staff are trained to welcome first-time visitors warmly and non-judgmentally. Everyone starts somewhere, and budtenders love helping new customers find the right product. There are no stupid questions.",
      },
    },
  ],
};

export default function FirstTimeDispensary() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="content-page">
        <h1>
          <span>First Time</span> at a Dispensary
        </h1>
        <p className="lead">
          Never been to a cannabis dispensary before? Don't worry — this complete beginner's guide
          tells you exactly what to bring, what to expect, and how to make the most of your first
          visit.
        </p>

        <h2>Before You Go: What to Bring</h2>
        <ul>
          <li><strong>Valid photo ID</strong> — Driver's license, state ID, or passport (must be 21+)</li>
          <li><strong>Cash</strong> — Many dispensaries are cash-only; there's often an ATM on-site</li>
          <li><strong>MMJ card</strong> — Only if visiting a medical-only dispensary</li>
          <li><strong>Your questions</strong> — Budtenders are there to help; no question is too basic</li>
        </ul>

        <h2>What Happens When You Arrive</h2>
        <p>
          When you walk into a dispensary for the first time, a staff member will greet you and ask
          to see your ID. This is standard at every legal dispensary, no matter how old you look. You
          may be asked to sign in digitally or fill out a brief form on your first visit.
        </p>
        <p>
          Many dispensaries have a lobby or waiting area where you'll wait briefly before being
          called in to the sales floor or to a private consultation station with a budtender. Others
          let you browse freely. Either way, the environment is designed to be welcoming and
          professional — think modern retail, not a back alley.
        </p>

        <h2>How to Talk to a Budtender</h2>
        <p>
          Budtenders are cannabis specialists trained to help you find the right product for your
          goals. Don't be shy — tell them honestly that it's your first time and what you're hoping
          to get out of the experience. Common goals include:
        </p>
        <ul>
          <li>Relaxation and stress relief</li>
          <li>Better sleep</li>
          <li>Creative focus or socializing</li>
          <li>Pain, anxiety, or nausea management</li>
          <li>Simple curiosity</li>
        </ul>
        <p>
          Your budtender will ask about your experience level, any health considerations, and your
          preferred consumption method (smoking, vaping, eating, or tinctures). Based on your answers,
          they'll make personalized recommendations.
        </p>

        <h2>Best Cannabis Products for Beginners</h2>
        <p>
          As a first-timer, less is always more. Starting low and going slow is the golden rule of
          cannabis. The most beginner-friendly options include:
        </p>
        <ul>
          <li><strong>Low-dose edibles (2.5mg–5mg THC)</strong> — Great for first-timers; effects take 45–90 minutes</li>
          <li><strong>CBD:THC balanced products (1:1)</strong> — Gentler high with anti-anxiety benefits</li>
          <li><strong>Indica flower (under 18% THC)</strong> — Relaxing, great for evening use</li>
          <li><strong>Vape pens</strong> — Convenient, lower odor, effects felt quickly for easy dosing control</li>
          <li><strong>Tinctures</strong> — Drops under the tongue for precise, smokeless dosing</li>
        </ul>

        <h2>First-Time Dispensary Etiquette</h2>
        <ul>
          <li>Don't consume cannabis on the premises — it's illegal in dispensaries</li>
          <li>Ask before touching products on display</li>
          <li>Be patient during busy periods — quality service takes a moment</li>
          <li>Tip your budtender if the service was excellent (standard is $1–5 or 15–20%)</li>
          <li>Keep your voice calm and be respectful of other customers' privacy</li>
        </ul>

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
