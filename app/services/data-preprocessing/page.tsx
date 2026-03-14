import DataPreprocessingHero from "@/app/Pages/Services/DataPreprocessing/DataPreprocessingHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Data Processing & Cleaning Services | Error Hive Solutions",
    description:
      "Transform messy and unstructured data into clean, reliable datasets ready for analytics, AI, and machine learning.",
    url: "https://error-hive.com/services/data-processing",
    siteName: "Error Hive Solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://error-hive.com/services/data-processing",
  },
};

export default function AboutPage() {
  return <DataPreprocessingHero />;
}