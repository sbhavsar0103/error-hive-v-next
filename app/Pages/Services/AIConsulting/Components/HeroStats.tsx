import { motion } from "framer-motion";
import React from "react";

type StatItem = [string, string];

const stats: StatItem[] = [
  ["500+", "Projects Delivered"],
  ["98%", "Client Satisfaction"],
  ["50+", "AI Experts"],
];

const HeroStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      // className="mt-12 grid grid-cols-3 gap-8"
      className="mt-8 sm:mt-12 grid grid-cols-3 xs:grid-cols-3 gap-4 sm:gap-8 text-center"
    >
      {stats.map(([value, label], i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          {/* <div className="text-3xl font-bold text-amber-400 mb-1"> */}
          <div className="font-bold text-amber-400 mb-1" style={{ fontSize: "clamp(1.2rem, 4vw, 1.9rem)" }}>
            {value}
          </div>
          {/* <div className="text-amber-200/70 text-sm"> */}
          <div className="text-amber-200/70" style={{ fontSize: "clamp(0.75rem, 2.3vw, 0.9rem)" }}>
            {label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;