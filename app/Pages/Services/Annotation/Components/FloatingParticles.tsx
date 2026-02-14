"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  top: string;
  opacity: number;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 20 }).map(
      (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.6 + 0.2,
      })
    );

    setParticles(generatedParticles);
  }, []);

  // Prevent SSR mismatch entirely
  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: p.opacity }}
          transition={{ duration: 1.5, delay: i * 0.05 }}
          className="absolute w-1 h-1 bg-amber-400 rounded-full animate-particle"
          style={{
            left: p.left,
            top: p.top,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;