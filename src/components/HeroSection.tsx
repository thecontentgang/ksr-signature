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
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 pointer-events-none" />

      {/* Foreground Content - Adjusted padding to respect the rounded corners */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 pb-20 md:pb-28 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-6 w-full">
          
          {/* 1. LEFT SIDE: Elevated Trust Highlights & Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-5/12 text-center md:text-left"
          >
            {/* Top Elevated Trust Badges Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-4">
              {/* OC Applied Elevated Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-950/80 via-black/80 to-amber-950/80 backdrop-blur-xl border border-amber-400/50 shadow-[0_0_20px_rgba(210,172,103,0.3)] hover:shadow-[0_0_25px_rgba(210,172,103,0.5)] transition-all duration-300 transform hover:scale-105">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span className="text-[11px] md:text-xs font-black tracking-wider text-amber-300 uppercase">
                  OC Applied
                </span>
                <span className="text-[10px] md:text-[11px] text-amber-100/90 font-medium border-l border-amber-400/30 pl-2">
                  Occupancy Certificate
                </span>
              </div>

              {/* RERA & HMDA Approved Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/80 via-black/80 to-emerald-950/80 backdrop-blur-xl border border-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.25)] hover:shadow-[0_0_20px_rgba(52,211,153,0.45)] transition-all duration-300 transform hover:scale-105">
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-3.5 h-3.5 text-emerald-400">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-[11px] md:text-xs font-black tracking-wider text-emerald-300 uppercase">
                  RERA & HMDA Approved
                </span>
              </div>
            </div>

            <h1 
              className="font-anola text-4xl md:text-5xl lg:text-[3.2rem] text-white drop-shadow-lg leading-[1.3] md:leading-[1.2] tracking-tight"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              A signature of elegance spread across{' '}
              {/* Highlighted White Card Span */}
              <span className="inline-block bg-white/95 text-ksr-primary font-extrabold px-3 py-1 md:px-4 md:py-2 rounded-xl shadow-xl ml-1 border border-white/20 align-middle transform hover:scale-105 transition-transform duration-300">
                3.5 acres
              </span>
            </h1>
            
            {/* Highlighted Limited Units Badge */}
            <p className="inline-block bg-white/95 text-ksr-primary font-extrabold px-4 py-1.5 md:py-2 rounded-xl shadow-xl border border-white/20 text-[10px] md:text-xs tracking-widest uppercase mt-4 transform hover:scale-105 transition-transform duration-300">
              Limited Units Only
            </p>
          </motion.div>

          {/* 2. CENTER: Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-3/12 flex justify-center order-last md:order-none mt-2 md:mt-0 pb-2 md:pb-0"
          >
            <a 
              href="#highlights" 
              className="min-h-[48px] min-w-[48px] flex items-center justify-center px-8 py-3.5 border-2 border-sandstone bg-sandstone/90 text-white text-sm font-bold tracking-wider uppercase rounded-full backdrop-blur-md hover:bg-white hover:border-white hover:text-sandstone transition-all duration-300 shadow-[0_0_20px_rgba(210,172,103,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary transform hover:-translate-y-0.5"
            >
              View Project Highlights
            </a>
          </motion.div>

          {/* 3. RIGHT SIDE: Stats & Elevated Approvals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-4/12 flex flex-col items-center md:items-end gap-3.5"
          >
            {/* Pricing with Highlighted White Card */}
            <div 
              className="flex items-center justify-center md:justify-end gap-3 font-anola text-2xl md:text-3xl text-white drop-shadow-md"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              <span>Starting</span>
              <span className="inline-block bg-white/95 text-ksr-primary font-extrabold px-3 py-1 md:px-4 md:py-1.5 rounded-xl shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300 text-xl md:text-2xl">
                ₹7,499/sft
              </span>
            </div>

            {/* Compact Specification Tags */}
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

            {/* Elevated Trust & Certification Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mt-1">
              
              {/* 1. OC Applied Elevated Badge Card */}
              <div className="flex items-center gap-3 bg-gradient-to-br from-black/85 via-slate-950/80 to-amber-950/40 p-3 rounded-2xl backdrop-blur-xl border border-amber-400/40 hover:border-amber-400/80 shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(210,172,103,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform text-slate-950">
                  {/* Building / Certificate Stamp Icon */}
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black tracking-wide text-amber-300 uppercase">OC Applied</span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-300 font-medium">Occupancy Certificate</span>
                </div>
              </div>

              {/* 2. RERA & HMDA Approved Elevated Badge Card */}
              <div className="flex items-center gap-3 bg-gradient-to-br from-black/85 via-slate-950/80 to-emerald-950/40 p-3 rounded-2xl backdrop-blur-xl border border-emerald-400/40 hover:border-emerald-400/80 shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(52,211,153,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform text-slate-950">
                  {/* Verified Shield Icon */}
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black tracking-wide text-emerald-300 uppercase">RERA & HMDA</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-3.5 h-3.5 text-emerald-400">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-gray-300 font-medium">Approved Project</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}