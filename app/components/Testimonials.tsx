import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Example testimonials data
const testimonials = [
  {
    name: "John Doe",
    review:
      "Zenuni-Bau delivered exceptional quality in our commercial project. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    review:
      "Professional and reliable service. The rebar weaving was done with precision!",
    rating: 4,
  },
  {
    name: "David Johnson",
    review:
      "Top-notch drywall installation. Their team was efficient and skilled.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#123524] text-white mt-1 py-28 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#EFE3C2]">
          What Our <span className="text-[#85A947]">Clients Say</span>
        </h2>
        <p className="text-lg text-[#85A947] max-w-2xl mx-auto">
          See what our satisfied clients have to say about our quality work and
          commitment to excellence.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#3c4d1f] text-[#EFE3C2] p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 text-center"
          >
            {/* Client Icon */}
            <div className="flex justify-center mb-4">
              <FaUserCircle size={60} className="text-[#85A947]" />
            </div>

            {/* Client Name */}
            <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>

            {/* Star Ratings */}
            <div className="flex justify-center mb-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>

            {/* Client Review */}
            <p className="text-gray-300">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
