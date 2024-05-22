"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Box {
  bgImage: string;
  title: string;
  description?: string;
  href?: string;
}

interface SliderProps {
  boxes: Box[];
}

const Slider: React.FC<SliderProps> = ({ boxes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxVisibleBoxes, setMaxVisibleBoxes] = useState(4);
  const spaceBetweenBoxes = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = 5000;

  const calculateMaxVisibleBoxes = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const boxWidth =
        (containerWidth - (maxVisibleBoxes - 1) * spaceBetweenBoxes) /
        maxVisibleBoxes;
      return Math.floor(containerWidth / boxWidth);
    }
    return maxVisibleBoxes;
  };

  const handleScroll = (direction: "left" | "right") => {
    const newVisibleBoxes = calculateMaxVisibleBoxes();
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? Math.max(0, prevIndex - 1)
        : Math.min(boxes.length - newVisibleBoxes, prevIndex + 1)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setMaxVisibleBoxes(
        window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1
      );
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleScroll("right");
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="flex items-center overflow-x-auto no-scrollbar h-[300px]">
        <button
          title="left"
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
        >
          <FiChevronLeft className="text-5xl text-black cursor-pointer" />
        </button>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            width: `${boxes.length * (100 / maxVisibleBoxes)}%`,
            transform: `translateX(-${
              currentIndex * (100 / maxVisibleBoxes)
            }%)`,
          }}
        >
          {boxes.map((box, index) => (
            <div
              key={index}
              className="relative flex w-full text-center justify-center"
              style={{
                flex: `0 0 calc(${
                  100 / maxVisibleBoxes
                }% - ${spaceBetweenBoxes}px)`,
                marginRight:
                  index === boxes.length - 1 ? 0 : `${spaceBetweenBoxes}px`,
              }}
            >
              <Image
                alt={box.title}
                width={300}
                height={200}
                className="object-cover h-full w-full"
                src={box.bgImage}
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white">
                <h3 className="text-lg font-semibold">{box.title}</h3>
                <p className="text-sm">{box.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          title="right"
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
        >
          <FiChevronRight className="text-5xl text-black cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
