import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "LLM and Generative AI Development Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("LLM & Generative AI Development", "Custom AI systems for startups and enterprises");
}
