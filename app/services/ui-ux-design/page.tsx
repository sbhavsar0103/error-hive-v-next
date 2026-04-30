import type { Metadata } from "next";
import UIUXDevelopmentHero from "@/app/Pages/Services/UIUXDevelopment/UIUXDevelopmentHero";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "UI/UX Design & Development Services India | Error Hive Solutions",
  description:
    "User-centered UI/UX design and front-end development. We create engaging, high-converting digital experiences that align with your brand and business goals.",
  keywords: [
    "UI UX design services",
    "user experience design",
    "user interface development",
    "website UI UX design",
    "Error Hive UI UX services"
  ],
  canonical: "/services/ui-ux-design",
});

export default function UIUXDevelopmentPage() {
  return <UIUXDevelopmentHero />;
}