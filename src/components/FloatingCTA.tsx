

interface FloatingCTAProps {
  onClick: () => void;
}

export default function FloatingCTA({ onClick }: FloatingCTAProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 origin-right -rotate-90 translate-x-1/2 bg-ksr-primary text-white font-bold tracking-widest uppercase py-3 px-6 rounded-t-xl shadow-lg hover:bg-ksr-secondary hover:-translate-y-[calc(50%+4px)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary border-t-2 border-x-2 border-sandstone/30 group"
      aria-label="Enquire Now"
    >
      <div className="flex items-center gap-2">
        <span className="animate-pulse w-2 h-2 rounded-full bg-sandstone block"></span>
        Enquiry Now
      </div>
    </button>
  );
}
