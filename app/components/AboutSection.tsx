import React from "react";
import Image from "next/image";
import AboutSectionBG from "../../public/BgImg.jpg"; // Background image

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#123524] text-white py-36 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={AboutSectionBG}
          alt="About Section Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20" // Adjust opacity for subtle effect
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Content - Adjusted Text Alignment */}
        <div className="md:w-2/3 text-left space-y-6 pl-6">
          <h2 className="text-4xl font-bold">
            About <span className="text-[#85A947]">Zenuni-Bau</span>
          </h2>
          <p className="text-lg text-[#EFE3C2] max-w-2xl">
            With years of experience in{" "}
            <span className="font-semibold text-[#85A947]">Rebar Weaving <br /></span>{" "}
            and{" "}
            <span className="font-semibold text-[#85A947]">
              Drywall Construction
            </span>
            , we take pride in <br /> delivering top-quality projects that stand the <br />
            test of time. Our commitment to precision <br /> and excellence ensures
            that every project <br /> is built with confidence.
          </p>
        </div>

        {/* Right Content - Moved Slightly to the Right */}
        <div className="md:w-1/3 grid grid-cols-2 gap-6 text-[#EFE3C2]">
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
      </div>

      {/* CTA Button - Positioned Below */}
      <div className="max-w-7xl mx-auto text-left mt-8 pl-6">
        <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-6 py-3 rounded-md shadow-md transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
