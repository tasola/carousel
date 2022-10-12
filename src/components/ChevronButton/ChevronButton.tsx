import Image from "next/image";
import { Click } from "vcc-ui";

const directions = ["UP", "RIGHT", "DOWN", "LEFT"] as const;
type Direction = typeof directions[number];

interface Props {
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

const getButtonStyles = (direction: Direction, diameter: number) => {
  const rotationalDegree = directionStringToDegree(direction);
  return {
    transform: `rotate(${rotationalDegree}deg)`,
    width: diameter,
    height: diameter,
  }
}

const ChevronButton = ({ src, alt, direction = "RIGHT", diameter = 40 }: Props) => {
  return (
    <Click extend={getButtonStyles(direction, diameter)}>
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
