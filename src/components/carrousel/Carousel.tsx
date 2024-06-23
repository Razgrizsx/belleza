"use client";

import React, { useState, useEffect } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

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
            <div className='carousel-item relative' key={index}>
              <div className='absolute flex flex-col gap-[1px] left-[15%] w-[230px] h-[200px] top-[10%]'>
                <div className='bg-white text-purple w-full pb-2 h-[55%] rounded-t-md flex flex-col items-center justify-center'>
                  <div className='text-[38px] flex flex-row'>
                    PYF <p className='font-semibold pl-3'>Belleza</p>
                  </div>
                  <p className='text-center text-sm leading-[15px]'>
                    distribuidora mayorista de cosméticos y perfumería
                  </p>
                </div>
                <div className='bg-purple text-sm text-white w-full h-[45%] rounded-b-md flex flex-col items-start pl-5 justify-center'>
                  <div className='flex flex-row items-center justify-center'>
                    <FaMapMarkerAlt className='fill-[#e38db2] w-3 h-3' />
                    <p className='pl-2'>Pasteur 127 - CABA</p>
                  </div>
                  <div className='flex flex-row items-center justify-center'>
                    <FaPhoneAlt className='fill-[#e38db2] w-3 h-3' />
                    <p className='pl-2'>4952-7534</p>
                  </div>
                  <div className='flex flex-row items-center justify-center'>
                    <FaEnvelope className='fill-[#e38db2] w-3 h-3' />
                    <p className='pl-2'>pyfperfumes@hotmail.com</p>
                  </div>
                </div>
              </div>
              <img src={image} alt={`Slide ${index}`} />
              <div className='absolute flex flex-col gap-[1px] right-[15%] w-[230px] h-[100px] top-[25%] text-[30px] font-bold text-white leading-[38px]'>
                <p>Nuevos</p>
                <p className='text-[#ffc4dc] text-[36px] h-1/2 w-[300px]'>
                  Labiales Mate
                </p>
                <button className='text-[14px] mt-2 w-[150px] hover:bg-white hover:text-purple font-normal border border-white'>
                  VER PRODUCTOS
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className='carousel-control prev flex items-center justify-center hover:bg-gradient-to-r hover:from-[#8a538a]'
        >
          <FaAngleLeft className='h-12 w-12 opacity-50' />
        </button>
        <button
          onClick={goToNext}
          className='carousel-control next flex items-center justify-center hover:bg-gradient-to-l hover:from-[#8a538a]'
        >
          <FaAngleRight className='h-12 w-12 opacity-50' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
