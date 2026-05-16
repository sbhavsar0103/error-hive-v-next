import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Business Software Consulting Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("Business Software Consulting", "Technology planning and execution for growing teams");
}
