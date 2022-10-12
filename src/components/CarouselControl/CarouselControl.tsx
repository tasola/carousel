import { Flex } from "vcc-ui";
import { SlideDirection } from "../Carousel/Carousel";
import ChevronButton from "../ChevronButton/ChevronButton";

interface Props {
  changeSlide: (slideDirection: SlideDirection) => void;
}

const carouselControl = {
  flexFlow: "row",
  justifyContent: "flex-end"
}

const CarouselControl = ({ changeSlide }: Props) => {
  return (
    <Flex extend={carouselControl}>
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
