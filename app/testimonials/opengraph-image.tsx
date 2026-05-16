import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Error Hive Solutions Client Testimonials";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Client Testimonials", "What clients say about working with Error Hive Solutions");
}
