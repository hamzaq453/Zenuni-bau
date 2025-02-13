import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123524] text-[#EFE3C2] py-10 px-6 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left Section - Logo & Company Description */}
        <div>
          <Link href="/" passHref>
            <div className="flex items-center justify-center md:justify-start cursor-pointer">
              <Image src={Logo} alt="Zenuni-Bau Logo" width={80} height={80} className="rounded-full" />
              <span className="ml-3 font-bold text-2xl">Zenuni-Bau</span>
            </div>
          </Link>
          <p className="text-gray-300 mt-4">
            Experten für <strong>Bewehrungsflechten & Trockenbau</strong>. Wir bauen mit Vertrauen und Präzision.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#85A947]">Schnellzugriff</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" passHref>
                <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">Startseite</span>
              </Link>
            </li>
            <li>
              <Link href="#services" passHref>
                <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">Dienstleistungen</span>
              </Link>
            </li>
            <li>
              <Link href="#projects" passHref>
                <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">Projekte</span>
              </Link>
            </li>
            <li>
              <Link href="#about" passHref>
                <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">Über uns</span>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">Kontakt</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[#85A947]">Kontakt</h3>
          <p className="mt-4 text-gray-300">📍 An der Norf 45, 41469 Neuss, Deutschland</p>
          <p className="text-gray-300">📧 zenuni_bau@outlook.de</p>
          <p className="text-gray-300">📞 +49 178 2977386</p>
          <p className="text-gray-300">📞 +49 176 20183495</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center border-t border-gray-600 mt-10 pt-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Zenuni-Bau. Alle Rechte vorbehalten. <br />
          Erstellt von{" "}
          <Link href="https://www.linkedin.com/in/hamza-qureshi-21b61a249/" passHref target="_blank" rel="noopener noreferrer">
            <span className="text-[#85A947] hover:underline">Hamza Qureshi</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
