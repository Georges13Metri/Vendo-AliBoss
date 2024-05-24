import React from "react";
import Image from "next/image";

const Hero5 = () => {
  return (
    <div
      id="hero5"
      className="bg-gradient-to-r from-blue-950 via-blue-950
      to-blue-950  min-h-screen p-5 lg:p-0 flex items-center"
    >
      <div className="container  px-4  lg:w-4/5 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4 text-custom-yellow">
              TECHNICAL DETAILS
            </h2>
            <div className="">
              <h3 className="font-bold">Models: Single or double fridge</h3>
              <div>
                <p>White-label configurable</p>
                <p>Complies with European CE and RoHS directives</p>
              </div>
            </div>
            <div className="border-b border-white mb-4"></div>
            <div>
              <h3 className="font-bold">Measurements</h3>
              <div className="flex flex-wrap flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <p>Width: 88,5 cm / 160 cm</p>
                  <p>Gross content per unit: 438L</p>
                  <p>Depth: 65,5 cm</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p>Net weight: 105 KG</p>
                  <p>Height: 209 cm</p>
                  <p>Temperature: +2 / +10 °C</p>
                </div>
              </div>
            </div>
            <div className="border-b border-white mb-4"></div>
            <div>
              <h3 className="font-bold">Connections / Consumption</h3>
              <p>Internet: LTE, wireless or LAN cable</p>
              <p>Power consumption: 295 W</p>
              <p>Line voltage: 230V / 50Hz</p>
              <p>Noise level: 45 dBA</p>
              <p>Energy consumption: 3,62 kWh/24h</p>
            </div>
            {/* Button */}
            {/* <button
              className="bg-white rounded-xl px-4 py-4 mt-4 
            text-blue-600 hover:text-white font-bold hover:bg-blue-950"
            >
              Download technical data
            </button> */}
          </div>
          {/* Right side image with text */}
          <div className="flex flex-col justify-center items-center">
            <div className="mb-4">
              <Image
                src="/Kiosk blue print.webp"
                alt="Image Alt Text"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className=" flex justify-between w-3/4 text-center">
              <p className="text-white  lg:ml-10">Double Fridge</p>
              <p className="text-white ">Single Fridge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
