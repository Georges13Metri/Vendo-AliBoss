"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Image from "next/image"; // Import your Box interface
import { useState } from "react";
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

const SliderComponent: React.FC<SliderProps> = ({ boxes }) => {
  const [swiper, setSwiper] = useState<any>(null);

  const goToNextSlide = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="relative">
      <button
        title="left"
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 transform
         -translate-y-1/2 bg-white rounded-full p-2 z-10"
      >
        <FiChevronLeft className="text-5xl text-blue-950 cursor-pointer" />
      </button>
      <Swiper
        spaceBetween={30} // Space between slides
        loop={true} // Infinite loop
        onSwiper={setSwiper}
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {boxes.map((box, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={box.bgImage}
                  alt={box.title}
                  width={300}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white text-center">
                <h2 className="text-lg font-semibold ">{box.title}</h2>
                {/* {box.description && (
                  <p className="mt-1 text-center">{box.description}</p>
                )}
                {box.href && (
                  <a href={box.href} className="text-blue-500 mt-1 inline-block">
                    Learn More
                  </a>
                )} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        title="right"
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform
         -translate-y-1/2 bg-white rounded-full p-2 z-10"
      >
        <FiChevronRight
          className="text-5xl text-blue-950
         cursor-pointer"
        />
      </button>
    </div>
  );
};

export default SliderComponent;
