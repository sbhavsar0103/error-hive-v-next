import { Database, FileText, Search, ScanText, FileCheck, Code, LucideIcon } from "lucide-react";

interface DataPreprocessingServicesMenu {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: DataPreprocessingServicesMenu[] = [
  {
    id: 1,
    title: "Data Cleaning & Deduplication",
    description:
      "We remove duplicate, inconsistent, and corrupted records to ensure high-quality datasets. Our data cleaning process improves accuracy and reliability for analytics, reporting, and machine learning models.",
    icon: Database,
  },
  {
    id: 2,
    title: "Data Transformation & Formatting",
    description:
      "Transform raw datasets into structured formats suitable for analytics and AI pipelines. We standardize formats, convert data types, and ensure consistency across multiple data sources.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Missing Data Handling",
    description:
      "Identify and manage missing or incomplete data using statistical techniques and intelligent imputation methods to ensure data integrity and improve model performance.",
    icon: Search,
  },
  {
    id: 4,
    title: "Text & Document Data Processing",
    description:
      "Process unstructured text and document data using NLP and OCR techniques. Extract meaningful information from PDFs, images, and scanned files for analytics and automation.",
    icon: ScanText,
  },
  {
    id: 5,
    title: "Data Validation & Quality Assurance",
    description:
      "Implement validation rules and automated quality checks to ensure your datasets remain accurate, consistent, and reliable across all systems and applications.",
    icon: FileCheck,
  },
  {
    id: 6,
    title: "Dataset Preparation for AI & Analytics",
    description:
      "Prepare optimized datasets for machine learning models, business intelligence tools, and data analytics platforms to enable faster insights and better decision-making.",
    icon: Code,
  },
];

export default services;