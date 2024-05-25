"use client";
import React, { useState } from "react";
import Slider from "./SliderComponent";
import { boxes } from "./sliderData";
import TransitionWrapper from "@/components/TransitionWrapper";
import SliderComponent from "./Slider";

const Hero6 = () => {
  return (
    <div id="hero6" className="bg-white p-10 text-gray-600">
      <div className="container mx-auto text-center lg:w-1/2">
        <TransitionWrapper direction="y" offset="20">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">
            Vendosmart operations is powered by Fresh Mix catering
          </h1>
        </TransitionWrapper>
        <TransitionWrapper direction="x" offset="20">
          <h3 className="text-3xl mb-4 text-blue-950">
            We provide a delicious selection of cold sandwiches, hot meals,
            salads, desserts and drinks. All our food items are freshly
            prepared, replenished and replaced daily
          </h3>
        </TransitionWrapper>
      </div>

      <div>
        <SliderComponent boxes={boxes} />
      </div>
    </div>
  );
};

export default Hero6;
