import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Dispensary Near Me — MMJ Cannabis Dispensaries",
  description:
    "Find medical dispensaries near you that accept MMJ cards. Browse medical cannabis dispensaries with expert budtenders, high-potency products, and tax benefits.",
  keywords: [
    "medical dispensary near me",
    "medical marijuana dispensary",
    "MMJ dispensary",
    "medical cannabis dispensary",
    "medical weed dispensary",
  ],
  alternates: { canonical: "https://dispensary.bot/medical-dispensary" },
  openGraph: {
    title: "Medical Dispensary Near Me — MMJ Cannabis Dispensaries",
    description: "Find medical cannabis dispensaries accepting MMJ cards near you.",
    url: "https://dispensary.bot/medical-dispensary",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do I need to visit a medical dispensary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a valid state-issued medical marijuana (MMJ) card or patient recommendation from a licensed physician, plus a government-issued photo ID. Requirements vary slightly by state.",
      },
    },
    {
      "@type": "Question",
      name: "What conditions qualify for medical marijuana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Qualifying conditions vary by state but commonly include chronic pain, PTSD, anxiety, cancer, glaucoma, epilepsy, multiple sclerosis, HIV/AIDS, and Crohn's disease. Consult a licensed cannabis physician in your state.",
      },
    },
    {
      "@type": "Question",
      name: "Is medical cannabis cheaper than recreational?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most states, yes. Medical cannabis purchases are often exempt from or carry reduced excise taxes compared to recreational purchases, resulting in savings of 10–30% depending on the state.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my medical card in another state?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently, most states do not accept out-of-state MMJ cards (reciprocity is limited). However, some states like Arkansas, Hawaii, Maine, Michigan, and Nevada do allow out-of-state medical patients. Check state-specific rules before traveling.",
      },
    },
  ],
};

export default function MedicalDispensary() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="content-page">
        <h1>
          <span>Medical</span> Dispensary
        </h1>
        <p className="lead">
          Find trusted medical cannabis dispensaries near you — accepting MMJ cards, offering
          high-potency formulations, expert consultations, and reduced tax rates for qualifying
          patients.
        </p>

        <h2>What Is a Medical Dispensary?</h2>
        <p>
          A medical dispensary is a state-licensed cannabis retailer that serves patients with a
          valid medical marijuana (MMJ) card or physician's recommendation. Medical dispensaries
          often carry a wider selection of high-potency and specialty formulations not available in
          recreational stores, and in many states, medical purchases are taxed at a lower rate — or
          not at all.
        </p>
        <p>
          Budtenders at medical dispensaries typically receive additional training in cannabis
          therapeutics to help patients find the right products for their specific health conditions.
          Whether you're managing chronic pain, anxiety, or a serious illness, a medical dispensary
          offers a more clinical and consultative experience.
        </p>

        <h2>How to Get a Medical Marijuana Card</h2>
        <ul>
          <li>Check if your state has a medical marijuana program</li>
          <li>Confirm your condition qualifies under state law</li>
          <li>Schedule a consultation with a licensed cannabis physician (many offer telemedicine)</li>
          <li>Receive a physician's certification or recommendation</li>
          <li>Register with your state's MMJ program and pay the application fee</li>
          <li>Receive your MMJ card (typically within 1–4 weeks)</li>
        </ul>

        <h2>Benefits of a Medical Dispensary</h2>
        <p>
          Beyond access, medical patients often enjoy higher purchase limits, access to stronger
          formulations (high-THC or high-CBD concentrates), dedicated patient consultations, and
          significantly lower prices due to tax exemptions. In California, for example, medical
          patients save the 15% excise tax plus local sales tax on every purchase.
        </p>

        <h2>Medical Cannabis Conditions & Treatments</h2>
        <p>
          Medical cannabis has shown clinical promise for a wide range of conditions. Dispensary
          budtenders can help guide you toward the most appropriate delivery method and cannabinoid
          ratio for your specific needs. Common therapeutic uses include:
        </p>
        <ul>
          <li>Chronic pain management (opioid reduction)</li>
          <li>PTSD and anxiety relief</li>
          <li>Nausea from chemotherapy (antiemetic)</li>
          <li>Seizure reduction in epilepsy (CBD-based products)</li>
          <li>Muscle spasticity in MS patients</li>
          <li>Appetite stimulation in cancer and HIV/AIDS patients</li>
          <li>Glaucoma-related intraocular pressure reduction</li>
          <li>Sleep disorders and insomnia</li>
        </ul>

        <h2>Find a Medical Dispensary Near You</h2>
        <p>
          Dispensary.Bot helps you filter specifically for medical-only or dual-licensed dispensaries
          near your location. Filter by MMJ-accepted, patient reviews, hours, and product type. Many
          medical dispensaries also offer telehealth consultations and home delivery for qualifying
          patients.
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
