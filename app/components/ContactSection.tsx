"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#123524] text-[#123524] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Get in <span className="text-[#85A947]">Touch</span>
        </h2>
        <p className="text-lg text-[#3E7B27] max-w-2xl mx-auto">
          Have a question or need a quote? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto mt-12 bg-[#415321] p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3  bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          />
          
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black hover:bg-[#3E7B27] text-white px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status === "sending" && <p className="text-yellow-500">Sending...</p>}
          {status === "success" && <p className="text-green-500">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
