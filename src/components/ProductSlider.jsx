import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductSliderData from "../mocks/ProductSliderData";

function ProductSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = ProductSliderData();

  function nextSlide() {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }

  return (
    <div
      aria-label="slider"
      className="min-w-[414px] pt-60 relative overflow-hidden flex flex-col bg-clue-green"
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[1200px] md:h-[500px] flex flex-col sm:flex-row flex-shrink-0 relative"
          >
            <div className="absolute flex flex-col items-center md:items-start max-w-[500px] gap-8 md:top-48 top-72 md:left-1/3 -translate-x-1/2 -translate-y-1/2 text-center left-1/2">
              <p className="text-textPapayas-gray text-lg">{slide.toptitle}</p>
              <h2 className="text-textPapayas-gray">{slide.title}</h2>
              <p className="text-textPapayas-gray min-w-min">
                {slide.description}
              </p>
              <div className="flex flex-col md:flex-row items-center gap-7">
                <p className="text-textPapayas-gray mx-auto -mb-3">
                  {slide.price1}
                </p>
                <button className="button-std text-sm">{slide.button}</button>
              </div>
            </div>
            <div className="absolute md:-bottom-40 md:right-32 -bottom-32 ">
              <img
                src={slide.picture}
                alt={slide.alt}
                className="w-[450px] h-full"
              />
            </div>
          </div>
        ))}
        ;
      </div>

      <div className="absolute top-0 px-6 sm:px-8 md:px-10 h-full w-full flex items-center justify-between z-10">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "#4A4E69" }}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#4A4E69" }}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;

/* 
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full sm:max-h-[calc(100vh-208px)] max-h-[600px] min-h-[500px] flex-shrink-0 relative"
          >
            <img src={slide.picture} alt={slide.alt} className="w-full pt-10" />
          </div>
        ))}
      </div> */
