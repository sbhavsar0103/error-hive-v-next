import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "UI/UX Design and Development Services";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage("UI/UX Design & Development", "User-centered digital experiences that convert");
}
