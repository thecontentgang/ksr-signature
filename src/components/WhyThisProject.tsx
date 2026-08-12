
import { motion, type Variants, useReducedMotion } from 'framer-motion';

// Organized data from your list
const LOCATION_DATA = [
  {
    category: "Work Spaces",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    items: ["Wipro SEZ", "Microsoft", "UBS", "Infosys", "Google", "TCS"]
  },
  {
    category: "Education",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    items: ["Open Minds Birla School", "Sridevi Engineering College", "Vista Pearson School", "University of Hyderabad", "ISB (Indian School of Business)"]
  },
  {
    category: "Connectivity",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    items: ["Kokapet SEZ", "Tellapur Techno City", "Tellapur & Lingampally MMTS", "International Airport", "Upcoming US Consulate", "Nehru Outer Ring Road"]
  },
  {
    category: "Healthcare & Lifestyle",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    items: ["Lemon Tree Hotel", "Andhra Bank", "ELLAA 5-Star Hotel", "Citizen Hospital", "Medplus Pharmacy", "Regenta One (Star Hotel)"]
  }
];

export default function LocationAdvantage() {
  const shouldReduceMotion = useReducedMotion();
  // Stagger animation for the grid
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-silk/20 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="font-anola text-4xl md:text-5xl lg:text-6xl text-ksr-primary mb-6"
            style={{ fontFamily: "'Anola', sans-serif" }}
          >
            Why Signature 4?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium"
          >
            A location that puts you at the absolute center of everything. <br className="hidden md:block" />
            Seamless connectivity to top IT hubs, premium education, healthcare, and lifestyle destinations.
          </motion.p>
        </div>

        {/* 4-Column Grid for Categories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {LOCATION_DATA.map((data, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 border border-pearl shadow-lg shadow-black/5 hover:-translate-y-2 hover:shadow-xl hover:border-sandstone/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-pearl">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sandstone/10 text-sandstone">
                  {data.icon}
                </div>
                <h3 
                  className="font-anola text-2xl text-ksr-primary"
                  style={{ fontFamily: "'Anola', sans-serif" }}
                >
                  {data.category}
                </h3>
              </div>

              {/* Location List */}
              <ul className="flex flex-col gap-4 flex-grow">
                {data.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* Custom Sandstone Bullet Point */}
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-sandstone mt-1 flex-shrink-0">
                      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.969 13.905L9.63 12.82a.75.75 0 011.06-1.06l2.793 2.792 5.147-6.177a.75.75 0 111.152.96l-5.75 6.9a.75.75 0 01-1.063.02z" />
                    </svg>
                    <span className="text-sm md:text-base text-slate-700 font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}