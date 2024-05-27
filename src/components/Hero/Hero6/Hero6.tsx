"use client";
import React, { useState } from "react";
import { boxes } from "./sliderData";
import SliderComponent from "./Slider";

const Hero6 = () => {
  return (
    <div id="hero6" className="bg-white p-10">
      <div className="container mx-auto text-center lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-blue-950">
          Vendosmart operations is powered by <> </>
          <a
            href="https://www.instagram.com/freshmix.ae?igsh=dzRnc3NncDdzc2x2"
            target="_blank"
            rel="noopener"
          >
            freshmix.ae
          </a>
          <> </>catering
        </h1>
        <h3 className="text-3xl mb-4 text-blue-950">
          We provide a delicious selection of cold sandwiches, hot meals,
          salads, desserts and drinks. All our food items are freshly prepared,
          replenished and replaced daily
        </h3>
      </div>

      <div>
        <SliderComponent boxes={boxes} />
      </div>
    </div>
  );
};

export default Hero6;
