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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        try {
          const errorData = await response.json();
          console.error("Fehler beim Senden der Nachricht:", response.status, errorData);
        } catch (jsonError) {
          console.error("Fehler beim Parsen des JSON:", jsonError);
          console.error("Serverantwort (kein JSON):", response.status, response.statusText);
        }
        setStatus("error");
      }
    } catch (error) {
      console.error("Fehler beim Senden der Nachricht:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#123524] text-[#123524] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Kontakt<span className="text-[#85A947]"> aufnehmen</span>
        </h2>
        <p className="text-lg text-[#3E7B27] max-w-2xl mx-auto">
          Haben Sie eine Frage oder benötigen Sie ein Angebot? Füllen Sie das untenstehende Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-[#415321] p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Ihr Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          />

          <input
            type="email"
            name="email"
            placeholder="Ihre E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Betreff"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          />

          <textarea
            name="message"
            placeholder="Ihre Nachricht"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947]"
          ></textarea>

          <button
            type="submit"
            className="bg-black hover:bg-[#3E7B27] text-white px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            Nachricht senden
          </button>

          {status === "sending" && <p className="text-yellow-500">Senden...</p>}
          {status === "success" && <p className="text-green-500">Nachricht erfolgreich gesendet!</p>}
          {status === "error" && <p className="text-red-500">Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
