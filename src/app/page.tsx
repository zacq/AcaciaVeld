import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CataloguePreview from "@/components/sections/CataloguePreview";
import EducationTeaser from "@/components/sections/EducationTeaser";
import BreedGuide from "@/components/sections/BreedGuide";
import WhyAcacia from "@/components/sections/WhyAcacia";
import PartnersCarousel from "@/components/sections/PartnersCarousel";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <CataloguePreview />
      <EducationTeaser />
      <BreedGuide />
      <WhyAcacia />
      <PartnersCarousel />
      <LeadCaptureSection />
      <Footer />
    </main>
  );
}
