
import { motion, type Variants, useReducedMotion } from 'framer-motion';

// Highlight Data Array
const HIGHLIGHTS_DATA = [
  {
    title: "3.5 Acres Gated Community",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  },
  {
    title: "4 Towers + Amenities Block",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
  },
  {
    title: "2 Cellars + Ground + 5 Floors",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
  },
  {
    title: "HMDA Approved Project",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  },
  {
    title: "2 & 3 BHK Premium Residences",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  },
  {
    title: "100% Vaastu Compliant Units",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.671zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
  },
  {
    title: "Access Ramps for Disabled-Friendly",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  },
  {
    title: "Domestic Water Available",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  },
  {
    title: "Landscaped Garden",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 18.75l1.46-1.46a2.25 2.25 0 00.659-1.59V10.5m-2.119 5.25L9 14.25m0 0l-1.46-1.46a2.25 2.25 0 01-.659-1.59V8.25m6 2.25h.008v.008h-.008v-.008zm-6 2.25h.008v.008h-.008v-.008zm6-4.5h.008v.008h-.008v-.008zm-6-2.25h.008v.008h-.008v-.008z" />
  },
  {
    title: "STP Provided for Landscaping & Flushing",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  }
];

export default function Highlights() {
  const shouldReduceMotion = useReducedMotion();
  // Framer motion variants for a staggered fade-up effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: shouldReduceMotion ? 0 : 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="highlights" className="py-20 md:py-28 bg-silk/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="font-anola text-4xl md:text-5xl text-ksr-primary mb-6 leading-tight"
            style={{ fontFamily: "'Anola', sans-serif" }} 
          >
            Architecture that <br className="hidden md:block" /> matches your taste
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium leading-relaxed"
          >
            If you like neat, minimalist architecture and fully-optimum planning, <span className="text-ksr-primary font-bold">Signature 4</span> will appeal to you. The stress on ventilation, green surroundings and amenities make this a coveted home.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
        >
          {HIGHLIGHTS_DATA.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-pearl shadow-sm hover:shadow-lg hover:border-sandstone/50 transition-all duration-300"
            >
              {/* Icon Container - Uses Sandstone color */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sandstone/10 text-sandstone mb-4 group-hover:scale-110 group-hover:bg-sandstone group-hover:text-white transition-all duration-300">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  {item.icon}
                </svg>
              </div>
              
              {/* Highlight Text */}
              <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}