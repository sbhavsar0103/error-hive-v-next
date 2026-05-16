"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react";

import FAQ from "@/app/Components/FAQ/FAQ";
import FloatingParticles from "@/app/Components/FloatingParticles/FloatingParticles";
import SpotlightCard from "@/app/Components/SpotlightCard/SpotlightCard";
import type { HealthcareService } from "./healthcareServicesData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const serviceIcons = [ClipboardCheck, ShieldCheck, FileCheck2, Workflow];
const benefitIcons = [CircleDollarSign, Activity, BadgeCheck];

function HighlightedTitle({
  title,
  highlight,
}: {
  title: string;
  highlight: string;
}) {
  const [before, after] = title.split(highlight);

  if (!before || after === undefined) {
    return <>{title}</>;
  }

  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
        {highlight}
      </span>
      {after}
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <span className="mb-4 inline-block rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium uppercase tracking-wider text-amber-500">
        {eyebrow}
      </span>
      <h2 className="font-bold leading-[1.1] tracking-tight text-white text-[clamp(1.8rem,5vw,3.5rem)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-gray-400 leading-relaxed text-[clamp(0.95rem,2.6vw,1.1rem)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CtaButtons({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 font-semibold text-[#060010] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      >
        {primary}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-xl border border-amber-500/20 bg-white/5 px-8 py-4 font-semibold text-amber-100 transition-all duration-300 hover:border-amber-500/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
      >
        {secondary}
      </Link>
    </div>
  );
}

export default function HealthcareServicePage({
  service,
}: {
  service: HealthcareService;
}) {
  return (
    <section className="bg-[#060010] text-white">
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20 sm:pt-36 lg:flex lg:items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
        <FloatingParticles />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div variants={fadeUp}>
            <span className="mb-5 inline-flex rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium uppercase tracking-wider text-amber-500">
              {service.eyebrow}
            </span>
            <h1 className="mb-6 font-bold leading-[1.08] tracking-tight text-white text-[clamp(2rem,6vw,4.5rem)]">
              <HighlightedTitle title={service.heroTitle} highlight={service.heroHighlight} />
            </h1>
            <p className="max-w-2xl text-amber-200/75 leading-relaxed text-[clamp(1rem,2.8vw,1.25rem)]">
              {service.description}
            </p>
            <div className="mt-8">
              <CtaButtons primary={service.primaryCta} secondary={service.secondaryCta} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-3xl border border-amber-500/20 bg-[#1a0a22]/60 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-amber-500/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-wider text-amber-500">Operational Control</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Healthcare revenue desk</h2>
                </div>
                <div className="rounded-2xl bg-amber-500/10 p-4">
                  <HeartPulse className="h-8 w-8 text-amber-500" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.trustIndicators.map((indicator, index) => (
                  <div key={indicator} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#060010]">
                      {index % 2 === 0 ? (
                        <ShieldCheck className="h-5 w-5 text-amber-500" />
                      ) : (
                        <BadgeCheck className="h-5 w-5 text-amber-500" />
                      )}
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-amber-100/80">{indicator}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-500/10 bg-[#060010]/70 p-5">
                <div className="flex items-center gap-3 text-amber-500">
                  <Stethoscope className="h-5 w-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Compliance-aware delivery</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  Built around documentation clarity, workflow visibility, and payer-ready operating discipline for healthcare teams.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <hr />

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {service.metrics.map((metric) => (
              <SpotlightCard key={metric.label} className="h-full bg-white/5 text-center">
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-amber-500 sm:text-4xl">{metric.value}</div>
                  <p className="mt-2 text-sm font-medium text-amber-100/70">{metric.label}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
      <hr />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <SpotlightCard className="h-full">
            <div className="relative z-10">
              <SectionHeader
                align="left"
                eyebrow="Pain Points"
                title="Where healthcare billing operations lose momentum"
              />
              <div className="space-y-4">
                {service.painPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Activity className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <p className="text-gray-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="h-full">
            <div className="relative z-10">
              <SectionHeader
                align="left"
                eyebrow="Solution"
                title="How we make the workflow measurable"
              />
              <div className="space-y-4">
                {service.solutions.map((solution) => (
                  <div key={solution} className="flex gap-3 rounded-2xl border border-amber-500/10 bg-amber-500/[0.04] p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <p className="text-gray-300 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <hr />

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Breakdown"
            title={`What ${service.shortTitle} includes`}
            description="A focused operating model covering the workflows, controls, and reporting healthcare teams need to move with confidence."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((capability, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <SpotlightCard key={capability.title} className="h-full">
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 w-fit rounded-xl bg-[#060010] p-3">
                      <Icon className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-amber-500">{capability.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{capability.description}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      <hr />

      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8 lg:sticky lg:top-[15rem] lg:self-start">
            <SectionHeader
              align="left"
              eyebrow="Workflow"
              title="A transparent process from assessment to optimization"
              description="Every engagement is organized around clear ownership, measurable checkpoints, and the operational details healthcare teams need to trust the process."
            />
            <CtaButtons primary="Book a Consultation" secondary="Talk to Our Team" />
          </div>

          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-amber-500/10 bg-neutral-900 p-6 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-[#060010]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Benefits"
            title="Business outcomes that matter to healthcare leaders"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <SpotlightCard key={benefit.title} className="h-full text-center">
                  <div className="relative z-10 flex h-full flex-col items-center">
                    <div className="mb-5 rounded-xl bg-[#060010] p-3">
                      <Icon className="h-7 w-7 text-amber-500" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-amber-500">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      <hr />

      <section className="relative overflow-hidden px-6 py-20 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Choose Us"
              title="Built for healthcare teams that need precision and trust"
              description="We combine operational rigor with a software-minded approach to visibility, workflow design, and continuous improvement."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.differentiators.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="mb-4 h-5 w-5 text-amber-500" />
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Industry Expertise"
            title="Healthcare specialization across operational workflows"
            description="The page content, reporting, and engagement model are tailored to healthcare organizations where documentation, access, billing, and compliance all intersect."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.expertise.map((item) => (
              <div key={item} className="rounded-2xl border border-amber-500/10 bg-white/[0.04] p-5 text-center">
                <Building2 className="mx-auto mb-4 h-6 w-6 text-amber-500" />
                <p className="font-medium text-amber-100/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-amber-500/20  via-white/[0.04] to-[#0a0520] p-8 text-center shadow-2xl shadow-black/30 sm:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-500">
            Consultation CTA
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to strengthen your healthcare operations?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-amber-100/70 leading-relaxed">
            Share your billing, credentialing, patient operations, or compliance goals and we will help map the highest-impact next steps.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons primary="Schedule a Healthcare Call" secondary="Contact Us" />
          </div>
        </div>
      </section>

      <hr/>

      <FAQ items={service.faqs} />
      <div className="border-t border-amber-500/20" />
    </section>
  );
}
