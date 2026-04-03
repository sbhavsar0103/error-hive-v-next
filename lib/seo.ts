import { Metadata } from 'next';

export function constructMetadata({
  title = "Error Hive Solutions | AI Development Company in India",
  description = "Error Hive Solutions is an AI Development Company in India specializing in LLM Development, Generative AI, AI Automation, Web Development, and Custom Software Solutions for startups and enterprises.",
  image = "/og-image.png",
  icons = "/favicon.ico",
  noIndex = false,
  canonical = "",
  keywords = [],
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonical?: string;
  keywords?: string[];
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      ...keywords,
      "AI Development Company India",
      "LLM Development",
      "Generative AI Development",
      "AI Automation Services",
      "Custom Software Development",
      "Web Development Company India",
    ],
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
      ...(canonical && { url: `https://error-hive.com${canonical}` }),
    },
    twitter: {
      title,
      description,
      images: [image],
      card: "summary_large_image",
    },
    icons,
    metadataBase: new URL('https://error-hive.com'),
    ...(canonical && {
      alternates: {
        canonical: `https://error-hive.com${canonical}`,
      },
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
