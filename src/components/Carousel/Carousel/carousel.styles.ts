import { CurrentTheme, ExtendPropValue } from "vcc-ui";

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

const styles = {
  carouselWindow,
  getCarouselStyle,
  carouselControl
};

export default styles;