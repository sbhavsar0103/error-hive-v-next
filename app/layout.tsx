import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/Components/NavBar/NavBar";
import Footer from "@/app/Components/Footer/Footer";
import CurvedLoop from "@/app/Components/CurvedLoop/CurvedLoop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://error-hive.com"),
  title: {
    default: "Error Hive Solutions | AI Development Company in India",
    template: "%s | Error Hive Solutions",
  },
  description:
    "Error Hive Solutions is an AI Development Company in India specializing in LLM Development, Generative AI, AI Automation, Web Development, and Custom Software Solutions for startups and enterprises.",
  keywords: [
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

  openGraph: {
    title: "Error Hive Solutions | AI Development Company in India",
    description:
      "AI Development Company delivering LLM Development, Generative AI, Automation & Custom Software Solutions.",
    url: "https://error-hive.com",
    siteName: "Error Hive Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Error Hive Solutions - AI Development Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    title: "Error Hive Solutions | AI Development Company",
    description:
      "We build AI Products, LLM Solutions, Automation Systems & Scalable Software.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://error-hive.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Error Hive Solutions",
              url: "https://error-hive.com",
              logo: "https://error-hive.com/logo.png",
              description:
                "AI Development Company in India specializing in LLM Development, Generative AI, Automation and Custom Software Solutions.",
              sameAs: [
                "https://www.linkedin.com/company/error-hive",
                "https://twitter.com/errorhive",
              ],
            }),
          }}
        />
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {/* CURVED LOOP SECTION */}
        <section className="bg-[#060010] flex flex-col items-center justify-center overflow-hidden">
          <CurvedLoop
            marqueeText="Error - Hive Solutions ✦"
            speed={2}
            curveAmount={120}
            direction="right"
            interactive={true}
          />
        </section>

        <Footer />
      </body>
    </html>
  );
}