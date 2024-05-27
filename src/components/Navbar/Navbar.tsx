"use client";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { menuItems } from "./menuItems";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav
      className=" bg-gradient-to-r
    from-blue-800 via-blue-850 to-blue-950 p-3"
    >
      <div
        className="container lg:w-2/3 mx-auto flex items-center
       justify-between relative"
      >
        <div>
          <button
            className="flex items-center hover:text-custom-yellow hover:bg-white
             text-custom-yellow  font-bold 
             relative z-10 text-lg"
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
                from-blue-800 via-blue-850 to-blue-950 shadow-lg z-50 flex flex-col"
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

                <ul className="text-white text-lg lg:w-2/3 font-bold space-y-4 p-2">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-950 cursor-pointer"
                    >
                      {item.label === "Catering" ||
                      item.label === "VendoSmart Technologies" ||
                      item.label === "VendoSmart Vending Machine" ||
                      item.label ===
                        "VendoSmart vs Traditional Vending Machines" ||
                      item.label === "Smart-fridge" ||
                      item.label === "Data Protrection" ? (
                        <ScrollLink
                          to={item.href.substring(1)}
                          spy={true}
                          smooth={true}
                          duration={700}
                          onClick={toggleMenu}
                          className="cursor-pointer"
                        >
                          {item.label}
                        </ScrollLink>
                      ) : (
                        <Link href={item.href}>{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <ScrollLink
          to="hero5"
          spy={true}
          smooth={true}
          duration={700}
          className="hidden sm:inline-block font-bold hover:text-custom-yellow
           hover:bg-white text-custom-yellow px-3 py-2 text-xl cursor-pointer"
        >
          TECHNOLOGIES
        </ScrollLink>
        <Link href="/">
          <Image width={300} height={300} src="/logo.svg" alt="Logo" />
        </Link>
        <ScrollLink
          to="hero6"
          spy={true}
          smooth={true}
          duration={700}
          className="hidden sm:inline-block font-bold hover:text-custom-yellow
           hover:bg-white text-custom-yellow px-3 py-2 text-xl cursor-pointer"
        >
          CATERING
        </ScrollLink>
        {/* <div className="flex justify-between lg:w-1/12">
          <button title="language">
            <GrLanguage className="h-6 w-6 text-custom-yellow hover:text-white" />
          </button>
          <button title="users">
            <CiUser className="h-8 w-8 text-custom-yellow hover:text-white" />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
