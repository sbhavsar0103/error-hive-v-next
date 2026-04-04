export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import TermsOfService from "../Pages/TermsofService/TermsofService";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service | Error Hive Solutions",
  description: "Terms of Service for Error Hive Solutions.",
  canonical: "/terms",
});

export default function TermsOfServicePage() {
  return <TermsOfService />
}