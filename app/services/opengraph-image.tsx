import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Error Hive Solutions Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("AI & Software Services", "LLM, web, mobile, data, and custom software development");
}
