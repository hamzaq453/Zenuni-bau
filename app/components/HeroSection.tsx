import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImgBg from "../../public/HeroImg3.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#123524] text-white py-24 sm:py-16 md:py-28 min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={HeroImgBg}
          alt="Construction Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content Container - Centered on mobile, left-aligned on larger screens */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:mt-3 sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build with{" "}
            <span className="text-[#85A947] block sm:inline">Confidence</span>
            <br className="hidden sm:block" />
            <span className="text-[#EFE3C2] block sm:inline">Experts in{" "} </span>
            <span className="text-[#3E7B27] block sm:inline">Rebar & Drywall</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0">
            At <span className="font-semibold text-[#EFE3C2]">Zenuni-Bau</span>,
            we provide high-quality construction solutions specializing in
            <span className="text-[#85A947]"> rebar weaving</span> and{" "}
            <span className="text-[#85A947]">drywall services</span>. Let us
            bring your projects to life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link href="#services" passHref>
              <button className="w-full sm:w-auto bg-[#3E7B27] hover:bg-[#255e42] text-white px-6 py-3 rounded-md shadow-md transition duration-300">
                Our Services
              </button>
            </Link>
            <Link href="#contact" passHref>
              <button className="w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-md shadow-md transition duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;