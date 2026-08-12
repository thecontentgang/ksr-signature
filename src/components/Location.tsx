import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// --- DATA ---
const LOCATION_CATEGORIES = [
  {
    title: "Connectivity & Hubs",
    items: ["Outer Ring Road", "Financial District", "Osman Nagar", "Gachibowli"]
  },
  {
    title: "Healthcare",
    items: ["Aparna Hospitals", "Aksha Hospitals", "Apollo Spectra Hospitals", "Citizens Specialty Hospital"]
  },
  {
    title: "Education",
    items: ["St.Xavier’s PG College", "Engineering Staff College of India", "Sridevi Women’s Engineering College", "Chaitanya Bharathi Institute of Technology"]
  },
  {
    title: "Corporate Hubs",
    items: ["Wipro", "Xilontech Solution Pvt Ltd", "Maisan Soft Technologies Private Limited", "RaisonMinds solutions Pvt. Ltd."]
  }
];

const FAQS = [
  {
    question: "What is KSR Signature4?",
    answer: "KSR Signature4 is a residential project in Tellapur, Hyderabad offering 2 & 3 BHK apartments with unit sizes ranging from 1,122 to 2,203 sq.ft. The project features modern amenities and is RERA-approved (P01100003703)."
  },
  {
    question: "Where is KSR Signature4 located?",
    answer: "KSR Signature4 is located in Tellapur, Hyderabad — close to Neopolis and the Financial District, with good connectivity to the ORR and nearby IT hubs."
  },
  {
    question: "What amenities are available at KSR Signature4?",
    answer: "Amenities include a clubhouse, swimming pool, badminton court, gym & fitness center, yoga & aerobics hall, children’s play area, landscaped gardens and walking tracks."
  },
  {
    question: "Is KSR Signature4 RERA approved?",
    answer: "Yes. The project is RERA-approved (RERA No: P01100003703)."
  },
  {
    question: "What are the unit sizes?",
    answer: "Unit sizes range from 1,122 to 2,203 sq.ft."
  }
];

export default function EndSections() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50">
      
      {/* ========================================= */}
      {/* 1. PROJECT LOCATION SECTION                 */}
      {/* ========================================= */}
      <section id="location" className="py-20 md:py-32 bg-white overflow-hidden border-t border-pearl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side: Map Image & Button */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <h2 
                className="font-anola text-4xl md:text-5xl text-ksr-primary mb-6"
                style={{ fontFamily: "'Anola', sans-serif" }}
              >
                Project Location
              </h2>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-pearl mb-6 group">
                {/* Replace with your actual drawn map image */}
                <img 
                  src="/location-maps.jpg" 
                  alt="KSR Signature4 Location Map" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <a 
                href="https://maps.google.com" // Add your actual Google Maps link here
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center min-h-[44px] gap-2 px-8 py-3.5 bg-ksr-primary text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-ksr-secondary transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-max focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Get Direction On Maps
              </a>
            </motion.div>

            {/* Right Side: Accessibility Data */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h3 
                className="font-anola text-3xl md:text-4xl text-ksr-dark mb-8"
                style={{ fontFamily: "'Anola', sans-serif" }}
              >
                Easy Accessibility
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {LOCATION_CATEGORIES.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-sandstone font-bold uppercase tracking-widest text-sm mb-4 border-b border-pearl pb-2">
                      {category.title}
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm md:text-base font-medium">
                          <span className="text-ksr-primary mt-1 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-32 bg-silk/20">
      {/* Centered, narrower container for better readability */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="w-full flex flex-col justify-center"
        >
          {/* Centered Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 
              className="font-anola text-4xl md:text-5xl text-ksr-dark mb-4"
              style={{ fontFamily: "'Anola', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-sandstone font-bold tracking-widest uppercase text-sm md:text-base">
              KSR Signature 4
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border ${activeFaq === index ? 'border-sandstone bg-white shadow-md' : 'border-pearl bg-slate-50'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 min-h-[44px] flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ksr-primary rounded-2xl"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-bold text-sm md:text-base pr-4 ${activeFaq === index ? 'text-ksr-primary' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${activeFaq === index ? 'bg-ksr-primary text-white' : 'bg-pearl text-slate-500'}`}>
                    <svg 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="currentColor" 
                      className={`w-4 h-4 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>

      

    </div>
  );
}