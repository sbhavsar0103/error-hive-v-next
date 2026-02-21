import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroButtons: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col sm:flex-row gap-4 mt-8"
    >
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
        <Link href="/contact" className="group bg-amber-500 text-black  px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold  flex items-center justify-center gap-2  shadow-md hover:shadow-lg  transition-all duration-300" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}> Get Started
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroButtons;