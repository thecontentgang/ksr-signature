
import { motion, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ksr-dark text-pearl pt-20 pb-8 border-t-[8px] border-ksr-primary relative overflow-hidden">
      
      {/* Optional Subtle Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-sandstone/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand & Logo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="flex flex-col items-start"
          >
            {/* White wrapper for the logo so it pops against the dark background */}
            <div className="bg-white p-3 rounded-2xl mb-6 shadow-lg inline-block">
              <img 
                src="/KSR-logo.png" 
                alt="KSR Homes Logo" 
                className="h-16 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
              Signature 4 is an aristocratic community where exceptional engineering and serene nature are perfectly blended. Spread across 3.5 acres of absolute elegance.
            </p>
            
            {/* Social Media Icons (Placeholders) */}
            <div className="flex gap-4">
              <a href="#" className="min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-sandstone hover:bg-sandstone hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-sandstone hover:bg-sandstone hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-sandstone hover:bg-sandstone hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <h4 
              className="font-anola text-2xl text-white mb-6"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="text-slate-300 hover:text-sandstone transition-colors font-medium flex items-center gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md"><span className="text-sandstone">›</span> About Project</a></li>
              <li><a href="#highlights" className="text-slate-300 hover:text-sandstone transition-colors font-medium flex items-center gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md"><span className="text-sandstone">›</span> Project Highlights</a></li>
              <li><a href="#master-plan" className="text-slate-300 hover:text-sandstone transition-colors font-medium flex items-center gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md"><span className="text-sandstone">›</span> Master & Floor Plans</a></li>
              <li><a href="#amenities" className="text-slate-300 hover:text-sandstone transition-colors font-medium flex items-center gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md"><span className="text-sandstone">›</span> Amenities</a></li>
              <li><a href="#gallery" className="text-slate-300 hover:text-sandstone transition-colors font-medium flex items-center gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md"><span className="text-sandstone">›</span> Gallery</a></li>
              <li><a href="#location" className="text-slate-300 hover:text-sandstone transition-colors font-medium flex items-center gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md"><span className="text-sandstone">›</span> Location map</a></li>
            </ul>
          </motion.div>

          {/* 3. Project Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h4 
              className="font-anola text-2xl text-white mb-6"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              Project Details
            </h4>
            <div className="flex flex-col gap-5 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sandstone font-bold uppercase tracking-widest mb-1 text-xs">RERA Approved</p>
                <p className="text-white font-medium text-lg">P01100003703</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sandstone font-bold uppercase tracking-widest mb-1 text-xs">Property Type</p>
                <p className="text-white font-medium">2 & 3 BHK Premium Residences</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sandstone font-bold uppercase tracking-widest mb-1 text-xs">Total Area</p>
                <p className="text-white font-medium">3.5 Acres Gated Community</p>
              </div>
            </div>
          </motion.div>

          {/* 4. Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            <h4 
              className="font-anola text-2xl text-white mb-6"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              Contact Us
            </h4>
            
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sandstone/20 flex items-center justify-center text-sandstone flex-shrink-0 mt-1">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Site Location</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    KSR Signature 4,<br />
                    Near Neopolis, Tellapur,<br />
                    Hyderabad, Telangana 502032
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sandstone/20 flex items-center justify-center text-sandstone flex-shrink-0 mt-1">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.496-4.196-7.092-7.092l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Call for Sales</p>
                  <a href="tel:+918599888999" className="text-slate-300 text-sm hover:text-sandstone transition-colors inline-flex items-center min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md">
                    +91 8599 888 999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sandstone/20 flex items-center justify-center text-sandstone flex-shrink-0 mt-1">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Email Us</p>
                  <a href="mailto:sales@ksrhomes.com" className="text-slate-300 text-sm hover:text-sandstone transition-colors inline-flex items-center min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md">
                    sales@ksrhomes.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
            Copyright © {currentYear} | <span className="font-bold text-white tracking-widest">KSR HOMES</span> | All rights reserved
          </p>
          <p className="text-sandstone/80 text-xs md:text-sm text-center md:text-right">
            Crafted by <a href="https://thecontentgang.com" className="font-bold text-sandstone hover:text-white transition-colors tracking-wide min-h-[44px] inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-ksr-dark rounded-md">thecontentgang</a>
          </p>
        </div>

      </div>
    </footer>
  );
}