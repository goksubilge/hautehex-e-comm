import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SliderData from "../mocks/SliderData";

function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = SliderData();

  function nextSlide() {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }

  return (
    <div
      aria-label="slider"
      className="min-w-[414px] relative overflow-hidden flex justify-center"
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full sm:max-h-[calc(100vh-204px)] min-h-[500px] flex-shrink-0 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:-z-10"
          >
            <img
              src={slide.picture}
              alt={slide.alt}
              className="w-full min-h-[600px] object-cover"
            />
            <div className="absolute flex flex-col gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-20 backdrop-filter backdrop-blur-xs bg-[rgba(0,0,0,0.2)] p-6 rounded-xl">
              <h2 className="text-textPapayas-gray ">{slide.title}</h2>
              <p className="text-textPapayas-gray  mx-auto">
                {slide.description}
              </p>
              <button className="button-std">{slide.button}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 px-2 sm:px-4 md:px-6 h-full w-full flex items-center justify-between z-10">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all text-[#4A4E69] hover:text-[#FFFFFF]"
          />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all text-[#4A4E69] hover:text-[#FFFFFF]"
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
