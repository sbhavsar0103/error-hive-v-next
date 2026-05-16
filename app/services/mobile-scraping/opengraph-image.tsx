import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Mobile App Data Extraction Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Mobile App Data Extraction", "Structured app data for market and competitor intelligence");
}
