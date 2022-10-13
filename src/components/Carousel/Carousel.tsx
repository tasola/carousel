import React, { useEffect, useState } from "react";
import { Block, CurrentTheme, ExtendPropValue, Flex } from "vcc-ui";
import { breakpoints } from "../../../public/css/variables";
import { Car } from "../../../shared/interfaces/car.interface";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CarouselControl from "../CarouselControl/CarouselControl";
import CarProductCard from "../CarProductCard/CarProductCard";
import SlideIndicator from "../SlideIndicator/SlideIndicator";

interface Props {
  cars: Car[];
}

export type SlideDirection = "NEXT" | "PREVIOUS";

const carouselWindow = {
  overflow: "hidden",
};

const getCarouselStyle = (
  amountOfItems: number,
  carsPerSlide: number,
  activeSlideIndex: number
): ExtendPropValue<CurrentTheme, {}> => {
  return {
    "flex-direction": "row",
    flexShrink: 0,
    width: `${amountOfItems * (100 / carsPerSlide)}vw`,
    transitionProperty: "transform",
    transitionDuration: "0.4s",
    transform: `translateX(-${activeSlideIndex * 100}vw)`,
  };
};

const carouselControl = {
  marginRight: "20px",
  "@media (max-width: 576px)": {
    display: "none",
  },
};

const getAmountOfCarsToDisplayPerSlide = (windowWidth: number): number => {
  if (windowWidth < breakpoints.small) {
    return 1;
  }

  if (windowWidth < breakpoints.medium) {
    return 2;
  }

  if (windowWidth < breakpoints.large) {
    return 3;
  }

  return 4;
};

const Carousel = ({ cars }: Props): JSX.Element => {
  const windowDimensions = useWindowDimensions();

  const [carsPerSlide, setCarsPerSlide] = useState(
    getAmountOfCarsToDisplayPerSlide(0)
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [visibleItemIndices, setVisibleItemIndices] = useState([
    ...Array(carsPerSlide).keys(),
  ]);

  useEffect(() => {
    setCarsPerSlide(getAmountOfCarsToDisplayPerSlide(windowDimensions.width));
  }, [windowDimensions.width]);

  useEffect(() => {
    const visibleItemIndices = [...Array(carsPerSlide).keys()].map(
      (index) => index + activeSlideIndex * carsPerSlide
    );
    setVisibleItemIndices(visibleItemIndices);
  }, [carsPerSlide, activeSlideIndex]);

  const getNewSlideIndex = (slideDirection: SlideDirection): number => {
    if (slideDirection === "NEXT") {
      return activeSlideIndex + 1;
    }
    return activeSlideIndex - 1;
  };

  const changeSlide = (slideDirection: SlideDirection) => {
    const amountOfSlides = Math.ceil(cars.length / carsPerSlide);
    const newSlideIndex = getNewSlideIndex(slideDirection);

    if (newSlideIndex < 0) {
      return setActiveSlideIndex(amountOfSlides - 1);
    } else if (newSlideIndex > amountOfSlides - 1) {
      return setActiveSlideIndex(0);
    }

    setActiveSlideIndex(newSlideIndex);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const touchPosition = event.touches[0].clientX;
    setTouchPosition(touchPosition);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const previousTouchPosition = touchPosition;

    if (previousTouchPosition === null) {
      return;
    }

    const newTouchPosition = event.touches[0].clientX;
    const delta = previousTouchPosition - newTouchPosition;

    if (delta > 3) {
      changeSlide("NEXT");
    } else if (delta < -3) {
      changeSlide("PREVIOUS");
    }

    setTouchPosition(null);
  };

  return (
    <Block>
      <Flex extend={carouselWindow}>
        <Flex
          extend={getCarouselStyle(cars.length, carsPerSlide, activeSlideIndex)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {cars.map((car, index) => (
            <CarProductCard
              key={car.id}
              car={car}
              tabbable={visibleItemIndices.includes(index)}
            />
          ))}
        </Flex>
      </Flex>
      {carsPerSlide > 1 ? (
        <CarouselControl extend={carouselControl} changeSlide={changeSlide} />
      ) : (
        <SlideIndicator
          slidesAmount={cars.length}
          activeSlideIndex={activeSlideIndex}
        />
      )}
    </Block>
  );
};

export default Carousel;
