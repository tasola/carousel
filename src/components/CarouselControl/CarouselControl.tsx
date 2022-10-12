import { Flex } from "vcc-ui";
import ChevronButton from "../ChevronButton/ChevronButton";

const carouselControl = {
  flexFlow: "row",
}

const CarouselControl = () => {
  return (
    <Flex extend={carouselControl}>
      <ChevronButton
        src="/icons/chevron-circled.svg"
        alt="show previous section of cars"
        direction="LEFT"
      />
      <ChevronButton
        src="/icons/chevron-circled.svg"
        alt="show next section of cars"
      />
    </Flex>
  );
};

export default CarouselControl;
