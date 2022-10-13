import Image from "next/image";
import { Block, Flex, Text } from "vcc-ui";
import { Car } from "../../../shared/interfaces/car.interface";
import LinkCollection from "../LinkCollection/LinkCollection";
import styles from "./carProductCard.styles";

interface Props {
  car: Car;
  tabbable: boolean;
}

const CarProductCard = ({ car, tabbable = true }: Props) => {
  return (
    <Block extend={styles.productWrapper}>
      <Text foreground={"foreground.secondary"} extend={styles.bodyTypeText}>
        {car.bodyType}
      </Text>
      <Flex extend={styles.modelTextWrapper}>
        <Text subStyle="emphasis">{car.modelName}</Text>
        <Text foreground={"foreground.secondary"} extend={styles.modelTypeText}>
          {car.modelType}
        </Text>
      </Flex>
      <Block extend={styles.imageWrapper}>
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
            tabbable,
          },
          {
            href: `/shop/${car.id}`,
            label: "Shop",
            tabbable,
          },
        ]}
      />
    </Block>
  );
};

export default CarProductCard;
