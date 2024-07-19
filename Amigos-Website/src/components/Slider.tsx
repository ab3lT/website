import { Box, Image, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import slidel from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  { image: slidel, text: 'Slide 1 text' },
  { image: slide2, text: 'Slide 2 text' },
  { image: slide3, text: 'Slide 3 text' },
];

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderValue((prevValue) => (prevValue + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setSliderValue((prevValue) => (prevValue - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setSliderValue((prevValue) => (prevValue + 1) % slides.length);
  };

  return (
    <Box position="relative" w="full" h="600px" overflow="hidden">
      {slides.map((slide, index) => (
        <Box
          key={index}
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          opacity={sliderValue === index ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          zIndex={sliderValue === index ? 1 : 0}
        >
          <Image
            src={slide.image}
            alt={slide.text}
            objectFit="contain"
            w="full"
            h="full"
          />
          <Text
            position="absolute"
            top="50%"
            left="4"
            transform="translateY(-50%)"
            fontSize="lg"
            fontWeight="bold"
            color="white"
            bg="rgba(0, 0, 0, 0.5)"
            p="4"
          >
            {slide.text}
          </Text>
        </Box>
      ))}
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Slide"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        width="50px"
        height="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={handlePrevSlide}
        bg="grey.600"
        color="white"
        _hover={{ bg: "blue.600" }}
        zIndex={2}
      />
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Slide"
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        width="50px"
        height="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={handleNextSlide}
        bg="blue.500"
        color="white"
        _hover={{ bg: "blue.600" }}
        zIndex={2}
      />
      <Box
        position="absolute"
        bottom="4"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        alignItems="center"
        zIndex={3}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            w="4"
            h="4"
            borderRadius="50%"
            bg={sliderValue === index ? 'blue.500' : 'gray.300'}
            mx="1"
            cursor="pointer"
            onClick={() => setSliderValue(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SliderComponent;
