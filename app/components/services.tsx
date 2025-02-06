import React from "react";
import Image from "next/image";
import Service1 from "../../public/Service1.webp";
import Service2 from "../../public/Service2.webp";
import Service3 from "../../public/Service3.webp";

const services = [
  {
    title: "Rebar Weaving",
    description:
      "We provide precision-crafted rebar structures for durable and reinforced construction projects.",
    imageSrc: Service1,
  },
  {
    title: "Drywall Installation",
    description:
      "Our high-quality drywall solutions cater to both residential and commercial spaces.",
    imageSrc: Service2,
  },
  {
    title: "Structural Planning",
    description:
      "Expert structural design and planning for safe and efficient construction.",
    imageSrc: Service3,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className=" bg-[#123524] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#85A947]">
          Our <span className="text-[#EFE3C2]">Services</span>
        </h2>
        <p className="text-lg text-[#EFE3C2] max-w-2xl mx-auto">
          We specialize in <span className="font-normal text-[#85A947]">Rebar Weaving</span>,{" "}
          <span className="font-normal text-[#85A947]">Drywall Installation</span> and{" "}
          <span className="font-normal text-[#85A947]">Structural Planning</span>.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
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
