"use client";
import Image from "next/image";
import React, { FC, ReactElement, useEffect, useState } from "react";
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

interface FeatureProps {
  icon: ReactElement;
  text: string;
}

const FeatureRight: FC<FeatureProps> = ({ icon, text }: any) => (
  <div className="flex mb-6">
    {icon}
    <p className="text-blue-950">{text}</p>
  </div>
);

const FeatureLeft: FC<FeatureProps> = ({ icon, text }) => (
  <div className="flex justify-between items-center mb-6 text-blue-950">
    <p>{text}</p>
    <div className="ml-2 text-4xl text-custom-teal">{icon}</div>
  </div>
);

interface IconWrapperProps {
  icon: ReactElement;
}

const IconWrapper: FC<IconWrapperProps> = ({ icon }) => (
  <div className="inline-block mr-4 text-4xl text-custom-teal">{icon}</div>
);

const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      setIsVisible(top > 300); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="hero2"
      className="bg-white flex items-center min-h-screen overflow-hidden"
    >
      <div className="lg:w-4/5 w-full mx-auto p-5">
        <h1
          className={`text-3xl lg:text-4xl font-bold text-blue-950 mb-4 sm:text-center transition-transform ${
            isVisible
              ? "duration-1000 transform translate-0 opacity-100"
              : "opacity-0 transform translate-y-full"
          }`}
        >
          The vending system for efficient and flexible shopping
        </h1>
        <p
          className={`text-lg text-blue-950 mb-6 sm:text-center transition-transform ${
            isVisible
              ? "duration-1000 transform translate-0 opacity-100"
              : "opacity-0 transform translate-x-full"
          }`}
        >
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
          <div className="flex-col font-bold">
            <div className="lg:w-3/4 w-full flex flex-col mx-auto">
              <FeatureRight
                icon={<IconWrapper icon={<FaWeightHanging />} />}
                text="Intelligent shelves with 3D weight sensors"
              />
              <FeatureRight
                icon={<IconWrapper icon={<FaLightbulb />} />}
                text="Smart LED lighting system reacts to the environment"
              />
              <FeatureRight
                icon={<IconWrapper icon={<FaThermometerHalf />} />}
                text="Temperature monitoring and regulation"
              />
              <FeatureRight
                icon={<IconWrapper icon={<FaWifi />} />}
                text="5G / LTE gateway router, optional (W)LAN internet connection"
              />
              <FeatureRight
                icon={<IconWrapper icon={<FaMicrochip />} />}
                text="Embedded microcontroller system"
              />
              <FeatureRight
                icon={<IconWrapper icon={<FaCubes />} />}
                text="Single or double fridge"
              />
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
          <div className="flex-col font-bold">
            <div className="lg:w-3/4 w-full flex flex-col mx-auto">
              <FeatureLeft
                icon={<FaEye />}
                text="Computer vision for customer analysis or product recognition"
              />
              <FeatureLeft
                icon={<FaTv />}
                text='29" HD screens for interactive video content'
              />
              <FeatureLeft
                icon={<FaVolumeUp />}
                text="Dolby Atmos speakers for audio guidance"
              />
              <FeatureLeft
                icon={<FaMapMarkerAlt />}
                text="Proximity beacons for personalized offers"
              />
              <FeatureLeft
                icon={<FaLock />}
                text="Electromagnetic door lock and access control system"
              />
              <FeatureLeft
                icon={<FaTabletAlt />}
                text="10.1” HD touch screen interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
