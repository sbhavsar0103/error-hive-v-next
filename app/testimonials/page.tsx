import type { Metadata } from "next";
import TestimonialsHero from "@/app/Pages/Testimonials/TestimonialsHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Client Testimonials | Error-Hive Solutions",
  description:
    "See what our clients say about working with Error-Hive Solutions. Real feedback from businesses we've helped with AI development, web apps, and data extraction.",
  canonical: "/testimonials",
});

export default function TestimonialsHeroPage() {
  return <TestimonialsHero />;
}
