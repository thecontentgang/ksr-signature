
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import BrochureButton from './brochure/BrochureButton';

// --- Gallery Image Data ---
// Expanded to 14 images in .png format with dynamic grid spans for a Bento Box layout.
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/gallery/image-8.jpg",
    alt: "Signature 4 Aerial View",
    gridSpan: "col-span-1 md:col-span-2 lg:row-span-2", // Large feature top left
  },
  {
    id: 2,
    src: "/gallery/image-2.jpg",
    alt: "Luxurious Clubhouse Exterior",
    gridSpan: "col-span-1",
  },
  {
    id: 3,
    src: "/gallery/image-3.jpg",
    alt: "Premium Living Area Interior",
    gridSpan: "col-span-1",
  },
  {
    id: 4,
    src: "/gallery/image-4.jpg",
    alt: "Landscaped Gardens",
    gridSpan: "col-span-1",
  },
  {
    id: 5,
    src: "/gallery/image-5.jpg",
    alt: "Temperature Controlled Pool",
    gridSpan: "col-span-1",
  },
  {
    id: 6,
    src: "/gallery/image-6.jpg",
    alt: "Night View of the Towers",
    gridSpan: "col-span-1 md:col-span-2", // Wide feature
  },
  {
    id: 7,
    src: "/gallery/image-7.jpg",
    alt: "Modern Kitchen Layout",
    gridSpan: "col-span-1",
  },
  {
    id: 8,
    src: "/gallery/image-8.jpg",
    alt: "Spacious Master Bedroom",
    gridSpan: "col-span-1 md:col-span-2 lg:row-span-2", // Large feature right side
  },
  {
    id: 9,
    src: "/gallery/image-9.jpg",
    alt: "Kids' Play Area",
    gridSpan: "col-span-1",
  },
  {
    id: 10,
    src: "/gallery/image-10.jpg",
    alt: "State-of-the-art Gym",
    gridSpan: "col-span-1",
  },
  {
    id: 11,
    src: "/gallery/image-11.jpg",
    alt: "Yoga & Meditation Zone",
    gridSpan: "col-span-1",
  },
  {
    id: 12,
    src: "/gallery/image-12.jpg",
    alt: "Elegant Banquet Hall",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-1", 
  },
  {
    id: 13,
    src: "/gallery/image-13.jpg",
    alt: "Outdoor Sports Courts",
    gridSpan: "col-span-1 md:col-span-2", // Wide feature bottom left
  },
  {
    id: 14,
    src: "/gallery/image-14.png",
    alt: "Grand Entrance Lobby",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2", // Wide feature bottom right
  }
];

interface GalleryProps {
  onOpenBrochure?: () => void;
}

export default function Gallery({ onOpenBrochure }: GalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  // Framer Motion variants for staggered fade-in
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: shouldReduceMotion ? 0 : 0.2 }
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
    <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
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
            A Glimpse of Elegance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium"
          >
            Take a visual tour of Signature 4. From the lush landscapes to the meticulously crafted interiors, experience luxury in every detail.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {GALLERY_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 border border-pearl ${image.gridSpan}`}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              
              {/* Dark Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-ksr-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action to Download Brochure */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <BrochureButton
            type="lead"
            variant="outline"
            size="lg"
            label="Download Full Brochure"
            brochureName="KSR Signature 4 Full Brochure"
            onClick={() => onOpenBrochure?.()}
          />
        </motion.div>

      </div>
    </section>
  );
}