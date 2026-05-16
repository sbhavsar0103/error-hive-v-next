import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Custom Software Development Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Custom Software Development", "Production-ready applications built around your business");
}
