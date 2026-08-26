import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import LeadForm from './LeadForm';
import LeadFormSuccess from './LeadFormSuccess';
import type { LeadFormData } from '../../types/brochure';
import { downloadBrochureFile, DEFAULT_BROCHURE_URL, DEFAULT_BROCHURE_NAME } from '../../utils/brochureDownload';

export interface LeadGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureUrl?: string;
  brochureName?: string;
  isBrochureDownload?: boolean;
}

export default function LeadGenerationModal({
  isOpen,
  onClose,
  brochureUrl = DEFAULT_BROCHURE_URL,
  brochureName = DEFAULT_BROCHURE_NAME,
  isBrochureDownload = true
}: LeadGenerationModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    setIsSuccess(false);
    onClose();
  }, [onClose]);

  // Store trigger focus element and handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Focus modal after open
      const timeout = setTimeout(() => {
        const focusable = modalRef.current?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        focusable?.focus();
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = 'unset';
      previouslyFocusedElement.current?.focus?.();
    }
  }, [isOpen]);

  // Handle Escape key and focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    },
    [isOpen, handleClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleFormSuccess = (leadData: LeadFormData) => {
    setIsSuccess(true);

    // If this was a brochure download lead, automatically trigger the download
    if (isBrochureDownload) {
      setTimeout(() => {
        downloadBrochureFile(leadData.brochureUrl || brochureUrl, leadData.brochureName || brochureName);
      }, 300);
    }
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: shouldReduceMotion ? 0 : 0.25 } },
    exit: { opacity: 0, transition: { duration: shouldReduceMotion ? 0 : 0.2 } }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
      y: shouldReduceMotion ? 0 : 15,
      transition: { duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeIn' }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="fixed inset-0 bg-ksr-dark/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            aria-describedby="lead-modal-description"
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-pearl z-10 flex flex-col my-auto max-h-[92vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-3 w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/20 hover:bg-white text-white hover:text-ksr-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary z-20 shadow-md backdrop-blur-sm border border-white/30 cursor-pointer"
              aria-label="Close dialog"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Area */}
            <div className="bg-ksr-primary text-white p-5 sm:p-6 text-center relative overflow-hidden flex-shrink-0">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-sandstone/20 rounded-full blur-3xl pointer-events-none" />

              <h2
                id="lead-modal-title"
                className="font-anola text-xl sm:text-2xl mb-1.5 relative z-10"
                style={{ fontFamily: "'Anola', sans-serif" }}
              >
                {isBrochureDownload ? 'Download Project Brochure' : 'Register Your Interest'}
              </h2>

              <p
                id="lead-modal-description"
                className="text-sandstone font-bold text-xs sm:text-sm leading-snug relative z-10"
              >
                {isBrochureDownload
                  ? 'Get complete floor plans, specifications & pricing delivered instantly.'
                  : "More than 50% homes are already booked! Don't miss this opportunity."}
              </p>
            </div>

            {/* Content Area with smooth transition */}
            <div className="overflow-y-auto max-h-[calc(92vh-120px)]">
              {isSuccess ? (
                <LeadFormSuccess
                  brochureUrl={brochureUrl}
                  brochureName={brochureName}
                  isBrochureDownload={isBrochureDownload}
                  onClose={handleClose}
                />
              ) : (
                <LeadForm
                  brochureUrl={brochureUrl}
                  brochureName={brochureName}
                  isBrochureDownload={isBrochureDownload}
                  onSuccess={handleFormSuccess}
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
