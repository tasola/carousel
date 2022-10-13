import React, { useEffect, useState } from "react";
import { Block, Flex } from "vcc-ui";
import { breakpoints } from "../../../../public/css/variables";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SlideIndicator from "../../SlideIndicator/SlideIndicator";
import CarouselControl from "../CarouselControl/CarouselControl";
import styles from "./carousel.styles";

interface Props {
  amountOfItems: number;
  children: (visibleItemIndices: number[]) => React.ReactNode[];
}

export type SlideDirection = "NEXT" | "PREVIOUS";

const getAmountOfItemsToDisplayPerSlide = (windowWidth: number): number => {
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

const Carousel = ({ amountOfItems, children }: Props): JSX.Element => {
  const windowDimensions = useWindowDimensions();

  const [itemsPerSlide, setItemsPerSlide] = useState(
    getAmountOfItemsToDisplayPerSlide(0)
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [visibleItemIndices, setVisibleItemIndices] = useState([
    ...Array(itemsPerSlide).keys(),
  ]);

  useEffect(() => {
    setItemsPerSlide(getAmountOfItemsToDisplayPerSlide(windowDimensions.width));
  }, [windowDimensions.width]);

  useEffect(() => {
    const visibleItemIndices = [...Array(itemsPerSlide).keys()].map(
      (index) => index + activeSlideIndex * itemsPerSlide
    );
    setVisibleItemIndices(visibleItemIndices);
  }, [itemsPerSlide, activeSlideIndex]);

  const getNewSlideIndex = (slideDirection: SlideDirection): number => {
    if (slideDirection === "NEXT") {
      return activeSlideIndex + 1;
    }
    return activeSlideIndex - 1;
  };

  const changeSlide = (slideDirection: SlideDirection) => {
    const amountOfSlides = Math.ceil(amountOfItems / itemsPerSlide);
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
      <Flex extend={styles.carouselWindow}>
        <Flex
          extend={styles.getCarouselStyle(
            amountOfItems,
            itemsPerSlide,
            activeSlideIndex
          )}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {children(visibleItemIndices)}
        </Flex>
      </Flex>
      {itemsPerSlide > 1 ? (
        <CarouselControl
          extend={styles.carouselControl}
          changeSlide={changeSlide}
        />
      ) : (
        <SlideIndicator
          slidesAmount={amountOfItems}
          activeSlideIndex={activeSlideIndex}
        />
      )}
    </Block>
  );
};

export default Carousel;
