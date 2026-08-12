import { motion, useReducedMotion } from 'framer-motion';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative w-full min-h-[115vh] flex flex-col justify-end overflow-hidden bg-slate-900 rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl">
      
      {/* Background Image */}
      <img
        src="/ksr-hero-image.jpg" 
        alt="KSR Project Background"
        className="absolute inset-0 w-full h-full object-cover"
        decoding="async"
      />

      {/* Dark Bottom-to-Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

      {/* Foreground Content - Adjusted padding to respect the rounded corners */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 pb-20 md:pb-28 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-4 w-full">
          
          {/* 1. LEFT SIDE: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/3 text-center md:text-left"
          >
            <h1 
              className="font-anola text-4xl md:text-5xl lg:text-[3.3rem] text-white drop-shadow-lg leading-[1.3] md:leading-[1.2] tracking-tight"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              A signature of elegance spread across{' '}
              {/* Highlighted White Card Span */}
              <span className="inline-block bg-white/95 text-ksr-primary font-extrabold px-3 py-1 md:px-4 md:py-2 rounded-xl shadow-xl ml-1 border border-white/20 align-middle transform hover:scale-105 transition-transform duration-300">
                3.5 acres
              </span>
            </h1>
            
            {/* Highlighted Limited Units Badge */}
            <p className="inline-block bg-white/95 text-ksr-primary font-extrabold px-4 py-1.5 md:py-2 rounded-xl shadow-xl border border-white/20 text-[10px] md:text-xs tracking-widest uppercase mt-6 transform hover:scale-105 transition-transform duration-300">
              Limited Units Only
            </p>
          </motion.div>

          {/* 2. CENTER: Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/3 flex justify-center order-last md:order-none mt-4 md:mt-0 pb-2 md:pb-0"
          >
            <a 
              href="#highlights" 
              className="min-h-[44px] min-w-[44px] flex items-center justify-center px-8 py-3.5 border-2 border-sandstone bg-sandstone/90 text-white text-sm font-bold tracking-wider uppercase rounded-full backdrop-blur-md hover:bg-white hover:border-white hover:text-sandstone transition-all duration-300 shadow-[0_0_15px_rgba(210,172,103,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
            >
              View Project Highlights
            </a>
          </motion.div>

          {/* 3. RIGHT SIDE: Stats & Approvals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-4 md:gap-3"
          >
            {/* Pricing with Highlighted White Card */}
            <div 
              className="flex items-center justify-center md:justify-end gap-3 font-anola text-2xl md:text-3xl text-white drop-shadow-md mb-1"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              <span>Starting</span>
              <span className="inline-block bg-white/95 text-ksr-primary font-extrabold px-3 py-1 md:px-4 md:py-1.5 rounded-xl shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300 text-xl md:text-2xl">
                ₹7,499/sft
              </span>
            </div>

            {/* Compact Tags */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-wide shadow-sm">
                G+5 Floors
              </span>
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-wide shadow-sm">
                Exclusive Clubhouse
              </span>
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-wide shadow-sm">
                1122 to 2203 Sft
              </span>
            </div>

            {/* Approvals */}
            <div className="flex items-center justify-center md:justify-end gap-1.5 bg-black/40 px-4 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 text-gray-200 mt-1">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-green-400" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-xs font-medium tracking-wide">
                RERA & HMDA Approved
              </span>
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}