"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import TransitionWrapper from "../TransitionWrapper";

const Hero7 = () => {
  return (
    <div
      id="hero7"
      className="bg-white flex p-5 items-center 
    flex-col text-black min-h-screen justify-center"
    >
      <TransitionWrapper direction="y" offset="20">
        <h1
          className="text-4xl font-bold mb-10  
      text-center w-full text-blue-950"
        >
          VendoSmart vs Traditional Vending Machines
        </h1>
      </TransitionWrapper>
      <div className="overflow-x-auto w-full no-scrollbar">
        <table className="lg:w-4/5 sm:w-full md:w-full mx-auto">
          <tbody>
            <tr>
              <td className="border-b-2 border-gray-400 w-1/2"></td>
              <td className="border-b-2 border-gray-400 ">
                <Image
                  className="bg-blue-950 sm:w-full   
                  lg:py-0 py-5"
                  src="/logo.svg"
                  alt="VendoSmart"
                  width={300}
                  height={100}
                />
              </td>
              <td
                className="border-b-2 border-gray-400 
                text-white text-center text-3xl bg-gray-500"
              >
                Vending Machines
              </td>
            </tr>
            {/* Row 1 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                <p>Easy to move / low weight</p>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
                  <p>Lightweight (110 kg)</p>
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  <p> Heavy / Large (+350 kg)</p>
                </span>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <p>Flexible merchandising format</p>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center text-blue-950 font-bold">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Sell any product
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 text-blue-950 font-bold">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Only pre-sized slots
                </span>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                Easy replenishment / cleaning
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Fast: under 5 min
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Difficult: many components
                </span>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                Easy to adjust / change products
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Easy via “Drag & Drop”
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Difficult configuration, requires special tools
                </span>
              </td>
            </tr>
            {/* Row 5 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                Retail experience / open shelving
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Open shelves like supermarket
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Not available
                </span>
              </td>
            </tr>
            {/* Row 6 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Maintenance -free
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  “Plug & Play” components
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Intense technical maintenance, prone to errors
                </span>
              </td>
            </tr>
            {/* Row 7 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                Low cost hardware
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Cheap in mass production
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  High material costs
                </span>
              </td>
            </tr>
            {/* Row 8 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Positive brand awareness
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  People love fridges
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Unhealthy, outdated
                </span>
              </td>
            </tr>
            {/* Row 9 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                Consumer app / user loyalty features
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Standard feature
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Not available
                </span>
              </td>
            </tr>
            {/* Row 10 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                High product capacity
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  720 cans per fridge
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  500-180 cans
                </span>
              </td>
            </tr>
            {/* Row 11 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                Kiosk, user and inventory analyses
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  VendoSmart Analytics
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Low data capacity
                </span>
              </td>
            </tr>
            {/* Row 12 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Smart supply chain management
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg" />
                  VendoSmart Mission Control
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Not available
                </span>
              </td>
            </tr>
            {/* Row 13 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 ">
                Product/ shelf life tracking
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Realtime
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Not available
                </span>
              </td>
            </tr>
            {/* Row 14 */}
            <tr className="text-blue-950 font-bold">
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Predictive maintenance / remote access
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg " />
                  Realtime alert system
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Not available
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero7;
