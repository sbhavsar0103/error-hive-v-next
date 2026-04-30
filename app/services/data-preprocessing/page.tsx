import type { Metadata } from "next";
import DataPreprocessingHero from "@/app/Pages/Services/DataPreprocessing/DataPreprocessingHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Data Preprocessing & Cleaning Services | Error Hive Solutions",
  description:
    "Professional data preprocessing, cleaning, and structuring services for machine learning, AI, and business intelligence projects. Delivered as clean, analysis-ready datasets.",
  keywords: [
    "Data Processing Services",
    "Data Cleaning Services",
    "Data Preprocessing Services",
    "Data Preparation for Machine Learning",
    "Data Transformation Services",
    "Data Quality Management",
    "Data Normalization",
    "Data Analytics Data Preparation",
  ],
  canonical: "/services/data-preprocessing",
});

export default function AboutPage() {
  return <DataPreprocessingHero />;
}