import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const images = [
  "https://images.pexels.com/photos/2315309/pexels-photo-2315309.jpeg",
  "https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg",
  "https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg",
  "https://images.pexels.com/photos/3598015/pexels-photo-3598015.jpeg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : (prev) => prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : (prev) => prev + 1
    );
  };

  return (
    <div className="h-[90vh] w-full relative">
      <div
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        className="flex h-[100vh] w-[100vw] object-contain overflow-x- transition-all ease-in-out duration-1000"
      >
        <img
          className="h-[90vh] min-w-[100vw] object-cover"
          src={images[0]}
          alt="model"
        />
        <img
          className="h-[90vh] min-w-[100vw] object-cover"
          src={images[1]}
          alt="model"
        />
        <img
          className="h-[90vh] min-w-[100vw] object-cover"
          src={images[2]}
          alt="model"
        />
        <img
          className="h-[90vh] min-w-[100vw] object-cover"
          src={images[3]}
          alt="model"
        />
      </div>

      <div className="flex justify-between w-[100vw] px-20 mx-auto absolute top-[40%]">
        <button
          className="flex justify-center items-center border-2 border-black rounded-full h-10 w-10 cursor-pointer"
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="flex justify-center items-center border-2 border-black rounded-full h-10 w-10 cursor-pointer"
          onClick={nextSlide}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
