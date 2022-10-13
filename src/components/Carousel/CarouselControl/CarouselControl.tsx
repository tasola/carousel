import { CurrentTheme, ExtendPropValue, Flex } from "vcc-ui";
import { SlideDirection } from "../Carousel/Carousel";
import ChevronButton from "../../ChevronButton/ChevronButton";
import styles from "./carouselControl.styles";

interface Props {
  changeSlide: (slideDirection: SlideDirection) => void;
  extend?: ExtendPropValue<CurrentTheme, {}>;
}

const CarouselControl = ({ changeSlide, extend }: Props) => {
  return (
    <Flex extend={{ ...styles.carouselControl, ...extend }}>
      <ChevronButton
        onClick={() => changeSlide("PREVIOUS")}
        src="/icons/chevron-circled.svg"
        alt="show previous section of cars"
        direction="LEFT"
      />
      <ChevronButton
        onClick={() => changeSlide("NEXT")}
        src="/icons/chevron-circled.svg"
        alt="show next section of cars"
      />
    </Flex>
  );
};

export default CarouselControl;
