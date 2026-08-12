
import { motion, type Variants, useReducedMotion } from 'framer-motion';

// --- Amenities Data with Image Paths ---
// Note: Make sure to place these image files in your "public" folder (or a subfolder like "public/amenities")
const AMENITIES = [
  { name: "Cricket Court", image: "/cricket-court.png" },
  { name: "Walking Track", image: "/walking-track.png" },
  { name: "Half Basketball Court", image: "/basketball-court.png" },
  { name: "Banquet Hall", image: "/banquet-hall.png" },
  { name: "Badminton Court", image: "/badminton-court.png" },
  { name: "Outdoor Playground", image: "/outdoor-playground.png" },
  { name: "Temp. Controlled Pool", image: "/swimming-pool.png" },
  { name: "Guest Rooms", image: "/guest-rooms.png" },
  { name: "Outdoor Gym", image: "/outdoor-gym.png" },
  { name: "Lawn & Party Lawn", image: "/party-lawn.png" },
//   { name: "Kids' Play Area", image: "/kids-play-area.png" },
  { name: "Library", image: "/library.png" },
  { name: "Yoga & Meditation", image: "/yoga-meditation.png" },
  { name: "Meeting Rooms", image: "/meeting-rooms.png" },
  { name: "Office Spaces", image: "/office-spaces.png" },
];

export default function Amenities() {
  const shouldReduceMotion = useReducedMotion();
  // Framer Motion staggered animation for the grid
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: shouldReduceMotion ? 0 : 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="amenities" className="py-20 md:py-32 bg-silk/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="font-anola text-4xl md:text-5xl lg:text-6xl text-ksr-primary mb-6 leading-tight"
            style={{ fontFamily: "'Anola', sans-serif" }}
          >
            Open Your Door To <br className="hidden md:block" /> The Active Life
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium leading-relaxed"
          >
            Immerse yourself in world-class amenities designed to elevate your lifestyle. From fitness and sports to leisure and work, everything you need is just steps away.
          </motion.p>
        </div>

        {/* 15-Item Grid (5 columns on large screens) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {AMENITIES.map((amenity, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-pearl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sandstone/50 transition-all duration-300"
            >
              {/* Circular Image Container */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-sandstone/10 mb-4 p-4 overflow-hidden group-hover:scale-110 group-hover:bg-sandstone/20 transition-all duration-300">
                <img 
                  src={amenity.image} 
                  alt={amenity.name} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Amenity Title */}
              <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug group-hover:text-ksr-primary transition-colors">
                {amenity.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}