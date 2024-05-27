"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Hero3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      setIsVisible(top > 700); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="hero3"
      className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950
       text-white min-h-screen items-center flex overflow-hidden"
    >
      <div className="container mx-auto text-center ">
        <h1
          className={`text-4xl font-bold mb-4 text-custom-yellow transition-transform ${
            isVisible
              ? "duration-1000 transform translate-0 opacity-100"
              : "opacity-0 transform translate-y-full"
          }`}
        >
          How does purchasing with Vendo work?
        </h1>
        <p
          className={`text-lg mb-8 transition-transform ${
            isVisible
              ? "duration-1000 transform translate-0 opacity-100"
              : "opacity-0 transform translate-x-full"
          }`}
        >
          Shopping at the smart fridge takes 15 seconds, which largely avoids
          long queues
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-start gap-4 p-5 w-4/5 mx-auto">
          <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0 flex flex-col items-center">
            <div className="mb-4 h-56 w-full relative">
              <Image
                src="/1.webp"
                alt="Open door"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className={`flex items-center text-center transition-transform ${
                isVisible
                  ? "duration-1000 transform translate-0 opacity-100"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              <PiNumberCircleOneLight className="text-5xl" />
              <h2 className="text-3xl font-semibold ml-2">Open</h2>
            </div>
            <div
              className={`border-t-2 border-white my-3 text-center transition-transform ${
                isVisible
                  ? "duration-1000 transform translate-0 opacity-100"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              With the help of contactless credit or debit cards, mobile
              payment, your own app or with an NFC employee card.
            </div>
          </div>
          <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0 flex flex-col items-center">
            <div className="mb-4 h-56 w-full relative">
              <Image
                src="/2.webp"
                alt="Choose product"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className={`flex items-center text-center transition-transform ${
                isVisible
                  ? "duration-1000 transform translate-0 opacity-100"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              <PiNumberCircleTwoLight className="text-5xl" />
              <h2 className="text-3xl font-semibold ml-2">To choose</h2>
            </div>
            <div
              className={`border-t-2 border-white my-3 text-center transition-transform ${
                isVisible
                  ? "duration-1000 transform translate-0 opacity-100"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              Just help yourself. The removed products are automatically
              recognized and displayed on the screen.
            </div>
          </div>
          <div className="w-full sm:w-1/3 px-4 flex flex-col items-center">
            <div className="mb-4 h-56 w-full relative">
              <Image
                src="/3.webp"
                alt="Enjoy product"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className={`flex items-center text-center transition-transform ${
                isVisible
                  ? "duration-1000 transform translate-0 opacity-100"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              <PiNumberCircleThreeLight className="text-5xl" />
              <h2 className="text-3xl font-semibold ml-2">Enjoy</h2>
            </div>
            <div
              className={`border-t-2 border-white my-3 text-center transition-transform ${
                isVisible
                  ? "duration-1000 transform translate-0 opacity-100"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              Close the door and let it dir taste. Of course, only what you have
              withdrawn will be charged.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
