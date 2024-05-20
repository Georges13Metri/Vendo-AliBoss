import React from "react";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero1 = () => {
  return (
    <div className="relative">
      <div
        className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600
       text-white py-12 px-4 lg:px-32 flex flex-col lg:flex-row justify-between 
       items-center"
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center lg:w-1/2 p-10 lg:pr-16">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Vendo&apos;s Smart The future of VENDING MACHINES
          </h1>
          <p className="text-lg mb-4">
            An innovative sales solution to make groceries available anywhere
            and anytime, for more reach and new sales channels. Can be used as a
            micro-market, mini canteen, pick-up station, or as a cashier-free
            smart store for self-service.
          </p>
          <ul className="text-lg mb-4 list-disc pl-5">
            <li>Patented weight sensor technology</li>
            <li>24/7 distribution capabilities</li>
            <li>Real-time telemetry and analysis</li>
          </ul>
          <button
            className="text-blue-600 bg-white py-5 rounded-lg
           hover:bg-blue-400 hover:text-white w-1/2 text-lg font-semibold flex items-center justify-center"
          >
            Get in touch <FaCircleArrowRight className="ml-2 text-3xl" />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0 sm:relative sm:w-full sm:flex sm:justify-center">
          <Image
            src="/Vendo´s Warenautomat.webp"
            alt="Smart Vending Machine"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
