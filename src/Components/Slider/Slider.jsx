import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    { image: "images/slide-1.png", description: "Slide 1" },
    { image: "images/slide-2.png", description: "Slide 2" },
    { image: "images/slide-3.png", description: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider" >
      {slides.map((slide, index) => {
        const offset = (index - currentIndex + slides.length) % slides.length;

        const isCurrent = offset === 0;
        const isNext = offset === 1 || offset === -slides.length + 1;
        const isPrev = offset === slides.length - 1;

        return (
          <div className="slider-block"
            key={index}
            style={{
              position: "absolute",
              top: "50%",
              left: `${50 + (offset - 1) * 10}%`,
              transform: `translate(-50%, -50%) scale(${
                isCurrent ? 1 : 0.8
              })`,
              zIndex: isCurrent ? 3 : isNext || isPrev ? 2 : 1,
              opacity: isCurrent ? 1 : 0.6,
              transition: "all 0.5s ease-in-out",
            }}
          >
            <img className="slider-image"
              src={slide.image}
              alt="game-image"/>
          </div>
        );
      })}
      <button className="next-button"
        onClick={handleNext}> <img src="images/switch.png" alt="switch" /> </button>
    </div>
  );
};

export default Slider;