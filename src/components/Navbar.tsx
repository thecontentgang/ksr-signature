import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureButton from './brochure/BrochureButton';

// --- Types ---
interface NavLink {
  label: string;
  href: string;
}

// --- Data ---
const NAV_LINKS: NavLink[] = [
  { label: 'Project Highlights', href: '#highlights' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Master Plan', href: '#master-plan' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },

];

interface NavbarProps {
  onOpenBrochure?: () => void;
}

export default function Navbar({ onOpenBrochure }: NavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Fixed wrapper using flex-between to separate Logo (left) and Pill (right)
    <div className="fixed top-4 md:top-6 inset-x-4 md:inset-x-8 z-50 flex items-start justify-between pointer-events-none">
      
      {/* 1. Logo - Completely outside the pill, floating on the left */}
      <div className="pointer-events-auto flex-shrink-0 drop-shadow-md">
        <a href="#" className="block transition-transform duration-300 hover:scale-105 bg-white rounded-xl">
          <img
            src="/KSR-logo.png"
            alt="Project Logo"
            className="h-15 md:h-20 lg:h-24 w-auto object-contain"
            decoding="async"
          />
        </a>
      </div>

      {/* 2. Main Navbar Pill - Floating on the right */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="pointer-events-auto relative bg-white/90 backdrop-blur-lg border border-white/50 rounded-2xl lg:rounded-full shadow-xl shadow-black/5"
        aria-label="Main navigation"
      >
        <div className="px-4 lg:px-6 py-2.5 lg:py-3 flex items-center gap-2 lg:gap-6">
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-sm font-semibold text-slate-700 transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 z-10"
              >
                {/* Gliding Hover Background */}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-amber-100/60 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions (WhatsApp & Brochure) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/918599888999"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-green-100 text-green-600 hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
            <BrochureButton
              type="lead"
              variant="navbar"
              label="Brochure"
              onClick={() => onOpenBrochure?.()}
            />
          </div>

          {/* Mobile Menu Toggle Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/918599888999"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] text-green-500 bg-green-50 rounded-full p-2.5 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] text-slate-800 bg-slate-100 rounded-full p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Aligned to the right edge */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              // Width constrained and positioned on the right
              id="mobile-menu"
              className="lg:hidden absolute top-[calc(100%+0.5rem)] right-0 w-[85vw] max-w-[320px] overflow-hidden bg-white shadow-2xl border border-gray-100 rounded-2xl"
            >
              <div className="p-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-5 py-3.5 min-h-[44px] text-base font-bold text-slate-700 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-gray-100">
                  <BrochureButton
                    type="lead"
                    variant="navbar"
                    size="lg"
                    label="Download Brochure"
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenBrochure?.();
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
    </div>
  );
}