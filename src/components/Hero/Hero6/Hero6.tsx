"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "./SliderComponent";
import { boxes } from "./sliderData";
import TransitionWrapper from "@/components/TransitionWrapper";

const Hero6 = () => {
  return (
    <div id="hero6" className="bg-white p-10 text-gray-600">
      <TransitionWrapper direction="y" offset="20">
        <div className="container mx-auto text-center lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">
            Vendosmart operations is powered by Fresh Mix catering. We provide a
            delicious selection of cold sandwiches, hot meals, salads, desserts
            and drinks. All our food items are freshly prepared, replenished and
            replaced daily .
          </h1>
        </div>
      </TransitionWrapper>
      <TransitionWrapper direction="x" offset="20">
        <div>
          <p
            className="mb-8 lg:w-1/2 md:w-full p-2 font-semibold text-2xl text-center
           mx-auto text-gray-600"
          >
            Slide to view some of the items in our fridges
          </p>
        </div>
      </TransitionWrapper>
      <div>
        <Slider boxes={boxes} />
      </div>
    </div>
  );
};

export default Hero6;
