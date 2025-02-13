import React from "react";
import Image from "next/image";
import Service1 from "../../public/Service1n.webp.jpg";
import Service2 from "../../public/Service2n.webp";
import Service3 from "../../public/Service3n.webp";

const Services = [
  {
    title: "Bewehrungsflechten",
    description:
      "Wir bieten präzisionsgefertigte Bewehrungsstrukturen für langlebige und verstärkte Bauprojekte.",
    imageSrc: Service1,
  },
  {
    title: "Trockenbau Installation",
    description:
      "Unsere hochwertigen Trockenbaulösungen eignen sich für Wohn- und Gewerbeimmobilien.",
    imageSrc: Service2,
  },
  {
    title: "Strukturelle Planung",
    description:
      "Fachgerechte strukturelle Planung und Konstruktion für sichere und effiziente Bauprojekte.",
    imageSrc: Service3,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className=" bg-[#123524] text-white mt-0 shadow-2xl shadow-black py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#85A947]">
          Unsere <span className="text-[#EFE3C2]">Dienstleistungen</span>
        </h2>
        <p className="text-lg text-[#EFE3C2] max-w-2xl mx-auto">
          Wir sind spezialisiert auf <span className="font-normal text-[#85A947]">Bewehrungsflechten</span>,{" "}
          <span className="font-normal text-[#85A947]">Trockenbau Installation</span> und{" "}
          <span className="font-normal text-[#85A947]">Strukturelle Planung</span>.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Services.map((service, index) => (
          <div
            key={index}
            className="bg-[#3f4e24] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 text-center"
          >
            <div className="relative w-full h-56 mb-4">
              <Image
                src={service.imageSrc}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
