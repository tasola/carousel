import cars from "../public/api/cars.json";
import { Car } from "../shared/interfaces/car.interface";
import Carousel from "../src/components/Carousel/Carousel";

interface Props {
  cars: Car[];
}

const HomePage = ({ cars }: Props) => {
  return (
    <div>
      <Carousel cars={cars} />
    </div>
  );
};

export async function getServerSideProps() {
  const response = cars as Car[];
  return {
    props: {
      cars: response,
    },
  };
}

export default HomePage;
