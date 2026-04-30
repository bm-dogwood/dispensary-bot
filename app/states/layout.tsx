import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dispensary.bot"),
  title: {
    default: "Dispensary.Bot — Find Dispensaries Near You",
    template: "%s | Dispensary.Bot",
  },
  description:
    "Dispensary.Bot helps you find the best cannabis dispensaries near you — recreational and medical. Compare menus, deals, and hours instantly.",
  keywords: [
    "dispensary near me",
    "recreational dispensary",
    "medical dispensary near me",
    "cannabis dispensary",
    "weed dispensary",
    "marijuana dispensary",
  ],
  openGraph: {
    type: "website",
    siteName: "Dispensary.Bot",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function StatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dispensary.Bot",
    url: "https://dispensary.bot",
    description:
      "Find cannabis dispensaries near you — recreational and medical dispensaries, menus, deals, and hours.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://dispensary.bot/finder",
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {children}
    </>
  );
}
