
import { motion, useReducedMotion } from 'framer-motion';

// The stats extracted from your provided text
const PROJECT_STATS = [
  { highlight: "293", label: "Spacious Residences" },
  { highlight: "4", label: "Towering Blocks" },
  { highlight: "G+4", label: "Lavish Club House" },
  { highlight: "Huge", label: "Balconies" },
  { highlight: "Well Designed", label: "Landscape Experience" },
];

export default function AboutProject() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* 1. LEFT SIDE: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative background shape for luxury feel */}
            <div className="absolute -inset-4 md:-inset-6 bg-silk rounded-3xl -z-10 transform rotate-3 scale-105" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]">
              <img 
                src="/about-project-image.png" 
                alt="Signature 4 Architecture" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 object-right"
                loading="lazy"
                decoding="async"
              />
              
              {/* Optional: Subtle gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* 2. RIGHT SIDE: Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            
            {/* Headline */}
            <h2 
              className="font-anola text-4xl md:text-5xl lg:text-6xl text-ksr-primary mb-6 leading-tight"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              A residence that <br className="hidden md:block" />
              matches your aspiration
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              4 towering blocks of exceptional design. 293 ultra-premium, spacious apartments. Standing tall on landscaped grounds that set your soul free. <strong className="text-ksr-dark">Signature 4</strong> is an aristocratic community where engineering and nature are perfectly blended.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-y-10 border-t border-pearl pt-10">
              {PROJECT_STATS.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <span 
                    className="font-anola text-3xl md:text-4xl text-sandstone leading-none"
                    style={{ fontFamily: "'Anola', sans-serif" }}
                  >
                    {stat.highlight}
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional Call to Action to explore further */}
            <div className="mt-12">
              <a 
                href="#master-plan" 
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-8 py-3.5 border border-ksr-primary text-ksr-primary text-sm font-bold tracking-wider uppercase rounded-full hover:bg-ksr-primary hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
              >
                Explore Master Plan
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}