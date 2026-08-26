import { motion, type Variants, useReducedMotion } from 'framer-motion';

// --- Project Status Data (20 Images with Bento Grid Sizing) ---
// Mixing squares, vertical (tall) rectangles, and horizontal (wide) rectangles
const STATUS_IMAGES = [
  {
    id: 1,
    src: "/project-status/status-1.jpeg",
    alt: "Construction Update 1",
    gridSpan: "col-span-1 md:col-span-2 row-span-2", // Large Feature Square/Rectangle
  },
  {
    id: 2,
    src: "/project-status/status-2.jpeg",
    alt: "Construction Update 2",
    gridSpan: "col-span-1 row-span-2", // Tall Vertical Portrait
  },
  {
    id: 3,
    src: "/project-status/status-3.jpeg",
    alt: "Construction Update 3",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 4,
    src: "/project-status/status-4.jpeg",
    alt: "Construction Update 4",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 5,
    src: "/project-status/status-5.jpeg",
    alt: "Construction Update 5",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Wide Horizontal Rectangle
  },
  {
    id: 6,
    src: "/project-status/status-6.jpeg",
    alt: "Construction Update 6",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 7,
    src: "/project-status/status-7.jpeg",
    alt: "Construction Update 7",
    gridSpan: "col-span-1 row-span-2", // Tall Vertical Portrait
  },
  {
    id: 8,
    src: "/project-status/status-8.jpeg",
    alt: "Construction Update 8",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 9,
    src: "/project-status/status-9.jpeg",
    alt: "Construction Update 9",
    gridSpan: "col-span-1 md:col-span-2 row-span-2", // Large Feature Square/Rectangle
  },
  {
    id: 10,
    src: "/project-status/status-10.jpeg",
    alt: "Construction Update 10",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 11,
    src: "/project-status/status-11.jpeg",
    alt: "Construction Update 11",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3 row-span-1", // Very Wide Panorama Rectangle
  },
  {
    id: 12,
    src: "/project-status/status-12.jpeg",
    alt: "Construction Update 12",
    gridSpan: "col-span-1 row-span-2", // Tall Vertical Portrait
  },
  {
    id: 13,
    src: "/project-status/status-13.jpeg",
    alt: "Construction Update 13",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 14,
    src: "/project-status/status-14.jpeg",
    alt: "Construction Update 14",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 15,
    src: "/project-status/status-15.jpeg",
    alt: "Construction Update 15",
    gridSpan: "col-span-1 md:col-span-2 row-span-2", // Large Feature
  },
  {
    id: 16,
    src: "/project-status/status-16.jpeg",
    alt: "Construction Update 16",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 17,
    src: "/project-status/status-17.jpeg",
    alt: "Construction Update 17",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Wide Horizontal Rectangle
  },
  {
    id: 18,
    src: "/project-status/status-18.jpeg",
    alt: "Construction Update 18",
    gridSpan: "col-span-1 row-span-2", // Tall Vertical Portrait
  },
  {
    id: 19,
    src: "/project-status/status-19.jpeg",
    alt: "Construction Update 19",
    gridSpan: "col-span-1 row-span-1", // Standard Square
  },
  {
    id: 20,
    src: "/project-status/status-20.jpeg",
    alt: "Construction Update 20",
    gridSpan: "col-span-2 md:col-span-3 lg:col-span-4 row-span-2", // Massive Hero Footer Rectangle
  }
];

export default function ProjectStatus() {
  const shouldReduceMotion = useReducedMotion();
  
  // Framer Motion variants for staggered fade-in
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.1, 
        delayChildren: shouldReduceMotion ? 0 : 0.1 
      }
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
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
            className="text-base md:text-lg text-slate-600 font-medium px-2"
          >
            Watch Signature 4 come to life. Stay updated with the latest on-site developments and construction milestones.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]"
        >
          {STATUS_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-200 ${image.gridSpan}`}
            >
              {/* Image with Object Cover to perfectly adapt to grid shapes */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              
              {/* Optional: Subtle gradient overlay for a premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}