"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Box {
  bgImage: string;
  title: string;
  description: string;
  href?: string;
}

interface SliderProps {
  boxes: Box[];
}

const Slider: React.FC<SliderProps> = ({ boxes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleBoxes = 5;
  const spaceBetweenBoxes = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const autoScrollInterval = 5000;

  const calculateMaxVisibleBoxes = () => {
    // Check if the containerRef has been initialized
    if (containerRef.current) {
      // Retrieve the width of the container
      const containerWidth = containerRef.current.offsetWidth;
      // Update the state variable to store the container width
      setContainerWidth(containerWidth);
      // Calculate the width of each box, considering spacing between boxes
      const boxWidth =
        (containerWidth - (maxVisibleBoxes - 1) * spaceBetweenBoxes) /
        maxVisibleBoxes;
      // Calculate and return the maximum number of visible boxes
      //based on the container width and box width
      return Math.floor(containerWidth / boxWidth);
    }
    // If containerRef is not initialized, return the current value of maxVisibleBoxes
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
      calculateMaxVisibleBoxes();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleScroll("right"); // Auto-scroll to the right
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="flex items-center overflow-x-auto no-scrollbar">
        <button
          title="left"
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2
           bg-white rounded-full p-2 z-10"
        >
          <FiChevronLeft className="text-5xl text-black cursor-pointer" />
        </button>
        <div
          className="flex transition-transform duration-300 ease-in-out border-2 "
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
              className="w-full"
              style={{
                // flex-grow: 0 - The flex item won't grow to fill the available space.
                //flex-shrink: 0 - The flex item won't shrink if there's not enough space.
                // flex-basis: calc(${100 / maxVisibleBoxes}% - ${spaceBetweenBoxes}px) -
                //The initial size of the flex item is calculated based on the available space,
                // ensuring that each box takes up an equal portion of the container width while
                // considering the spacing between boxes (spaceBetweenBoxes).
                flex: `0 0 calc(${
                  100 / maxVisibleBoxes
                }% - ${spaceBetweenBoxes}px)`,
                marginRight:
                  index === boxes.length - 1 ? 0 : `${spaceBetweenBoxes}px`,
              }}
            >
              <div
                className="bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${box.bgImage})` }}
              >
                <div
                  className="flex flex-col justify-center items-center h-full
                 text-white"
                >
                  <h3 className="text-xl font-semibold">{box.title}</h3>
                  <p className="text-sm">{box.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          title="right"
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2
           bg-white rounded-full p-2 z-10"
        >
          <FiChevronRight className="text-5xl text-black cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
