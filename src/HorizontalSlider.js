import React from 'react';
import Slider from 'react-slick';

const HorizontalSlider = ({ items }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of visible slides at a time
    slidesToScroll: 1,
    arrows: true,
    dots:true
  };

  return (
    <div className="horizontal-slider">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-item ">
            {item }
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
