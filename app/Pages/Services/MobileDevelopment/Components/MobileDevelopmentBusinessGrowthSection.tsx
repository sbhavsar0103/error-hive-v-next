'use client';
import { useState } from "react";

import MobileDevelopmentHeader from "./MobileDevelopmentHeader";
import MobileDevelopmentServiceList from "./MobileDevelopmentServiceList";

export default function MobileDevelopmentBusinessGrowthSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "User-Centric App Strategy",
      description:
        "We design mobile applications focused on user experience, performance, and scalability. Our team ensures your Android and iOS apps are intuitive, engaging, and aligned with your business goals from day one.",
    },
    {
      id: 2,
      title: "Scalable & High-Performance Architecture",
      description:
        "Our mobile app development approach ensures fast loading speed, secure backend integration, and seamless performance across devices. We build scalable applications that grow with your business and handle increasing user demand effortlessly.",
    },
    {
      id: 3,
      title: "Revenue & Engagement Optimization",
      description:
        "From in-app engagement strategies to conversion-focused UI/UX, we develop mobile applications that increase retention rates, boost customer loyalty, and maximize business revenue in today’s mobile-first market.",
    },
  ];

  return (
    <section
      id="mobile-app-business-growth"
      className="relative bg-[#060010] py-20 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-md sm:max-w-3xl lg:max-w-4xl mx-auto">
        <MobileDevelopmentHeader />

        <MobileDevelopmentServiceList
          services={services}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </div>
    </section>
  );
}