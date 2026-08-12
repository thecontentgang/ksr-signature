import { useState } from 'react';
import WhyThisProject from "./components/WhyThisProject"
import AboutProject from "./components/AboutProject"
import HeroSection from "./components/HeroSection"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import FloorPlans from "./components/FloorPlans"
import Amenities from "./components/Amenities"
import Gallery from "./components/Gallery"
import ProjectStatus from "./components/ProjectStatus"
import Location from "./components/Location"
import Footer from "./components/Footer"
import FloatingSocialBar  from "./components/FloatingSocialBar"
import LeadModal from "./components/LeadModal"
import FloatingCTA from "./components/FloatingCTA"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureTrigger, setIsBrochureTrigger] = useState(false);

  const openEnquiryModal = () => {
    setIsBrochureTrigger(false);
    setIsModalOpen(true);
  };

  const openBrochureModal = () => {
    setIsBrochureTrigger(true);
    setIsModalOpen(true);
  };

  return (
    <main className="max-w-[100vw] overflow-hidden">
    <FloatingSocialBar />
    <FloatingCTA onClick={openEnquiryModal} />
    <LeadModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      isBrochureDownload={isBrochureTrigger} 
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
  )
}

export default App