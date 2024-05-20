"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiNumberCircleOneLight } from "react-icons/pi";
import { PiNumberCircleTwoLight } from "react-icons/pi";
import { PiNumberCircleThreeLight } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const Hero3 = () => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-blue-950 via-blue-600
     to-blue-950 text-white py-12"
    >
      <div className="container mx-auto text-center">
        <h1
          className={`text-4xl font-bold mb-4 ${
            isVisible
              ? "transition-all duration-1000 transform translate-y-0 opacity-100"
              : "opacity-0 transform translate-y-5"
          }`}
        >
          How does purchasing with Vendo work?
        </h1>
        <p
          className={`text-lg mb-8 ${
            isVisible
              ? "transition-all duration-1000 transform translate-y-0 opacity-100"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Shopping at the smart fridge takes 15 seconds, which largely avoids
          long queues
        </p>
        <div className="flex flex-col sm:flex-row justify-center p-5 w-4/5 mx-auto">
          <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0 ">
            <div className="mb-4">
              <Image src="/image1.jpg" alt="Image 1" width={300} height={200} />
              <div
                className={`items-center flex border-b-2 border-white my-2 ${
                  isVisible
                    ? "transition-all duration-1000 transform translate-x-0 opacity-100"
                    : "opacity-0 transform translate-x-10"
                }`}
              >
                <PiNumberCircleOneLight className="text-5xl" />
                <h2 className="text-3xl font-semibold  w-2/3">Open</h2>
              </div>
              <p
                className={`text-sm ${
                  isVisible
                    ? "transition-all duration-1000 transform translate-x-0 opacity-100"
                    : "opacity-0 transform translate-x-10"
                }`}
              >
                With the help of contactless credit or debit cards, mobile
                payment, your own app or with an NFC employee card.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
            <div className="mb-4">
              <Image src="/image2.jpg" alt="Image 2" width={300} height={200} />
              <div
                className={`items-center flex border-b-2 border-white my-2 ${
                  isVisible
                    ? "transition-all duration-1000 transform translate-x-0 opacity-100"
                    : "opacity-0 transform translate-x-10"
                }`}
              >
                <PiNumberCircleTwoLight className="text-5xl" />
                <h2 className="text-3xl font-semibold  w-2/3">To choose</h2>
              </div>
              <p
                className={`text-sm ${
                  isVisible
                    ? "transition-all duration-1000 transform translate-x-0 opacity-100"
                    : "opacity-0 transform translate-x-10"
                }`}
              >
                Just help yourself. The removed products are automatically
                recognized and displayed on the screen.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 px-4">
            <div className="mb-4">
              <Image src="/image3.jpg" alt="Image 3" width={300} height={200} />
              <div
                className={`items-center flex border-b-2 border-white my-2 ${
                  isVisible
                    ? "transition-all duration-1000 transform translate-x-0 opacity-100"
                    : "opacity-0 transform translate-x-10"
                }`}
              >
                <PiNumberCircleThreeLight className="text-5xl" />
                <h2 className="text-3xl font-semibold w-2/3">Enjoy</h2>
              </div>
              <p
                className={`text-sm ${
                  isVisible
                    ? "transition-all duration-1000 transform translate-x-0 opacity-100"
                    : "opacity-0 transform translate-x-10"
                }`}
              >
                Close the door and let it dir taste. Of course, only what you
                have withdrawn will be charged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
