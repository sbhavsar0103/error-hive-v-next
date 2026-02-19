import { useState } from "react";
import AIBusinessGrowthHeader from "./AIBusinessGrowthHeader";
import AIBusinessServiceList from "./AIBusinessServiceList";
import { motion } from "framer-motion";

/** Service item type */
export interface AIBusinessService {
  id: number;
  title: string;
  description: string;
}

const services: AIBusinessService[] = [
  {
    id: 1,
    title: "Customized AI Solutions",
    description:
      "As a custom AI product development company, we build AI products tailored to unique business requirements...",
  },
  {
    id: 2,
    title: "Experienced AI Engineering Professionals",
    description:
      "We are a dedicated team of AI specialists, data scientists, and developers...",
  },
  {
    id: 3,
    title: "Sustainable & Scalable Architecture",
    description:
      "We build system architecture for sustainability, scalability, and long-term impact...",
  },
  {
    id: 4,
    title: "Seamless Cloud & On-Premise AI Deployment",
    description:
      "Our AI teams empower Generative AI product development for startups and enterprises...",
  },
  {
    id: 5,
    title: "Ethical AI Practices",
    description:
      "We design AI products following fairness, transparency, and compliance principles...",
  },
];

const AIBusinessGrowthSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
    >
      <section className="relative bg-[#060010] py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          <AIBusinessGrowthHeader />

          <AIBusinessServiceList
            services={services}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default AIBusinessGrowthSection;
