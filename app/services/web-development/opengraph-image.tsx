import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Web App Development Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Web App Development", "Scalable React, Next.js, and Node.js applications");
}
