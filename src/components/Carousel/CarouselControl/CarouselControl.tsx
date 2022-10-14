import { CurrentTheme, ExtendPropValue, Flex } from "vcc-ui";
import { SlideDirection } from "../Carousel/Carousel";
import ChevronButton from "../../ChevronButton/ChevronButton";
import styles from "./carouselControl.styles";

interface Props {
  changeSlide: (slideDirection: SlideDirection) => void;
  activeSlideIndex: number;
  amountOfSlides: number;
  extend?: ExtendPropValue<CurrentTheme, {}>;
}

const CarouselControl = ({
  changeSlide,
  activeSlideIndex,
  amountOfSlides,
  extend,
}: Props) => {
  return (
    <Flex extend={{ ...styles.carouselControl, ...extend }}>
      <ChevronButton
        onClick={() => changeSlide("PREVIOUS")}
        src="/icons/chevron-circled.svg"
        alt={`${
          activeSlideIndex === 0
            ? "Show last section of cars"
            : "Show previous section of cars"
        }`}
        direction="LEFT"
      />
      <ChevronButton
        onClick={() => changeSlide("NEXT")}
        src="/icons/chevron-circled.svg"
        alt={`${
          activeSlideIndex === amountOfSlides - 1
            ? "Show first section of cars"
            : "Show next section of cars"
        }`}
      />
    </Flex>
  );
};

export default CarouselControl;
