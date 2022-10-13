import React from "react";
import { Block, CurrentTheme, ExtendPropValue, Flex } from "vcc-ui";

interface Props {
  slidesAmount: number;
  activeSlideIndex: number;
}

const slideIndicator = {
  flexFlow: "row",
  justifyContent: "space-between",
  width: "150px",
  margin: "auto"
}

const getSlideIndicatorDot = (isActiveElement: boolean): ExtendPropValue<CurrentTheme, {}> => {
  return {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: isActiveElement ? "primitive.grey200" : "primitive.grey400",
  };
};

const SlideIndicator = ({ slidesAmount, activeSlideIndex }: Props) => {
  return (
    <Flex extend={slideIndicator}>
      {[...Array(slidesAmount).keys()].map((_, index) => (
        <Block
          key={index}
          extend={getSlideIndicatorDot(index === activeSlideIndex)}
        ></Block>
      ))}
    </Flex>
  );
};

export default SlideIndicator;
