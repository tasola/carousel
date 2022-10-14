import { CurrentTheme, ExtendPropValue } from "vcc-ui";
import { Direction } from "./ChevronButton";

const getButtonStyles = (
  direction: Direction,
  diameter: number,
  directionStringToDegree: (direction: Direction) => number
): ExtendPropValue<CurrentTheme, {}> => {
  const rotationalDegree = directionStringToDegree(direction);
  return {
    transform: `rotate(${rotationalDegree}deg)`,
    width: diameter,
    height: diameter,
  }
};

const styles = {
  getButtonStyles
};

export default styles;