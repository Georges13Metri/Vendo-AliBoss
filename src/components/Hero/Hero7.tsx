"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import TransitionWrapper from "../TransitionWrapper";

const Hero7 = () => {
  return (
    <div
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 text-blue-950">
                <p className="font-bold text-blue-950">
                  Easy to move / low weight
                </p>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
                  <p className="font-bold text-blue-950">
                    {" "}
                    Lightweight (110 kg)
                  </p>
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  <p className="font-bold text-blue-950">
                    {" "}
                    Heavy / Large (+350 kg)
                  </p>
                </span>
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <p className="font-bold text-blue-950">
                  {" "}
                  Flexible merchandising format
                </p>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
                  Sell any product
                </span>
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                <span className="inline-flex items-center">
                  <IoMdCloseCircle className="mr-2 flex-shrink-0 text-xl text-gray-600" />
                  Only pre-sized slots
                </span>
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="border-b-2 border-gray-400 p-2 ">
                Easy replenishment / cleaning
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                Easy to adjust / change products
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 ">
                Retail experience / open shelving
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Maintenance -free
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 ">
                Low cost hardware
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Positive brand awareness
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 ">
                Consumer app / user loyalty features
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                High product capacity
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 ">
                Kiosk, user and inventory analyses
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Smart supply chain management
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 ">
                Product/ shelf life tracking
              </td>
              <td className="border-b-2 border-gray-400 p-2">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
            <tr>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100 ">
                Predictive maintenance / remote access
              </td>
              <td className="border-b-2 border-gray-400 p-2 bg-blue-100">
                <span className="inline-flex items-center">
                  <FaCheckCircle className="mr-2 flex-shrink-0 text-lg text-blue-950" />
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
