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
    <div ref={ref} className="bg-white p-10 text-black">
      <div className="container mx-auto text-center lg:w-1/2">
        <h1 className={`text-4xl font-bold mb-4 ${transitionClassesY}`}>
          Vendosmart operations is powered by hostmind.ae catering. We provide a
          delicious selection of cold sandwiches, hot meals, salads, desserts
          and drinks. All our food items are freshly prepared, replenished and
          replaced daily .
        </h1>
      </div>
      <div>
        <p
          className={` mb-8 lg:w-1/2 md:w-full p-2 font-semibold
           text-black text-2xl text-center
           mx-auto  ${transitionClassesX}`}
        >
          Slide to view some of the items in our fridges
        </p>
      </div>

      <div>
        <Slider boxes={boxes} />
      </div>
    </div>
  );
};

export default Hero6;
