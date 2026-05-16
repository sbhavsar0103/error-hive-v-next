import type { Metadata } from "next";
import DataPreprocessingHero from "@/app/Pages/Services/DataPreprocessing/DataPreprocessingHero";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata: Metadata = constructMetadata({
  title: "Data Preprocessing & Cleaning Services | Error Hive Solutions",
  description:
    "Professional data preprocessing, cleaning, and structuring services for machine learning, AI, and business intelligence projects. Delivered as clean, analysis-ready datasets.",
  canonical: "/services/data-preprocessing",
});

const serviceSchema = createServiceSchema({
  name: "Data Preprocessing & Cleaning",
  description:
    "Professional data preprocessing, cleaning, and structuring services for machine learning, AI, and business intelligence projects.",
  url: "https://www.error-hive.com/services/data-preprocessing",
  serviceType: "Data Preprocessing",
});

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <DataPreprocessingHero />
    </>
  );
}
