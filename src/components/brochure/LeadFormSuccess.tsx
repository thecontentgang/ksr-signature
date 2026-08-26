import type { MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { downloadBrochureFile, DEFAULT_BROCHURE_URL, DEFAULT_BROCHURE_NAME } from '../../utils/brochureDownload';

interface LeadFormSuccessProps {
  brochureUrl?: string;
  brochureName?: string;
  isBrochureDownload?: boolean;
  onClose: () => void;
}

export default function LeadFormSuccess({
  brochureUrl = DEFAULT_BROCHURE_URL,
  brochureName = DEFAULT_BROCHURE_NAME,
  isBrochureDownload = true,
  onClose
}: LeadFormSuccessProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleManualDownload = (e: MouseEvent) => {
    e.preventDefault();
    downloadBrochureFile(brochureUrl, brochureName);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      className="p-6 sm:p-8 text-center flex flex-col items-center"
      role="status"
      aria-live="polite"
    >
      {/* Success Animated Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
          delay: shouldReduceMotion ? 0 : 0.1
        }}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-50 border-4 border-green-500/20 text-green-600 flex items-center justify-center mb-5 shadow-lg shadow-green-500/10"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </motion.div>

      {/* Success Title */}
      <h3
        className="font-anola text-2xl sm:text-3xl text-ksr-dark mb-2"
        style={{ fontFamily: "'Anola', sans-serif" }}
      >
        Thank You!
      </h3>

      {/* Confirmation Subtitle */}
      <p className="text-slate-600 text-sm sm:text-base mb-2 font-medium max-w-sm">
        Your details have been submitted successfully.
      </p>

      {isBrochureDownload ? (
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 mb-6 w-full text-center">
          <p className="text-xs sm:text-sm text-amber-900 font-semibold mb-1 flex items-center justify-center gap-1.5">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-amber-600 animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Brochure Download Initiated
          </p>
          <p className="text-xs text-amber-700/90">
            If your download didn't start automatically, use the direct button below.
          </p>
        </div>
      ) : (
        <p className="text-xs text-slate-500 mb-6 max-w-xs">
          Our sales executive will contact you shortly with exclusive project pricing and floor layouts.
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        {isBrochureDownload && (
          <button
            type="button"
            onClick={handleManualDownload}
            className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 cursor-pointer"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Brochure
          </button>
        )}

        <button
          type="button"
          onClick={onClose}
          className={`min-h-[46px] inline-flex items-center justify-center px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 cursor-pointer ${
            !isBrochureDownload ? 'w-full bg-ksr-primary text-white hover:bg-ksr-secondary' : ''
          }`}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}
