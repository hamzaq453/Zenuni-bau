import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/HeroImg.jpg";
import HeroImg2 from "../../public/HeroImg2.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#123524] text-white relative py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-20">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build with <span className="text-[#85A947]">Confidence</span> <br />
            <span className="text-[#EFE3C2]">Experts</span> in{" "}
            <span className="text-[#3E7B27]">Rebar & Drywall</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            At <span className="font-semibold text-[#EFE3C2]">Zenuni-Bau</span>,
            we provide high-quality construction solutions specializing in
            <span className="text-[#85A947]"> rebar weaving</span> and{" "}
            <span className="text-[#85A947]">drywall services</span>. Let us
            bring your projects to life.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/services" passHref>
              <button className="bg-[#3E7B27] hover:bg-[#255e42] text-white px-6 py-3 rounded-md shadow-md transition duration-300">
                Our Services
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-md shadow-md transition duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content: Modern Image Arrangement */}
        <div className="relative md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          {/* Main Image */}
          <div className="relative w-[400px] h-[280px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={HeroImg}
              alt="Construction Site"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Overlay Image */}
          <div className="absolute -top-8 -right-8 w-[220px] h-[160px] rounded-lg border-2 border-gray-800  shadow-xl">
            <Image
              src={HeroImg2}
              alt="Construction Detail"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
