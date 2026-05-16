import type { Metadata } from "next";
import AISolutionsHero from "@/app/Pages/Services/AISolutions/AISolutionsHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createFAQSchema } from "@/lib/faqSchema";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "LLM & Generative AI Development Services India | Error Hive Solutions",
  description:
    "Custom LLM development, generative AI applications, AI automation, and machine learning model deployment for startups and enterprises. Based in India, serving globally.",
  canonical: "/services/ai-solutions",
});

const aiFaqs = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We build LLM applications, generative AI tools, AI chatbots, machine learning models, predictive analytics systems, and AI automation pipelines for startups and enterprises.",
  },
  {
    question: "How long does an AI development project take?",
    answer:
      "Most AI projects range from 4 to 12 weeks depending on complexity, data availability, and integration requirements.",
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer:
      "We work with both. Many of our clients are early-stage startups building their first AI product, as well as mid-size companies adding AI to existing systems.",
  },
  {
    question: "What is your development process for AI projects?",
    answer:
      "We start with a discovery session to understand your goals, then assess your data, design the AI architecture, build and test the model, and deploy it to production with ongoing monitoring.",
  },
];

const serviceSchema = createServiceSchema({
  name: "LLM & Generative AI Development",
  description:
    "Custom LLM development, generative AI applications, AI automation, and machine learning model deployment for startups and enterprises.",
  url: "https://www.error-hive.com/services/ai-solutions",
  serviceType: "AI Development",
});

export default function AISolutionsHeroPage() {
  return (
    <>
      <SchemaMarkup schema={[serviceSchema, createFAQSchema(aiFaqs)]} />
      <AISolutionsHero />
    </>
  );
}
