import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = () => {
  const pathFile = [
    require('../photos/promote.jpg'),
    require('../photos/promote2.jpg'),
    require('../photos/promote3.jpg'),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next slide index in a loop
      const nextSlide = (currentSlide + 1) % pathFile.length;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [currentSlide, pathFile]);

  return (
    <div className='slider'>
      <div className="slides">
        {pathFile.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'current' : ''}`}
            style={{
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`, // Adjust the slide width as needed
            }}
          >
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
