import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { GoDot } from "react-icons/go";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='sliderr'>
      <div className='slidermessage'>
       <h1>The New Way To Display Product by <a href="">Colorlib</a></h1>
       <br /><br />
       <button>Explore Now</button>
      </div>
      <div className='arrows'>
      <GoDot className='left-arrow' onClick={prevSlide} />
      <GoDot className='right-arrow' onClick={nextSlide} />
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;