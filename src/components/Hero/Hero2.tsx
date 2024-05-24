import Image from "next/image";
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
import TransitionWrapper from "../TransitionWrapper";

const Hero2 = () => {
  return (
    <div
      className="bg-white flex 
    items-center min-h-screen"
    >
      <div className="max-w-7xl mx-auto p-5">
        <TransitionWrapper direction="y" offset="20">
          <h1
            className="text-3xl lg:text-4xl font-bold
         text-blue-950 mb-4 sm:text-center"
          >
            The vending system for efficient and flexible shopping
          </h1>
        </TransitionWrapper>
        <TransitionWrapper direction="x" offset="20">
          <p className="text-lg text-blue-950 mb-6 sm:text-center">
            Vendo&apos;s food vending machines revolutionize the shopping
            experience and allow businesses to efficiently extend their reach
            and hours of operation. Our 24/7 vending machines are flexible for
            use in commercial or residential settings and offer cashless payment
            options. Give your customers a seamless shopping experience with
            cashless payment options and an intelligent product assortment. With
            our white label option, you can customize the Smart Fridge to match
            your branding and reinforce your brand.
          </p>
        </TransitionWrapper>
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 p-5 
        sm:mx-auto md:mx-auto"
        >
          <div
            className="flex-col font-bold 
         "
          >
            <div className="lg:w-3/4 w-full">
              <div className="flex   mb-6">
                <FaWeightHanging
                  className="inline-block mr-2 text-4xl
                 text-custom-teal"
                />
                <p className="text-blue-950">
                  Intelligent shelves with 3D weight sensors
                </p>
              </div>
              <div className="flex   mb-6 ">
                <FaLightbulb className="inline-block mr-4 text-4xl text-custom-teal" />
                <p className="text-blue-950">
                  Smart LED lighting system reacts to the environment
                </p>
              </div>
              <div className="flex   mb-6">
                <FaThermometerHalf className="inline-block mr-4 text-4xl text-custom-teal" />
                <p className="text-blue-950">
                  Temperature monitoring and regulation
                </p>
              </div>
              <div className="flex   mb-6">
                <FaWifi className="inline-block mr-4 text-4xl text-custom-teal" />
                <p className="text-blue-950">
                  5G / LTE gateway router, optional (W)LAN internet connection
                </p>
              </div>
              <div className="flex   mb-6">
                <FaMicrochip className="inline-block mr-4 text-4xl text-custom-teal" />
                <p className="text-blue-950">Embedded microcontroller system</p>
              </div>
              <div className="flex   mb-6 ">
                <FaCubes className="inline-block mr-4 text-4xl text-custom-teal" />
                <p className="text-blue-950">Single or double fridge</p>
              </div>
            </div>
          </div>

          <div>
            <Image
              width={400}
              height={300}
              src="/VendoSmart.png"
              alt="Smart Vending Machine"
            />
          </div>

          <div
            className="  flex-col  font-bold lg:ml-7 
          "
          >
            <div className="lg:w-3/4 w-full">
              <div className="flex  mb-6 text-blue-950">
                <p>
                  Computer vision for customer analysis or product recognition
                </p>
                <FaEye className="inline-block ml-2 text-4xl text-custom-teal" />
              </div>
              <div className="flex  mb-6 text-blue-950">
                <p>29&quot; HD screens for interactive video content</p>
                <FaTv className="inline-block ml-2 text-4xl text-custom-teal" />
              </div>
              <div className="flex  mb-6 text-blue-950">
                <p>Dolby Atmos speakers for audio guidance</p>
                <FaVolumeUp className="inline-block ml-2 text-4xl text-custom-teal" />
              </div>
              <div className="flex  mb-6 text-blue-950">
                <p>Proximity beacons for personalized offers</p>
                <FaMapMarkerAlt className="inline-block ml-2 text-4xl text-custom-teal" />
              </div>
              <div className="flex  mb-6 text-blue-950">
                <p>Electromagnetic door lock and access control system</p>
                <FaLock className="inline-block ml-2 text-4xl text-custom-teal" />
              </div>
              <div className="flex   mb-6 text-blue-950">
                <p>10.1” HD touch screen interface</p>
                <FaTabletAlt className="inline-block ml-2 text-4xl text-custom-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
