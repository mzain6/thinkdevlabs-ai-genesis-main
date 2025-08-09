import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBrands from "@/components/TrustedBrands";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyThinkDevLabs from "@/components/WhyThinkDevLabs";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <ServicesSection />
      <ReviewsSection />
      <WhyThinkDevLabs />
      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default Index;
