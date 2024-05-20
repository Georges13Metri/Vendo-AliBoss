import React from "react";
import {
  FaWeightHanging,
  FaLightbulb,
  FaThermometerHalf,
  FaWifi,
  FaMicrochip,
  FaCubes,
  FaEye,
  FaTv,
  FaVolumeUp,
  FaMapMarkerAlt,
  FaLock,
  FaTabletAlt,
} from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl lg:text-4xl font-bold
         text-gray-800 mb-4 sm:text-center"
        >
          The vending system for efficient and flexible shopping
        </h1>
        <p className="text-lg text-gray-600 mb-6 sm:text-center">
          Vendo&apos;s food vending machines revolutionize the shopping
          experience and allow businesses to efficiently extend their reach and
          hours of operation. Our 24/7 vending machines are flexible for use in
          commercial or residential settings and offer cashless payment options.
          Give your customers a seamless shopping experience with cashless
          payment options and an intelligent product assortment. With our white
          label option, you can customize the Smart Fridge to match your
          branding and reinforce your brand.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 p-5 
        sm:mx-auto md:mx-auto"
        >
          <div
            className="text-black flex justify-center flex-col font-bold 
          items-center sm:items-end"
          >
            <div className="w-3/4 ">
              <div className="flex items-center justify-center mb-6">
                <FaWeightHanging
                  className="inline-block mr-2 text-4xl
                 text-blue-600"
                />
                <p>Intelligent shelves with 3D weight sensors</p>
              </div>
              <div className="flex items-center justify-center mb-6 ">
                <FaLightbulb className="inline-block mr-2 text-4xl text-blue-600" />
                <p>Smart LED lighting system reacts to the environment</p>
              </div>
              <div className="flex items-center justify-center mb-6">
                <FaThermometerHalf className="inline-block mr-2 text-4xl text-blue-600" />
                <p>Temperature monitoring and regulation</p>
              </div>
              <div className="flex items-center justify-center mb-6">
                <FaWifi className="inline-block mr-2 text-4xl text-blue-600" />
                <p>
                  5G / LTE gateway router, optional (W)LAN internet connection
                </p>
              </div>
              <div className="flex items-center justify-center mb-6">
                <FaMicrochip className="inline-block mr-2 text-4xl text-blue-600" />
                <p>Embedded microcontroller system</p>
              </div>
              <div className="flex items-center justify-start mb-6 ">
                <FaCubes className="inline-block mr-2 text-4xl text-blue-600" />
                <p>Single or double fridge</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/vending.PNG"
              alt="Smart Vending Machine"
              className="max-w-full h-auto"
            />
          </div>

          <div
            className="text-black flex flex-col justify-center font-bold 
          items-center sm:items-start"
          >
            <div className="w-3/4 ">
              <div className="flex items-center justify-center mb-6">
                <p>
                  Computer vision for customer analysis or product recognition
                </p>
                <FaEye className="inline-block ml-2 text-4xl text-blue-600" />
              </div>
              <div className="flex items-center justify-center mb-6">
                <p>29&quot; HD screens for interactive video content</p>
                <FaTv className="inline-block ml-2 text-4xl text-blue-600" />
              </div>
              <div className="flex items-center justify-center mb-6">
                <p>Dolby Atmos speakers for audio guidance</p>
                <FaVolumeUp className="inline-block ml-2 text-4xl text-blue-600" />
              </div>
              <div className="flex items-center justify-center mb-6">
                <p>Proximity beacons for personalized offers</p>
                <FaMapMarkerAlt className="inline-block ml-2 text-4xl text-blue-600" />
              </div>
              <div className="flex items-center justify-center mb-6">
                <p>Electromagnetic door lock and access control system</p>
                <FaLock className="inline-block ml-2 text-4xl text-blue-600" />
              </div>
              <div className="flex items-center justify-center mb-6">
                <p>10.1” HD touch screen interface</p>
                <FaTabletAlt className="inline-block ml-2 text-4xl text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
