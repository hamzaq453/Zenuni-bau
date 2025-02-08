import React from "react";
import Image from "next/image";
import Project1 from "../../public/ResImg.jpg";
import Project2 from "../../public/ComplexImg.jpg";
import Project3 from "../../public/BridgeImg.jpg";

// Example project data (replace with actual projects)
const projects = [
  {
    title: "Residential Building",
    description:
      "A high-quality residential building featuring precision rebar weaving and drywall construction.",
    imageSrc: Project1,
  },
  {
    title: "Commercial Complex",
    description:
      "A state-of-the-art commercial complex built with durable and efficient materials.",
    imageSrc: Project2,
  },
  {
    title: "Bridge Construction",
    description:
      "An infrastructure marvel showcasing our expertise in structural planning and execution.",
    imageSrc: Project3,
  },
];

const ProjectsPortfolio: React.FC = () => {
  return (
    <section id="projects" className="bg-[#123524] text-[#123524] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#8ba068]">
          Our <span className="text-[#85A947]">Projects</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore some of the projects we’ve completed, showcasing our expertise
          in rebar weaving, drywall installation, and structural planning.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#244b16] text-[#EFE3C2] rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-[#EFE3C2] mb-4">{project.description}</p>
              {/* <button className="bg-[#123524] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-md shadow-md transition duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
