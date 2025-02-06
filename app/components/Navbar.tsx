import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#415321] text-white p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                <Image
                  src={Logo}
                  alt="Zenuni-Bau Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <span className="ml-3 font-bold text-2xl text-[#EFE3C2]">
                  Zenuni-Bau
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-6">
            <Link href="#services" passHref>
              <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
                Services
              </span>
            </Link>
            <Link href="#projects" passHref>
              <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
                Projects
              </span>
            </Link>
            <Link href="#about" passHref>
              <span className="hover:text-[#85A947] transition duration-300 cursor-pointer">
                About Us
              </span>
            </Link>
          </div>

          {/* Contact Button */}
          <div>
            <Link href="#contact" passHref>
              <span className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-md shadow-md transition duration-300 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
