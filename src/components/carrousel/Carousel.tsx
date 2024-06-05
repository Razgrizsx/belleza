"use client";

import React, { useState, useEffect } from "react";
import "./Carousel.css";

interface Props {
  images: string[];
  autoPlay?: boolean;
  autoPlayTime?: number;
}

export const Carousel = ({
  images,
  autoPlay = true,
  autoPlayTime = 3000
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(goToNext, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayTime]);

  return (
    <div className='flex w-full justify-center'>
      <div className='carousel'>
        <div
          className='carousel-inner'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className='carousel-item' key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button onClick={goToPrevious} className='carousel-control prev'>
          Previous
        </button>
        <button onClick={goToNext} className='carousel-control next'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
