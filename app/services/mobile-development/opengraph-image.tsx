import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Mobile App Development Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Mobile App Development", "Cross-platform iOS and Android apps for growth");
}
