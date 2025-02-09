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
          alt="Hintergrund der Über-uns-Sektion"
          layout="fill"
          objectFit="cover"
          className="opacity-20" // Adjust opacity for subtle effect
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Content - Adjusted Text Alignment */}
        <div className="md:w-2/3 text-left space-y-6 pl-6">
          <h2 className="text-4xl font-bold">
            Über <span className="text-[#85A947]">Zenuni-Bau</span>
          </h2>
          <p className="text-lg text-[#EFE3C2] max-w-2xl">
            Mit jahrelanger Erfahrung in{" "}
            <span className="font-semibold text-[#85A947]">Bewehrungsflechten <br /></span>{" "}
            und{" "}
            <span className="font-semibold text-[#85A947]">
              Trockenbau
            </span>
            , sind wir stolz darauf, <br /> hochwertige Projekte zu liefern, die die <br />
            Zeit überdauern. Unser Engagement für Präzision <br /> und Exzellenz stellt sicher,
            dass jedes Projekt <br /> mit Vertrauen gebaut wird.
          </p>
        </div>

        {/* Right Content - Moved Slightly to the Right */}
        <div className="md:w-1/3 grid grid-cols-2 gap-6 text-[#EFE3C2]">
          <div>
            <h3 className="text-3xl font-bold text-[#85A947]">10+</h3>
            <p className="text-lg">Jahre Erfahrung</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#85A947]">200+</h3>
            <p className="text-lg">Abgeschlossene Projekte</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#85A947]">100%</h3>
            <p className="text-lg">Kundenzufriedenheit</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#85A947]">50+</h3>
            <p className="text-lg">Facharbeiter</p>
          </div>
        </div>
      </div>

      {/* CTA Button - Positioned Below */}
      <div className="max-w-7xl mx-auto text-left mt-8 pl-6">
        <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-6 py-3 rounded-md shadow-md transition duration-300">
          Mehr erfahren
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
