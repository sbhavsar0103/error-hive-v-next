import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Contact Error-Hive Solutions";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Book a Free Strategy Call", "Discuss your AI, software, or data project with our team");
}
