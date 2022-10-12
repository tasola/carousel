import { useState } from "react";
import { Flex } from "vcc-ui";
import { Car } from "../../../shared/interfaces/car.interface";
import CarouselControl from "../CarouselControl/CarouselControl";
import CarProductCard from "../CarProductCard/CarProductCard";

interface Props {
  cars: Car[];
}

export type SlideDirection = "NEXT" | "PREVIOUS";

const CARS_PER_SLIDE = 4;

const Carousel = ({ cars }: Props): JSX.Element => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const getNewSlideIndex = (slideDirection: SlideDirection): number => {
    if (slideDirection === "NEXT") {
      return activeSlideIndex + 1;
    }
    return activeSlideIndex - 1;
  };

  const changeSlide = (slideDirection: SlideDirection) => {
    const amountOfSlides = Math.ceil(cars.length / CARS_PER_SLIDE);
    const newSlideIndex = getNewSlideIndex(slideDirection);

    if (newSlideIndex < 0) {
      return setActiveSlideIndex(amountOfSlides - 1);
    } else if (newSlideIndex > amountOfSlides - 1) {
      return setActiveSlideIndex(0);
    }

    setActiveSlideIndex(newSlideIndex);
  };

  return (
    <div>
      <Flex
        extend={{
          flexDirection: "row",
          flexShrink: 0,
          width: `${cars.length * (100 / CARS_PER_SLIDE)}vw`,
          transitionProperty: "transform",
          transitionDuration: "0.4s",
          transform: `translateX(-${activeSlideIndex * 100}vw)`,
        }}
      >
        {cars.map((car) => (
          <CarProductCard key={car.id} car={car} />
        ))}
      </Flex>
      <CarouselControl changeSlide={changeSlide} />
    </div>
  );
};

export default Carousel;
