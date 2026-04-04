export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Error Hive Solutions",
  description: "Privacy Policy for Error Hive Solutions.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />  
}