import Image from "next/image";
import { Click } from "vcc-ui";
import styles from "./chevronButton.styles";

const directions = ["UP", "RIGHT", "DOWN", "LEFT"] as const;
export type Direction = typeof directions[number];

interface Props {
  onClick: () => void;
  src: string;
  alt: string;
  direction?: Direction;
  diameter?: number;
}

const directionStringToDegree = (direction: Direction): 0 | 90 | 180 | 270 => {
  switch(direction) {
    case "UP":
      return 270;
    case "RIGHT":
      return 0;
    case "DOWN":
      return 90;
    case "LEFT":
      return 180;
  }
}

const ChevronButton = ({ onClick, src, alt, direction = "RIGHT", diameter = 40 }: Props) => {
  return (
    <Click onClick={onClick} extend={styles.getButtonStyles(direction, diameter, directionStringToDegree)}>
      <Image
        src={src}
        alt={alt}
        width={diameter}
        height={diameter}
      />
    </Click>
  );
};

export default ChevronButton;
