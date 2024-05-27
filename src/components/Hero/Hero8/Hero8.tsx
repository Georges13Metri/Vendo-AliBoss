import React from "react";
import { boxes } from "./sliderDataPlaces";
import SliderPlaces from "./SliderPlaces";

const Hero8 = () => {
  return (
    <div className="bg-white p-10 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto text-center lg:w-2/3">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-950">
          Innovation in a Variety of Industries: The Diverse Applications of
          Vendo Vending Machines
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Vendo vending machines offer flexibility for use in a variety of
          industries. Whether in retail, hospitality, public facilities, or in
          the industrial sector, our machines can be placed in almost any
          location and help improve the efficiency and profitability of your
          business.
        </p>
      </div>
      <div className="mt-10">
        <SliderPlaces boxes={boxes} />
      </div>
    </div>
  );
};

export default Hero8;
