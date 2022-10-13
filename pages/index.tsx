import { Block } from "vcc-ui";
import { Car } from "../shared/interfaces/car.interface";
import Carousel from "../src/components/Carousel/Carousel/Carousel";
import { getCars } from "../src/service/car.service";

interface Props {
  cars: Car[];
}

const HomePage = ({ cars }: Props) => {
  return (
    <Block>
      <Carousel cars={cars} />
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
