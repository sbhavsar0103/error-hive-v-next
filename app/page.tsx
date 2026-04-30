import type { Metadata } from "next";
import BannerHero from "@/app/Pages/Home/Home";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "AI Development Company in India | LLM & Generative AI Experts | Error Hive Solutions",
  description:
    "Error Hive Solutions is a leading AI development company in India. We build LLM applications, generative AI systems, web scraping pipelines, and custom software for startups and enterprises.",
  keywords: [
    "AI Development Company",
    "AI Company India",
    "LLM Development Company",
    "Generative AI Development",
    "AI Automation Services",
  ],
  canonical: "/",
});

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Error Hive Solutions",
      "url": "https://www.error-hive.com",
      "email": "contact@error-hive.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "description": "AI development company in Ahmedabad, India offering LLM development, generative AI, web scraping, and custom software services."
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Error Hive Solutions",
      "url": "https://www.error-hive.com",
      "logo": "https://www.error-hive.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@error-hive.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": []
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <BannerHero />
    </>
  );
}