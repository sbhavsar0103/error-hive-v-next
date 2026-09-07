'use client';

import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const salesPhone = process.env.NEXT_PUBLIC_SALES_PHONE ?? "+91 XXX XXX XXXX";

const coreServices = [
  { name: "AI SaaS Development", href: "/services/ai-solutions" },
  { name: "Custom Web Applications", href: "/services/web-development" },
  { name: "Data Automation & Web Scraping", href: "/services/web-scraping-services" },
  { name: "MVP Development", href: "/services/custom-software-development" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Testimonials", href: "/testimonials" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/error-hive-solutions/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/errorhivesolutions",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#060010] text-gray-300">
      <div className="mx-auto max-w-[90vw] px-6 py-16">
        <div className="rounded-[2rem] bg-amber-500 px-8 py-10 text-[#060010]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#060010]/65">
                Build With Error-Hive Solutions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Book a Free Strategy Call and get a practical roadmap for your next product.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#060010]/75 sm:text-lg">
                We help startups, SaaS founders, SMBs, and restaurant businesses launch AI-powered software,
                web apps, and automation systems with clear scope and faster execution.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://calendly.com/contact-error-hive/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#060010] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          {/* LEFT COLUMN: Logo + Core Services / Quick Links */}
          <div className="flex flex-col">
            <div>
              <Link href="/" className="block w-fit" aria-label="Error-Hive Solutions home">
                <Image
                  src="/logo/Logo%20Main%20White%20Text%20(Horizontal).svg"
                  alt="Error-Hive Solutions"
                  width={224}
                  height={56}
                  unoptimized
                  sizes="224px"
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Core Services</h3>
                <div className="border-b border-gray-800/40 lg:hidden mt-4 mb-4" />
                <ul className="mt-6 space-y-3">
                  {coreServices.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-400 transition-colors duration-200 hover:text-amber-500"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <div className="border-b border-gray-800/40 lg:hidden mt-4 mb-4" />
                <ul className="mt-6 space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 transition-colors duration-200 hover:text-amber-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Email at top-right, then Offices */}
          <div className="lg:pl-8 lg:border-l lg:border-gray-800/40">
            <div className="flex justify-start lg:justify-end">
              <div className="flex gap-3 items-center">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors duration-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}

                <Link
                  href="mailto:contact@error-hive.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors duration-300 hover:border-amber-500 hover:text-amber-500"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-800/40 lg:hidden mt-4 mb-4" />

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Offices</h3>

              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3">
                    <Image src="/SVG/Flags/US.svg" alt="United States flag" width={28} height={20} unoptimized className="h-6 w-6 object-contain" />
                    <div>
                      <p className="font-semibold text-white">United States</p>
                      <p className="text-sm text-gray-400">HQ</p>
                    </div>
                  </div>

                  <div className="border-b border-gray-800/40 lg:hidden mt-3 mb-3" />

                  <ul className="mt-4 space-y-2 text-gray-400">
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0 text-amber-500" />
                      <Link href="tel:+16592720538" className="transition-colors duration-200 hover:text-amber-500">+1 (659) 272-0538</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span>1128 Taunton Court, Schaumburg, IL 60193, United States</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <Image src="/SVG/Flags/IN.svg" alt="India flag" width={28} height={20} unoptimized className="h-6 w-6 object-contain" />
                    <div>
                      <p className="font-semibold text-white">India</p>
                      <p className="text-sm text-gray-400">Office</p>
                    </div>
                  </div>

                  <div className="border-b border-gray-800/40 lg:hidden mt-3 mb-3" />

                  <ul className="mt-4 space-y-2 text-gray-400">
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0 text-amber-500" />
                      <Link href="tel:+919408882844" className="transition-colors duration-200 hover:text-amber-500">+91 9408882844</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span>507 Krupal Pathshala, Nr Pintoo Apparels, Shivranjani Cross Road 132Ft. Ring Road, Satellite Rd, opp. HP Petrol Pump, Ahmedabad, Gujarat 380015</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800/50 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Error - Hive Solutions. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 transition-colors duration-200 hover:text-amber-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 transition-colors duration-200 hover:text-amber-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
