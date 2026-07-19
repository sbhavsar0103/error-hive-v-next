'use client';

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Linkedin, Instagram } from "lucide-react";
import FloatingParticles from "../Components/FloatingParticles/FloatingParticles";

export default function ThankYouPage() {
  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
          delayChildren: 0.3,
        },
      },
    }),
    []
  );

  return (
    <section>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center px-6 py-20">
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <FloatingParticles />

        {/* Centered content */}
        <div className="relative z-10 w-full flex justify-center px-6">
          <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mx-auto w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <CheckCircle2 className="w-8 h-8 text-amber-500" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.8rem,5vw,3.5rem)]">
                Thank You! <br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Your Message Has Been Sent
                </span>
              </h1>
              <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-amber-200/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                We've received your request and our team will get back to you within 24 hours to discuss your project, timeline, and the next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://calendly.com/contact-error-hive/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white/5 border border-amber-500/20 text-amber-50 font-semibold transition-all hover:bg-white/10 hover:border-amber-500/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Return Home
                </Link>
              </div>

              <div className="pt-8 flex flex-col items-center space-y-4">
                <p className="text-amber-200/50 text-sm">Follow us on social media</p>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/company/error-hive-solutions/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/errorhivesolutions", label: "Instagram" }
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/20 bg-white/5 text-amber-200/70 transition-all hover:border-amber-500 hover:text-amber-500 hover:scale-110"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div >
      <hr />
    </section>
  );
}
