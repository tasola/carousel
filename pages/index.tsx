import { Block, Text } from "vcc-ui";
import { Car } from "../shared/interfaces/car.interface";
import Carousel from "../src/components/Carousel/Carousel/Carousel";
import CarProductCard from "../src/components/CarProductCard/CarProductCard";
import { getCars } from "../src/service/car.service";

interface Props {
  cars: Car[];
  error?: Error;
}

const HomePage = ({ cars, error }: Props) => {
  const renderCarProductCards = (visibleItemIndices: number[]) => {
    return cars.map((car, index) => (
      <CarProductCard
        key={car.id}
        car={car}
        isVisible={visibleItemIndices.includes(index)}
        as="li"
      />
    ));
  };

  if (error !== undefined) {
    return (
      <Block>
        <Text as="h1">{`Something went wrong...`}</Text>
      </Block>
    );
  }

  return (
    <Block>
      <Carousel
        amountOfItems={cars.length}
        ariaLabel={`List of cars available for purchase.`}
      >
        {renderCarProductCards}
      </Carousel>
    </Block>
  );
};

export async function getServerSideProps() {
  try {
    const response = await getCars();
    return {
      props: {
        cars: response,
      },
    };
  } catch (caught) {
    return {
      props: {
        error: true,
      },
    };
  }
}

export default HomePage;
