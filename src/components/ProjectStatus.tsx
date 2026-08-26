import { motion, type Variants, useReducedMotion } from 'framer-motion';
const STATUS_IMAGES = [
  { id: 1, src: "/project-status/status-1.jpeg", alt: "Construction Update 1" },
  { id: 2, src: "/project-status/status-2.jpeg", alt: "Construction Update 2" },
  { id: 3, src: "/project-status/status-3.jpeg", alt: "Construction Update 3" },
  { id: 4, src: "/project-status/status-4.jpeg", alt: "Construction Update 4" },
  { id: 5, src: "/project-status/status-5.jpeg", alt: "Construction Update 5" },
  { id: 6, src: "/project-status/status-6.jpeg", alt: "Construction Update 6" },
  { id: 7, src: "/project-status/status-7.jpeg", alt: "Construction Update 7" },
  { id: 8, src: "/project-status/status-8.jpeg", alt: "Construction Update 8" },
  { id: 9, src: "/project-status/status-9.jpeg", alt: "Construction Update 9" },
  { id: 10, src: "/project-status/status-10.jpeg", alt: "Construction Update 10" },
  { id: 11, src: "/project-status/status-11.jpeg", alt: "Construction Update 11" },
  { id: 12, src: "/project-status/status-12.jpeg", alt: "Construction Update 12" },
  { id: 13, src: "/project-status/status-13.jpeg", alt: "Construction Update 13" },

  { id: 15, src: "/project-status/status-15.jpeg", alt: "Construction Update 15" },
  { id: 16, src: "/project-status/status-16.jpeg", alt: "Construction Update 16" },
  { id: 17, src: "/project-status/status-17.jpeg", alt: "Construction Update 17" },
  { id: 18, src: "/project-status/status-18.jpeg", alt: "Construction Update 18" },
  { id: 19, src: "/project-status/status-19.jpeg", alt: "Construction Update 19" },
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

        {/* Dynamic Bento Grid - Added `grid-flow-dense` to automatically fill gaps */}
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4
    md:gap-6
  "
>
  {STATUS_IMAGES.map((image) => (
    <motion.div
      key={image.id}
      variants={itemVariants}
      className="
        relative
        aspect-square
        rounded-2xl
        md:rounded-3xl
        overflow-hidden
        group
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-500
        border
        border-slate-200
        bg-slate-200
      "
    >
      <img
        src={image.src}
        alt={image.alt}
        className="
          w-full
          h-full
          object-cover
          object-center
          transition-transform
          duration-700
          group-hover:scale-110
        "
        loading="lazy"
        decoding="async"
      />

      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/20
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        pointer-events-none
      " />
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}