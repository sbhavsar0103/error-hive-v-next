import type { Metadata } from "next";
import DataPreprocessingHero from "@/app/Pages/Services/DataPreprocessing/DataPreprocessingHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Data Processing & Cleaning Services | Data Preprocessing Solutions",
  description:
    "Professional Data Processing & Cleaning services to transform raw data into structured, high-quality datasets. We handle data cleansing, normalization, validation, and preparation for analytics, AI, and machine learning projects.",
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