import { Block } from "vcc-ui";
import { Car } from "../shared/interfaces/car.interface";
import Carousel from "../src/components/Carousel/Carousel/Carousel";
import CarProductCard from "../src/components/CarProductCard/CarProductCard";
import { getCars } from "../src/service/car.service";

interface Props {
  cars: Car[];
}

const HomePage = ({ cars }: Props) => {
  const renderCarProductCards = (visibleItemIndices: number[]) => {
    return cars.map((car, index) => (
      <CarProductCard
        key={car.id}
        car={car}
        tabbable={visibleItemIndices.includes(index)}
      />
    ));
  };

  return (
    <Block>
      <Carousel amountOfItems={cars.length}>{renderCarProductCards}</Carousel>
    </Block>
  );
};

export async function getServerSideProps() {
  const response = await getCars();
  return {
    props: {
      cars: response,
    },
  };
}

export default HomePage;
