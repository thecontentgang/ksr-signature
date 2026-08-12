import React from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';

// --- Project Status Data ---
// Ensure these images are placed in your public folder.
const STATUS_IMAGES = [
  {
    id: 1,
    src: "/projectstatus/status-1.jpg",
    alt: "Block A & B Structure Progress",
    gridSpan: "col-span-1 md:col-span-2 lg:row-span-2", // Large feature top left
  },
  {
    id: 2,
    src: "/projectstatus/status-2.jpg",
    alt: "Clubhouse Foundation",
    gridSpan: "col-span-1",
  },
  {
    id: 3,
    src: "/projectstatus/status-3.jpg",
    alt: "Block C Ground Floor Slab",
    gridSpan: "col-span-1",
  },
  {
    id: 4,
    src: "/projectstatus/status-4.jpg",
    alt: "Retaining Wall Construction",
    gridSpan: "col-span-1 md:col-span-2", // Wide feature
  },
  {
    id: 5,
    src: "/projectstatus/status-5.jpg",
    alt: "Basement Excavation",
    gridSpan: "col-span-1",
  },
  {
    id: 6,
    src: "/projectstatus/status-6.jpg",
    alt: "Site Clearing & Leveling",
    gridSpan: "col-span-1 md:col-span-3 lg:col-span-1", // Fills remaining space
  }
];

export default function ProjectStatus() {
  const shouldReduceMotion = useReducedMotion();
  // Framer Motion variants for staggered fade-in
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15, delayChildren: shouldReduceMotion ? 0 : 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="project-status" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="font-anola text-4xl md:text-5xl lg:text-6xl text-ksr-primary mb-4"
            style={{ fontFamily: "'Anola', sans-serif" }}
          >
            Construction Updates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium"
          >
            Watch Signature 4 come to life. Stay updated with the latest on-site developments and construction milestones.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid (Pure Images Only) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {STATUS_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 border border-pearl ${image.gridSpan}`}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}