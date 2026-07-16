import { createOgImage, ogSize } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Error-Hive Solutions - AI Development Company India";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return createOgImage(
    "Error-Hive Solutions",
    "AI Development Company - India",
  );
}
