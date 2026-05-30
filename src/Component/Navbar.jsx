import React, { useState } from "react";
import { IoBusinessSharp } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-[999]
        w-full
        bg-black/30
        backdrop-blur-md
        text-white
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <IoBusinessSharp size={24} />
            <h1 className="text-xl sm:text-2xl font-semibold">
              E-State
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <a href="#Home" className="hover:text-blue-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-blue-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-blue-300 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#Testimonial" className="hover:text-blue-300 transition">
                Testimonial
              </a>
            </li>
          </ul>

          {/* Desktop Button */}
          <a
            href="#Contact"
            className="
              hidden
              md:block
              bg-white
              text-black
              px-5
              py-2
              rounded-full
              hover:bg-blue-500
              hover:text-white
              transition
            "
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <a href="#Home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#Projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Testimonial" onClick={() => setMenuOpen(false)}>
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    inline-block
                    bg-white
                    text-black
                    px-5
                    py-2
                    rounded-full
                  "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;