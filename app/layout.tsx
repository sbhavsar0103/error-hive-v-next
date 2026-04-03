import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/Components/NavBar/NavBar";
import Footer from "@/app/Components/Footer/Footer";
import CurvedLoop from "@/app/Components/CurvedLoop/CurvedLoop";
import { constructMetadata } from "@/lib/seo";
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
                "https://www.linkedin.com/company/error-hive"
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