import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Web Scraping and Data Extraction Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Web Scraping & Data Extraction", "Structured datasets delivered through reliable pipelines");
}
