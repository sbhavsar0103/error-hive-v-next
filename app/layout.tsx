import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/Components/NavBar/NavBar";
import Footer from "@/app/Components/Footer/Footer";
import CurvedLoop from "@/app/Components/CurvedLoop/CurvedLoop";
import { constructMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Error-Hive Solutions",
  url: "https://www.error-hive.com",
  logo: "https://www.error-hive.com/og-image.png",
  description:
    "Error-Hive Solutions is a leading AI development company in India. We build LLM applications, generative AI systems, web scraping pipelines, and custom software for startups and enterprises.",
  email: "contact@error-hive.com",
  telephone: "+919408882844",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "507 Krupal Pathshala, Nr Pintoo Apparels, Shivranjani Cross Road, 132Ft. Ring Road, Satellite Rd, opp. HP Petrol Pump",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/error-hive-solutions/",
    "https://www.instagram.com/errorhivesolutions",
  ],
  areaServed: ["IN", "US", "GB", "AE"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="overflow-x-hidden">
      <head>
        <SchemaMarkup schema={organizationSchema} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-full flex flex-col min-h-screen`}>
        <Navbar />

        <main className="flex-1 w-full overflow-x-hidden">{children}</main>

        {/* CURVED LOOP SECTION */}
        <section className="surface-base flex flex-col items-center justify-center overflow-hidden">
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
