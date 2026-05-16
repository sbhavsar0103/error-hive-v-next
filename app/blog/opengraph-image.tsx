import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Error Hive Solutions Blog";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Error Hive Blog", "AI, automation, scraping, and software engineering insights");
}
