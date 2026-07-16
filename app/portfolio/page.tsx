import type { Metadata } from "next";
import PortfolioHero from "@/app/Pages/Portfolio/PortfolioHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Our Portfolio & Work | Error-Hive Solutions",
  description:
    "Explore our portfolio of scalable web applications, generative AI systems, mobile apps, and custom software delivered for global startups and enterprises.",
  canonical: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioHero />;
}
