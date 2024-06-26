"use client";
import React from "react";
import { FaShoppingCart, FaBoxes, FaShieldAlt, FaLeaf } from "react-icons/fa";

const Hero4 = () => {
  return (
    <div
      id="hero4"
      className="bg-white p-2 text-black min-h-screen 
      flex items-center"
    >
      <div className=" flex flex-col text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-950">
          The pros of our vending machine at a sight
        </h1>
        <p
          className="text-lg mb-8 lg:w-3/4 md:w-full p-2
         text-blue-950 mx-auto "
        >
          Compared to classic vending machines, the VendoSmart Smart Kiosk
          offers a clearer assortment, more space for fresh products and enables
          forward planning in connection with optimized supply chains and the
          reduction of food waste. At the same time, the focus is on the special
          shopping experience for consumers and ensures quick and easy shopping
          nearby.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 sm:w-full sm:mx-auto mx-auto lg:w-2/3">
          <ContentBox
            icon={<FaShoppingCart />}
            title="Unique Shopping Experience"
            description="Do you buy fresh food in the supermarket without first being sure of the quality? Probably not - but this is exactly what happens with most conventional vending machines."
          />
          <ContentBox
            icon={<FaBoxes />}
            title="Varied Assortment Design"
            description="Do you buy fresh food in the supermarket without first being sure of the quality? Probably not - but this is exactly what happens with most conventional vending machines."
          />
          <ContentBox
            icon={<FaShieldAlt />}
            title="Maximum Security"
            description="Do you buy fresh food in the supermarket without first being sure of the quality? Probably not - but this is exactly what happens with most conventional vending machines."
          />
          <ContentBox
            icon={<FaLeaf />}
            title="Sustainability"
            description="Do you buy fresh food in the supermarket without first being sure of the quality? Probably not - but this is exactly what happens with most conventional vending machines."
          />
        </div>
      </div>
    </div>
  );
};

interface ContentBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="border p-4 rounded-lg bg-blue-100 py-20">
    <div className="flex justify-center text-6xl text-blue-950">{icon}</div>
    <h2 className="text-xl font-semibold mt-4 text-blue-950">{title}</h2>
    <div className="border-b-2 border-blue-950 w-1/4 mx-auto my-2"></div>
    <p className="text-sm text-blue-950">{description}</p>
  </div>
);

export default Hero4;
