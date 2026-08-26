import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants, useReducedMotion } from 'framer-motion';

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
  
  // State for the gallery lightbox
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 1. Move handleNext and handlePrev ABOVE the useEffects
  // 2. Wrap in useCallback to prevent unnecessary re-renders
  // 3. Make the event parameter optional (e?) to fix the "any" type error
  const handleNext = React.useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e?.stopPropagation) e.stopPropagation();
    setSelectedIndex((prev) => (prev === STATUS_IMAGES.length - 1 ? 0 : prev! + 1));
  }, []);

  const handlePrev = React.useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e?.stopPropagation) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? STATUS_IMAGES.length - 1 : prev! - 1));
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      // No more "as any" needed here!
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);



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
    <>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {STATUS_IMAGES.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => setSelectedIndex(index)}
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
                  cursor-pointer
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

                {/* Hover overlay with a visual indicator */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  to-black/0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                  flex
                  items-end
                  justify-center
                  pb-6
                ">
                  <span className="text-white text-sm font-medium tracking-wide">View Image</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Gallery Overlay moved OUTSIDE the section */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white text-4xl p-2 transition-colors z-50"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>

            {/* Left Navigation */}
            <button
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl md:text-7xl p-4 transition-colors z-50 select-none"
              onClick={handlePrev}
            >
              &#10094;
            </button>

            {/* Right Navigation */}
            <button
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl md:text-7xl p-4 transition-colors z-50 select-none"
              onClick={handleNext}
            >
              &#10095;
            </button>

            {/* Main Lightbox Image */}
            <div 
              className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  src={STATUS_IMAGES[selectedIndex].src}
                  alt={STATUS_IMAGES[selectedIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>
              
              {/* Image Counter */}
              <div className="absolute bottom-[-2rem] text-white/70 text-sm font-medium">
                {selectedIndex + 1} / {STATUS_IMAGES.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}