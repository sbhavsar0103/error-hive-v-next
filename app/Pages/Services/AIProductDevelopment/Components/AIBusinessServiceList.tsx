import React from "react";
import AIBusinessServiceItem, {
  AIBusinessService,
} from "./AIBusinessServiceItem";
import { motion } from "framer-motion";

interface AIBusinessServiceListProps {
  services: AIBusinessService[];
  hoveredId: number | null;
  setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
}

const AIBusinessServiceList: React.FC<AIBusinessServiceListProps> = ({
  services,
  hoveredId,
  setHoveredId,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <div className="space-y-6 md:space-y-8">
        {services.map((service) => (
          <AIBusinessServiceItem
            key={service.id}
            service={service}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AIBusinessServiceList;
