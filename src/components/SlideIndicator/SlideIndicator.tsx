import React from "react";
import { Block, Flex } from "vcc-ui";
import styles from "./slideIndicator.styles";

interface Props {
  slidesAmount: number;
  activeSlideIndex: number;
}

// a11y design suggestion: These dots should be larger than the design suggests,
// and potentially have higher contrast colors.
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
