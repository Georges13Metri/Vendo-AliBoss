"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Hero8: React.FC = () => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  const transitionClassesX = isVisible
    ? "transition-transform duration-1000 transform translate-x-0 opacity-100"
    : "opacity-0 transform translate-x-[-60%]";
  const transitionClassesY = isVisible
    ? "transition-transform duration-1000 transform translate-y-0 opacity-100"
    : "opacity-0 transform translate-y-10";
  return (
    <div
      ref={ref}
      className="bg-white flex justify-center items-center
     text-black p-5"
    >
      <div
        className="container mx-auto p-8 grid grid-cols-1
       md:grid-cols-2 gap-8 lg:w-2/3 w-full"
      >
        <div>
          <div className={` ${transitionClassesY}`}>
            <h2 className="text-3xl font-bold mb-4">
              Vendo&apos;s Smart Store Solution
            </h2>
          </div>
          <div className={` ${transitionClassesX}`}>
            <p className="mb-4">
              Experience shopping innovation with our Grab&apos;n Go Container
              Store, a key product in our smart store range. This mobile and
              cashierless convenience store brings a new dimension to the
              shopping experience through flexibility and state-of-the-art
              technology.
            </p>
            <ul className="list-disc list-inside space-y-2 font-bold">
              <li>Mobile and cashierless convenience store</li>
              <li>Transportable, flexible set-up, ideal for car parks</li>
              <li>
                Customer and product recognition through computer vision and
                intelligent shelves
              </li>
              <li>Self-service and autonomous check-out</li>
            </ul>
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-4
           hover:bg-blue-950 font-bold rounded-lg mt-10 w-2/3"
          >
            Learn more
          </button>
        </div>

        <div className="flex justify-center ">
          <Image
            src="/SmartStoreContainer.webp"
            alt="Smart Store"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero8;
