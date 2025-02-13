import HeroSection from "./components/HeroSection";
import Space from "./components/Space";
import ProjectsPortfolio from "./components/ProjectsSection";
import AboutUs from "./components/AboutSection";
import ServicesSection from "./components/services";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="mt-0">
      <SpeedInsights/>
      <Navbar/>
    <HeroSection/>  
    <ServicesSection/>
    <ProjectsPortfolio/>
    <AboutUs/>
    <TestimonialsSection/>
    <Space/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}
