import type { Metadata } from "next";
import WebDevelopmentHero from "@/app/Pages/Services/WebDevelopment/WebDevelopmentHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createFAQSchema } from "@/lib/faqSchema";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Web App Development Services India | Error Hive Solutions",
  description:
    "Scalable and modern web application development using React, Next.js, and Node.js. From MVPs to enterprise platforms, we deliver fast and reliable web solutions.",
  canonical: "/services/web-development",
});

const webDevelopmentFaqs = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "We primarily use React, Next.js, Node.js, and TypeScript for front-end and back-end development, with PostgreSQL or MongoDB for databases.",
  },
  {
    question: "Can you rebuild my existing website?",
    answer:
      "Yes. We handle full website migrations, redesigns, and performance overhauls for existing businesses.",
  },
];

const serviceSchema = createServiceSchema({
  name: "Web App Development Services",
  description:
    "Scalable and modern web application development using React, Next.js, Node.js, and TypeScript for MVPs, SaaS products, and enterprise platforms.",
  url: "https://www.error-hive.com/services/web-development",
  serviceType: "Web Development",
});

export default function WebDevelopmentPage() {
  return (
    <>
      <SchemaMarkup schema={[serviceSchema, createFAQSchema(webDevelopmentFaqs)]} />
      <WebDevelopmentHero />
    </>
  );
}
