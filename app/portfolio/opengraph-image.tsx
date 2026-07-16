import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Error-Hive Solutions Portfolio";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Portfolio & Work", "AI, automation, scraping, and software case studies");
}
