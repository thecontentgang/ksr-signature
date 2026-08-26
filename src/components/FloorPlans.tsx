import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import BrochureButton from './brochure/BrochureButton';

// --- Data Structure Organized by Blocks ---
const BLOCKS = ["Block A", "Block B", "Block C", "Block D"];

const FLOOR_PLANS = [
  // Block A Plans
  {
    id: 1,
    block: "Block A",
    image: "/block-a.png", 
  },
  // Block B Plans
  {
    id: 2,
    block: "Block B",
    image: "/block-b.png", 
  },
  // Block C Plans
  {
    id: 3,
    block: "Block C",
    image: "/block-c.png", 
  },
  // Block D Plans
  {
    id: 4,
    block: "Block D",
    image: "/block-d.jpg", 
  },
];

// --- Framer Motion Variants ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

export default function PlansSection() {
  const shouldReduceMotion = useReducedMotion();
  // --- State for Floor Plans Carousel ---
  const [activeBlock, setActiveBlock] = useState("Block A");
  const [[page, direction], setPage] = useState([0, 0]);

  const currentBlockPlans = FLOOR_PLANS.filter(plan => plan.block === activeBlock);
  const imageIndex = Math.abs(page % currentBlockPlans.length);
  const currentPlan = currentBlockPlans[imageIndex];

  const handleBlockChange = (block: string) => {
    setActiveBlock(block);
    setPage([0, 0]);
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const setSpecificPage = (index: number) => {
    setPage([index, index > page ? 1 : -1]);
  };

  return (
    <>
      {/* ========================================= */}
      {/* 1. MASTER PLAN SECTION                      */}
      {/* ========================================= */}
      <section id="master-plan" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
              className="font-anola text-4xl md:text-5xl lg:text-6xl text-ksr-primary mb-4"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              Project Master Plan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 font-medium"
            >
              A bird's-eye view of our 3.5-acre luxury community. Designed for optimal ventilation, lush green spaces, and seamless connectivity.
            </motion.p>
          </div>

          {/* Master Plan Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            className="w-full relative bg-slate-50 rounded-3xl shadow-2xl border border-pearl p-4 md:p-8 flex items-center justify-center group"
          >
            {/* Badge */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-ksr-primary text-white text-[10px] md:text-sm font-extrabold px-4 py-2 rounded-md tracking-wider uppercase shadow-md z-10">
              Master Plan
            </div>

            <img 
              src="/master-plan.jpg" /* Replace with your actual master plan image */
              alt="Signature 4 Master Plan" 
              className="w-full h-auto max-h-[700px] object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 2. TOWER FLOOR PLANS SECTION                */}
      {/* ========================================= */}
      <section id="floor-plans" className="py-20 md:py-32 bg-pearl/30 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
              className="font-anola text-4xl md:text-5xl lg:text-6xl text-ksr-primary mb-4"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              Tower Floor Plans
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 font-medium"
            >
              Explore our meticulously designed floor plans across our 4 towering blocks. Tailored for luxury, natural light, and optimum space utilization.
            </motion.p>
          </div>

          {/* Block Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
            {BLOCKS.map((block) => (
              <button
                key={block}
                onClick={() => handleBlockChange(block)}
                className={`min-w-[44px] min-h-[44px] px-6 py-2.5 rounded-full text-sm md:text-base font-bold tracking-wide transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary ${
                  activeBlock === block 
                    ? "bg-ksr-primary text-white border border-ksr-primary shadow-md transform scale-105" 
                    : "bg-white text-slate-600 border border-pearl hover:border-ksr-secondary hover:text-ksr-secondary"
                }`}
              >
                {block}
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto h-auto min-h-[300px] md:min-h-[600px]">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentPlan && (
                <motion.div
                  key={currentPlan.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: shouldReduceMotion ? 0 : 0.2 }
                  }}
                  className="w-full bg-white rounded-3xl shadow-2xl border border-pearl overflow-hidden"
                >
                  
                  {/* Full Width Floor Plan Image */}
                  <div className="w-full h-72 md:h-[600px] bg-slate-50 flex items-center justify-center p-4 md:p-8 relative group">
                    <img 
                      src={currentPlan.image} 
                      alt={`Floor Plan for ${currentPlan.block}`}
                      className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Badge showing the block name */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-sandstone/20 text-ksr-primary text-[10px] md:text-sm font-extrabold px-3 py-1.5 rounded-md tracking-wider uppercase backdrop-blur-sm">
                      {currentPlan.block}
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation Arrows (Only show if multiple plans exist in the block) */}
            {currentBlockPlans.length > 1 && (
              <>
                <button
                  className="hidden md:flex absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 min-w-[44px] min-h-[44px] md:w-12 md:h-12 bg-white text-ksr-primary rounded-full items-center justify-center shadow-lg border border-pearl hover:bg-sandstone hover:text-white hover:border-sandstone transition-all duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
                  onClick={() => paginate(-1)}
                  aria-label="Previous Floor Plan"
                >
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                
                <button
                  className="hidden md:flex absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 min-w-[44px] min-h-[44px] md:w-12 md:h-12 bg-white text-ksr-primary rounded-full items-center justify-center shadow-lg border border-pearl hover:bg-sandstone hover:text-white hover:border-sandstone transition-all duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
                  onClick={() => paginate(1)}
                  aria-label="Next Floor Plan"
                >
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation Controls & Dots (Only show if multiple plans exist in the block) */}
          {currentBlockPlans.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                className="md:hidden min-w-[44px] min-h-[44px] bg-white text-ksr-primary rounded-full flex items-center justify-center shadow-md border border-pearl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
                onClick={() => paginate(-1)}
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span className="sr-only">Previous Floor Plan</span>
              </button>

              <div className="flex gap-2">
                {currentBlockPlans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSpecificPage(index)}
                    className={`min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary rounded-full transition-all duration-300`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span className={`block rounded-full transition-all duration-300 ${
                      imageIndex === index 
                        ? 'bg-ksr-primary w-8 h-3' 
                        : 'bg-sandstone/30 w-3 h-3 hover:bg-sandstone'
                    }`} />
                  </button>
                ))}
              </div>

              <button
                className="md:hidden min-w-[44px] min-h-[44px] bg-white text-ksr-primary rounded-full flex items-center justify-center shadow-md border border-pearl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
                onClick={() => paginate(1)}
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <span className="sr-only">Next Floor Plan</span>
              </button>
            </div>
          )}

          {/* Download Brochure Action Area */}
          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <BrochureButton
              type="direct"
              variant="outline"
              size="md"
              label={`Direct Download ${activeBlock} Plan`}
              brochureUrl={currentPlan?.image || "/KSR HOMES INDIA PVT LTD Brochure.pdf"}
              brochureName={`${activeBlock} Floor Plan`}
            />
            <BrochureButton
              type="lead"
              variant="primary"
              size="md"
              label="Request Full Project Brochure"
              brochureName="KSR Signature 4 Complete Brochure"
            />
          </div>

        </div>
      </section>
    </>
  );
}