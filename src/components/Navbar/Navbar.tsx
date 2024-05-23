"use client";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { menuItems } from "./menuItems";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-950 p-3">
      <div className="container lg:w-2/3 mx-auto flex items-center justify-between relative">
        <div>
          <button
            className="flex items-center hover:text-custom-yellow hover:bg-white
             text-custom-yellow  font-bold 
            space-x-2 relative z-10 text-xl"
            onClick={toggleMenu}
          >
            <IoMenu className="h-7 w-7" />
            <span className=" ">MENU</span>
          </button>
          {isMenuOpen && (
            <>
              <div
                className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-40"
                onClick={toggleMenu}
              ></div>
              <div
                className="fixed top-0 left-0 h-full bg-gradient-to-r
               from-blue-500 via-blue-700 to-blue-900 shadow-lg z-50 flex flex-col"
              >
                <div className="p-10">
                  <button
                    title="close"
                    className="absolute top-5 right-2 text-white"
                    onClick={toggleMenu}
                  >
                    <IoClose className="h-10 w-10" />
                  </button>
                </div>

                <ul className="text-white text-lg font-bold space-y-4 p-2">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-800 cursor-pointer"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <Link href="/">
          <button
            className="hidden sm:inline-block font-bold
           text-custom-yellow hover:bg-white hover:text-custom-yellow
            px-3 py-2 text-xl"
          >
            TECHNOLOGIES
          </button>
        </Link>
        <Link href="/">
          <Image width={400} height={400} src="/logo.svg" alt="Logo" />
        </Link>
        <ScrollLink
          to="hero6"
          spy={true}
          smooth={true}
          duration={500}
          className="hidden sm:inline-block font-bold hover:text-custom-yellow hover:bg-white text-custom-yellow px-3 py-2 text-xl"
        >
          CATERING
        </ScrollLink>
        <div className="flex space-x-2">
          <button title="language">
            <GrLanguage className="h-6 w-6 text-white hover:text-custom-yellow" />
          </button>
          <button title="users">
            <CiUser className="h-8 w-8 text-white hover:text-custom-yellow" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
