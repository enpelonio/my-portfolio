"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base text-neutral sticky top-0 z-50">
      <div className="container mx-6 px-4 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-3xl font-heading w-[30%]">
          <Link href="/" legacyBehavior>
            <a>ERVIN PELONIO</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav
          className={`md:flex hidden lg:space-x-10 md:space-x-6 lg:w-[50%] w-[70%]`}
        >
          <Link href="#about" legacyBehavior>
            <a className="hover:text-accent ">ABOUT</a>
          </Link>
          <Link href="#projects" legacyBehavior>
            <a className="hover:text-accent">PROJECTS</a>
          </Link>
          <Link href="#techstacks" legacyBehavior>
            <a className="hover:text-accent">EXPERIENCE</a>
          </Link>
          <Link href="#athena" legacyBehavior>
            <a className="hover:text-accent">ATHENA 🔥</a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a className="hover:text-accent lg:hidden">CONTACT</a>
          </Link>
        </nav>
        <nav className={`lg:flex hidden w-[20%] justify-end`}>
          <div className="bg-white p-3 rounded-full">
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-accent font-medium">CONTACT ME</a>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[4rem] left-0 w-full bg-base z-40`}
      >
        <nav className="px-4 py-2 space-y-2">
          <Link href="#about" legacyBehavior>
            <a className="block hover:text-accent">ABOUT</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="block hover:text-accent">PROJECTS</a>
          </Link>
          <Link href="#experience" legacyBehavior>
            <a className="block hover:text-accent">EXPERIENCE</a>
          </Link>
          <Link href="#athena" legacyBehavior>
            <a className="block hover:text-accent">ATHENA 🔥</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block hover:text-accent">CONTACT ME</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
