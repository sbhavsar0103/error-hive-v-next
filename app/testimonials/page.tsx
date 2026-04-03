import type { Metadata } from "next";
import TestimonialsHero from "@/app/Pages/Testimonials/TestimonialsHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Client Testimonials | Error Hive Solutions",
  description:
    "Read what our clients have to say about Error Hive Solutions. We take pride in delivering top-tier AI and custom software solutions that drive real results.",
  keywords: [
    "Error Hive Reviews",
    "Client Testimonials",
    "Customer Feedback",
    "Software Development Reviews"
  ],
  canonical: "/testimonials",
});

export default function TestimonialsHeroPage() {
  return <TestimonialsHero />;
}
