import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center"
    >
      <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/contact"
          className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
        >
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
