import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  isBrochureDownload?: boolean;
}

export default function LeadModal({ isOpen, onClose, isBrochureDownload = false }: LeadModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission API call...
    console.log("Form submitted!");

    if (isBrochureDownload) {
      // Trigger brochure download
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'Signature4_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    onClose();
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: shouldReduceMotion ? 0 : 0.3 } },
    exit: { opacity: 0, transition: { duration: shouldReduceMotion ? 0 : 0.3 } }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.95, 
      y: shouldReduceMotion ? 0 : 20,
      transition: { duration: shouldReduceMotion ? 0 : 0.3, ease: "easeIn" }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-ksr-dark/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content - Made more compact by removing overflow-y-auto and tightening padding */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-pearl z-10 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-slate-100/20 hover:bg-white text-white hover:text-ksr-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary z-20 shadow-md backdrop-blur-sm border border-white/30"
              aria-label="Close modal"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Area - Tightened padding */}
            <div className="bg-ksr-primary text-white p-5 sm:p-6 text-center relative overflow-hidden flex-shrink-0">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-sandstone/20 rounded-full blur-3xl pointer-events-none" />
              
              <h2 id="modal-title" className="font-anola text-xl sm:text-2xl mb-1.5 relative z-10" style={{ fontFamily: "'Anola', sans-serif" }}>
                {isBrochureDownload ? "Download Brochure" : "Register Your Interest"}
              </h2>
              
              <p className="text-sandstone font-bold text-xs sm:text-sm leading-snug relative z-10">
                More than 50% homes are already booked! Don't miss the opportunity to invest in your dream home.
              </p>

            </div>

     
            <div className="p-5 sm:p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-ksr-dark mb-1">Full Name *</label>
                  <input 
                    id="fullName"
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full h-[44px] px-3 text-sm bg-slate-50 border border-pearl rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ksr-primary/50 focus-visible:border-ksr-primary transition-all text-slate-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold text-ksr-dark mb-1">Mobile Number *</label>
                  <input 
                    id="mobile"
                    type="tel" 
                    placeholder="Enter your mobile number" 
                    className="w-full h-[44px] px-3 text-sm bg-slate-50 border border-pearl rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ksr-primary/50 focus-visible:border-ksr-primary transition-all text-slate-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-ksr-dark mb-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email (Optional)" 
                    className="w-full h-[44px] px-3 text-sm bg-slate-50 border border-pearl rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ksr-primary/50 focus-visible:border-ksr-primary transition-all text-slate-700"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-xs font-bold text-ksr-dark mb-1">Property Type *</label>
                  <div className="relative">
                    <select 
                      id="propertyType"
                      className="w-full h-[44px] px-3 text-sm bg-slate-50 border border-pearl rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ksr-primary/50 focus-visible:border-ksr-primary transition-all text-slate-700 appearance-none cursor-pointer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select Configuration</option>
                      <option value="2bhk">2 BHK Flats</option>
                      <option value="3bhk">3 BHK Flats</option>
                      <option value="others">Others</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="mt-2 w-full h-[44px] bg-ksr-primary text-white text-sm font-bold tracking-wider uppercase rounded-xl hover:bg-ksr-secondary transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
                >
                  Submit & Continue
                </button>
              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}