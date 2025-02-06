import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Space from "./components/Space";
import ProjectsPortfolio from "./components/ProjectsSection";
import AboutUs from "./components/AboutSection";
import ServicesSection from "./components/services";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mt-0">

    <HeroSection/>  
    <ServicesSection/>
    <Space/>
    <ProjectsPortfolio/>
    <AboutUs/>
    <TestimonialsSection/>
    <Space/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}
