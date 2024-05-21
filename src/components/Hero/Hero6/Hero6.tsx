"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "./SliderComponent";
import { boxes } from "./sliderData";

const Hero6 = () => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  const transitionClassesX = isVisible
    ? "transition-transform duration-1000 transform translate-x-0 opacity-100"
    : "opacity-0 transform translate-x-10";
  const transitionClassesY = isVisible
    ? "transition-transform duration-1000 transform translate-y-0 opacity-100"
    : "opacity-0 transform translate-y-5";

  return (
    <div ref={ref} className="bg-white p-10">
      <div className="container mx-auto text-center w-2/3">
        <h1 className={`text-4xl font-bold mb-4 ${transitionClassesY}`}>
          Innovation in a Variety of Industries: The Diverse Applications of
          Livello Vending Machines
        </h1>
      </div>
      <div>
        <p
          className={`text-lg mb-8 lg:w-3/4 md:w-full p-2
           mx-auto  ${transitionClassesX}`}
        >
          Livello vending machines offer flexibility for use in a variety of
          industries. Whether in retail, hospitality, public facilities, or in
          the industrial sector, our machines can be placed in almost any
          location and help improve the efficiency and profitability of your
          business.
        </p>
      </div>
      <div>
        <Slider boxes={boxes} />
      </div>
    </div>
  );
};

export default Hero6;
