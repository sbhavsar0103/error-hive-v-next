"use client";

import React from "react";
import { motion } from "framer-motion";

type StatItem = [string, string];

const stats: StatItem[] = [
  ["500+", "Projects Delivered"],
  ["98%", "Client Satisfaction"],
  ["5+ Years", "Industry Experience"],
];

const HeroStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="container mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center z-20 relative"
    >
      {stats.map(([value, label], i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="py-8 px-6 bg-white/5 border border-amber-500/10 rounded-2xl backdrop-blur-sm"
        >
          <div className="font-bold text-amber-500 mb-2 text-3xl sm:text-4xl">
            {value}
          </div>
          <div className="text-amber-100/70 text-sm sm:text-base font-medium">
            {label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;