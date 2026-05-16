import { Metadata } from 'next';

export const SITE_URL = "https://www.error-hive.com";

export function canonical(path: string) {
  return { canonical: `${SITE_URL}${path}` };
}

export function constructMetadata({
  title = "Error Hive Solutions | AI Development Company in India",
  description = "Error Hive Solutions is an AI Development Company in India specializing in LLM Development, Generative AI, AI Automation, Web Development, and Custom Software Solutions for startups and enterprises.",
  image = "/og-image.png",
  icons = "/logo/Iconmark%20Main.svg",
  noIndex = false,
  canonical: canonicalPath = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  return {
    title,
    description,
    authors: [{ name: "Error Hive Solutions" }],
    creator: "Error Hive Solutions",
    publisher: "Error Hive Solutions",
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Error Hive Solutions",
      locale: "en_IN",
      type: "website",
      ...(canonicalPath && { url: `${SITE_URL}${canonicalPath}` }),
    },
    twitter: {
      title,
      description,
      images: [image],
      card: "summary_large_image",
    },
    icons,
    metadataBase: new URL(SITE_URL),
    ...(canonicalPath && {
      alternates: canonical(canonicalPath),
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...(!noIndex && {
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    }),
  };
}
