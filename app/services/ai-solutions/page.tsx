import AISolutionsHero from "@/app/Pages/Services/AISolutions/AISolutionsHero";

export const metadata = {
  title: "AI Solutions | Error Hive",
  description:
    "Transform your business with AI-powered solutions including automation, machine learning models, and intelligent data processing by Error Hive.",
  keywords: [
    "AI solutions",
    "machine learning services",
    "AI automation",
    "business AI integration",
  ],
  openGraph: {
    title: "AI Solutions | Error Hive",
    description:
      "AI-powered business automation and machine learning solutions.",
    url: "https://error-hive.com/services/ai-solutions",
    siteName: "Error Hive",
    type: "website",
  },
  twitter: {
    title: "AI Solutions | Error Hive",
    description:
      "AI-powered business automation and machine learning solutions.",
  },
};

export default function AISolutionsHeroPage() {
  return <AISolutionsHero />;
}