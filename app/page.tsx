import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/services";
import Space from "./components/Space";
import ProjectsPortfolio from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="mt-0">

    <HeroSection/>  
    <Space/>
    <ServicesSection/>
    <ProjectsPortfolio/>
    </div>
  );
}
