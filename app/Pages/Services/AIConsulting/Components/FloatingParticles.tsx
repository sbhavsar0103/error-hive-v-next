import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  left: number;
  top: number;
  opacity: number;
};

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(generated);
  }, []);

  if (!particles.length) return null; // prevent SSR mismatch

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: particle.opacity }}
          transition={{ duration: 1.5, delay: i * 0.05 }}
          className="absolute w-1 h-1 bg-amber-400 rounded-full animate-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
