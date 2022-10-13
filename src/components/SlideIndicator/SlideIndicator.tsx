import React from "react";
import { Block, Flex } from "vcc-ui";
import styles from "./slideIndicator.styles";

interface Props {
  slidesAmount: number;
  activeSlideIndex: number;
}

const SlideIndicator = ({ slidesAmount, activeSlideIndex }: Props) => {
  return (
    <Flex extend={styles.slideIndicator}>
      {[...Array(slidesAmount).keys()].map((_, index) => (
        <Block
          key={index}
          extend={styles.getSlideIndicatorDot(index === activeSlideIndex)}
        ></Block>
      ))}
    </Flex>
  );
};

export default SlideIndicator;
