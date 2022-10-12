import Image from "next/image";
import { Block, Flex, Text } from "vcc-ui";
import { Car } from "../../../shared/interfaces/car.interface";
import LinkCollection from "../LinkCollection/LinkCollection";

interface Props {
  car: Car;
}

const productWrapper = {
  margin: "20px",
}

const imageWrapper = {
  // position: "relative",
  width: "100%",
};

const modelTextWrapper = {
  flexFlow: "row",
};

const modelTypeText = {
  marginLeft: "5px",
};

const bodyTypeText = {
  "text-transform": "uppercase",
  // fontSize: "0.8rem",
  // fontWeight: 800
};

const CarProductCard = ({ car }: Props) => {
  return (
    <Block extend={productWrapper}>
      <Text foreground={"foreground.secondary"} extend={bodyTypeText}>
        {car.bodyType}
      </Text>
      <Flex extend={modelTextWrapper}>
        <Text subStyle="emphasis">{car.modelName}</Text>
        <Text foreground={"foreground.secondary"} extend={modelTypeText}>
          {car.modelType}
        </Text>
      </Flex>
      <Block extend={imageWrapper}>
        <Image
          src={car.imageUrl}
          alt={`${car.modelName} viewed from the side`}
          width={800}
          height={600}
        />
      </Block>
      <LinkCollection
        links={[
          {
            href: `/learn/${car.id}`,
            label: "Learn",
          },
          {
            href: `/shop/${car.id}`,
            label: "Shop",
          },
        ]}
      />
    </Block>
  );
};

export default CarProductCard;
