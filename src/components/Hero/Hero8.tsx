import React from "react";
import Image from "next/image";

const Hero8: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-950 via-blue-950
     to-blue-950 flex flex-col justify-center items-center lg:p-0 p-2
      min-h-screen"
    >
      <div
        className="flex flex-col md:flex-row w-full md:w-2/3
       items-center mb-8"
      >
        <div
          className="flex flex-col md:flex-row items-center 
        w-full md:w-auto text-center"
        >
          <h2
            className="text-3xl font-bold mb-4 text-custom-yellow
           md:mb-0 md:mr-8"
          >
            PRODUCT PLACEMENT & DIMENSIONS
          </h2>
          <div className="flex justify-center items-center">
            <Image width={200} height={200} src="/logo.svg" alt="Logo" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          width={1000}
          height={1000}
          src="/placement_vending-removebg-preview.png"
          alt="placement_vending-modified"
        />
      </div>
    </div>
  );
};

export default Hero8;
