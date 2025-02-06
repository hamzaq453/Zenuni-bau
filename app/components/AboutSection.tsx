import React from "react";
import Image from "next/image";
import AboutImg from "../../public/AboutImg.webp";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-[#123524] text-white py-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold">
            About <span className="text-[#85A947]">Zenuni-Bau</span>
          </h2>
          <p className="text-lg text-[#EFE3C2]">
            With years of experience in <span className="font-semibold text-[#85A947]">Rebar Weaving</span> and{" "}
            <span className="font-semibold text-[#85A947]">Drywall Construction</span>, we take pride in delivering
            top-quality projects that stand the test of time. Our commitment to precision and excellence ensures that
            every project is built with confidence.
          </p>

          {/* Company Highlights */}
          <div className="grid grid-cols-2 gap-6 text-[#EFE3C2]">
            <div>
              <h3 className="text-3xl font-bold text-[#85A947]">10+</h3>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#85A947]">200+</h3>
              <p className="text-lg">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#85A947]">100%</h3>
              <p className="text-lg">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#85A947]">50+</h3>
              <p className="text-lg">Expert Workers</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-6 py-3 rounded-md shadow-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={AboutImg}
              alt="About Us - Construction Team"
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

export default AboutUs;
