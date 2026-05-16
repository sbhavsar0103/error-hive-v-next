import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "About Error Hive Solutions";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("About Error Hive Solutions", "AI and software product engineering team in India");
}
