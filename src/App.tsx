import { BrochureProvider } from './context/BrochureContext';
import { useBrochureModal } from './hooks/useBrochureModal';
import LeadGenerationModal from './components/brochure/LeadGenerationModal';
import WhyThisProject from './components/WhyThisProject';
import AboutProject from './components/AboutProject';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import ProjectStatus from './components/ProjectStatus';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingSocialBar from './components/FloatingSocialBar';
import FloatingCTA from './components/FloatingCTA';

function LandingPageContent() {
  const { modalState, closeModal, openLeadModal } = useBrochureModal();

  const openEnquiryModal = () => {
    openLeadModal({ isBrochureDownload: false });
  };

  const openBrochureModal = () => {
    openLeadModal({ isBrochureDownload: true });
  };

  return (
    <main className="max-w-[100vw] overflow-hidden">
      <FloatingSocialBar />
      <FloatingCTA onClick={openEnquiryModal} />

      {/* Production-Ready Lead Generation & Brochure Modal */}
      <LeadGenerationModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        brochureUrl={modalState.brochureUrl}
        brochureName={modalState.brochureName}
        isBrochureDownload={modalState.isBrochureDownload}
      />

      <Navbar onOpenBrochure={openBrochureModal} />
      <HeroSection />
      <Highlights />
      <AboutProject />
      <WhyThisProject />
      <FloorPlans />
      <Amenities />
      <Gallery onOpenBrochure={openBrochureModal} />
      <ProjectStatus />
      <Location />
      <Footer />
    </main>
  );
}

const App = () => {
  return (
    <BrochureProvider>
      <LandingPageContent />
    </BrochureProvider>
  );
};

export default App;