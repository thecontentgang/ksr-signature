import { useState, useEffect } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';

export default function FloatingSocialBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Scroll detection logic
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      
      // If scrolling down and we've scrolled past the first 150px, hide the bar
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        // If scrolling up, show the bar
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.div
      // Changed animation to slide off the screen to the RIGHT (x: 120) instead of down
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 120, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeInOut" }}
      
      // Fixed positioning at the vertical center of the right edge
      className="fixed top-1/2 right-4 md:right-6 -translate-y-1/2 z-50"
      aria-label="Floating social links"
    >
      {/* Changed to flex-col for a vertical layout */}
      <div className="flex flex-col items-center gap-3 md:gap-4 px-3 py-5 md:py-6 bg-ksr-dark/95 backdrop-blur-md rounded-full shadow-2xl border border-white/10">
        
        {/* 1. Phone Button */}
        <a 
          href="tel:+918599888999" 
          className="group relative flex items-center justify-center min-w-[40px] min-h-[40px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-white/10 hover:bg-sandstone transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          aria-label="Call Us"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white group-hover:scale-110 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.496-4.196-7.092-7.092l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span className="sr-only">Call Us</span>
          {/* Tooltip popping out to the left */}
          <span className="absolute right-[120%] top-1/2 -translate-y-1/2 origin-right scale-0 group-hover:scale-100 transition-transform bg-ksr-primary text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none whitespace-nowrap">
            Call
          </span>
        </a>

        {/* Horizontal Divider */}
        <div className="h-[1px] w-6 bg-white/20" />

        {/* 2. WhatsApp Button */}
        <a 
          href="https://wa.me/918599888999" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center min-w-[40px] min-h-[40px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-white/10 hover:bg-[#25D366] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          aria-label="Chat on WhatsApp"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="sr-only">Chat on WhatsApp</span>
          {/* Tooltip popping out to the left */}
          <span className="absolute right-[120%] top-1/2 -translate-y-1/2 origin-right scale-0 group-hover:scale-100 transition-transform bg-[#25D366] text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Horizontal Divider */}
        <div className="h-[1px] w-6 bg-white/20" />

        {/* 3. Instagram Button */}
        <a 
          href="https://instagram.com/yourprofile" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center min-w-[40px] min-h-[40px] md:min-w-[48px] md:min-h-[48px] rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          aria-label="Follow on Instagram"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:scale-110 transition-transform">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <span className="sr-only">Follow on Instagram</span>
          {/* Tooltip popping out to the left */}
          <span className="absolute right-[120%] top-1/2 -translate-y-1/2 origin-right scale-0 group-hover:scale-100 transition-transform bg-[#dc2743] text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none whitespace-nowrap">
            Instagram
          </span>
        </a>

      </div>
    </motion.div>
  );
}