"use client";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { menuItems } from "./menuItems";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-3">
      <div
        className="container lg:w-2/3 mx-auto flex items-center
       justify-between relative "
      >
        <div>
          <button
            className="flex items-center hover:text-blue-600
             text-black font-bold space-x-2 relative z-10"
            onClick={toggleMenu}
          >
            <IoMenu className="h-7 w-7" />
            <span className="hover:border-b-2 border-blue-800">MENU</span>
          </button>
          {isMenuOpen && (
            <>
              <div
                className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-40"
                onClick={toggleMenu}
              ></div>
              <div
                className="fixed top-0 left-0 h-full  bg-gradient-to-r
               from-blue-500 via-blue-700 to-blue-900 shadow-lg z-50 flex 
               flex-col"
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
                      className="px-4 py-2 hover:bg-blue-800
                      cursor-pointer "
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
            className="hidden sm:inline-block font-bold text-blue-600
         hover:bg-blue-600 hover:text-white px-3 py-2"
          >
            TECHNOLOGIES
          </button>
        </Link>
        <Link href="/">
          <Image width={100} height={100} src="/path-to-logo.png" alt="Logo" />
        </Link>
        <Link href="/">
          <button
            className="hidden sm:inline-block font-bold text-blue-600
         hover:bg-blue-600 hover:text-white px-3 py-2"
          >
            CATERING
          </button>
        </Link>
        <div className="flex space-x-10">
          <button title="language">
            <GrLanguage className="h-6 w-6 text-gray-700" />
          </button>
          <button title="users">
            <CiUser className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
