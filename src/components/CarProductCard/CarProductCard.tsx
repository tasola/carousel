import Image from "next/image";
import { Block, Flex, Text } from "vcc-ui";
import { Car } from "../../../shared/interfaces/car.interface";
import LinkCollection from "../LinkCollection/LinkCollection";
import styles from "./carProductCard.styles";

interface Props {
  car: Car;
  isVisible?: boolean;
  as?: React.ElementType;
}

const CarProductCard = ({ car, isVisible = true, as = "div" }: Props) => {
  return (
    <Block extend={styles.productWrapper} as={as} aria-hidden={!isVisible}>
      <Text foreground={"foreground.secondary"} extend={styles.bodyTypeText} as="h4">
        {car.bodyType}
      </Text>
      <Flex extend={styles.modelTextWrapper}>
        <Text subStyle="emphasis" as="h3">{car.modelName}</Text>
        <Text foreground={"foreground.secondary"} extend={styles.modelTypeText} as="h4">
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
            tabbable: isVisible,
            ariaLabel: `Learn about ${car.modelName}`
          },
          {
            href: `/shop/${car.id}`,
            label: "Shop",
            tabbable: isVisible,
            ariaLabel: `Shop ${car.modelName}`
          },
        ]}
      />
    </Block>
  );
};

export default CarProductCard;
