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
      className="min-w-[414px] mb-6 mt-20 relative overflow-hidden flex justify-center"
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full max-h-[calc(100vh-208px)] min-h-[500px] flex-shrink-0"
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <img
              src={slide.picture}
              alt={slide.alt}
              className="w-full min-h-[750px] aspect-video object-cover"
            />
            <div>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 px-2 sm:px-4 md:px-6 h-full w-full flex items-center justify-between z-10">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
