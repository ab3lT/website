// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    '../assets/slide1.png',
    '../assets/slide2.png',
    '../assets/slide3.png',
  ];

  return (
    <Box width="80%" margin="auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} p={2}>
            <Image src={src} alt={`Slide ${index}`} borderRadius="md" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
