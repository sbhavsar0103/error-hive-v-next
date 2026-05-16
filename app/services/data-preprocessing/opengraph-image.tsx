import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Data Preprocessing and Cleaning Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Data Preprocessing & Cleaning", "Reliable datasets for analytics, AI, and automation");
}
