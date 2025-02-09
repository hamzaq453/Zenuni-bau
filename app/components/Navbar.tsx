'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close Sidebar on Link Click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#415321] text-white p-2 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src={Logo}
                alt="Zenuni-Bau Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              <span className="ml-3 font-bold text-2xl text-[#EFE3C2]">
                Zenuni-Bau
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="#services">
            <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
              Dienstleistungen
            </span>
          </Link>
          <Link href="#projects">
            <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
              Projekte
            </span>
          </Link>
          <Link href="#about">
            <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
              Über uns
            </span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
              Kontakt
            </span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#3E7B27] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-3xl">
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 text-left px-6 mt-4">
          <Link href="#services">
            <span
              onClick={closeMenu}
              className="text-lg font-medium hover:text-[#EFE3C2] transition duration-300 cursor-pointer"
            >
              Dienstleistungen
            </span>
          </Link>
          <Link href="#projects">
            <span
              onClick={closeMenu}
              className="text-lg font-medium hover:text-[#EFE3C2] transition duration-300 cursor-pointer"
            >
              Projekte
            </span>
          </Link>
          <Link href="#about">
            <span
              onClick={closeMenu}
              className="text-lg font-medium hover:text-[#EFE3C2] transition duration-300 cursor-pointer"
            >
              Über uns
            </span>
          </Link>
          <Link href="#contact">
            <span
              onClick={closeMenu}
              className="text-lg font-medium hover:text-[#EFE3C2] transition duration-300 cursor-pointer"
            >
              Kontakt
            </span>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
