import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.04, y: -4 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link
          href="/contact"
          className="
            group relative
            bg-gradient-to-r from-amber-400 to-amber-600
            text-[#060010]
            px-10 py-4
            rounded-xl
            font-semibold
            flex items-center gap-2
            shadow-lg shadow-amber-500/20
            transition-all duration-300
            hover:shadow-amber-500/40
            focus:outline-none focus:ring-2 focus:ring-amber-500/50
          "
        >
          {/* Glow Layer */}
          <span className="absolute inset-0 rounded-xl bg-amber-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}