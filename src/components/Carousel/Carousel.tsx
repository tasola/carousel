import { Flex } from "vcc-ui";
import { Car } from "../../../shared/interfaces/car.interface";
import CarouselControl from "../CarouselControl/CarouselControl";
import CarProductCard from "../CarProductCard/CarProductCard";

interface Props {
  cars: Car[];
}

const Carousel = ({ cars }: Props): JSX.Element => {
  return (
    <div>
      <Flex
        extend={{
          flexDirection: "row",
          flexShrink: 0,
          width: `${cars.length * 25}vw`,
        }}
      >
        {cars.map((car) => (
          <CarProductCard key={car.id} car={car} />
        ))}
      </Flex>
      <CarouselControl />
    </div>
  );
};

export default Carousel;
