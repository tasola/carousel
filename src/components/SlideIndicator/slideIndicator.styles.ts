import { CurrentTheme, ExtendPropValue } from "vcc-ui";

const slideIndicator = {
  flexFlow: "row",
  justifyContent: "space-between",
  width: "150px",
  margin: "auto"
}

const getSlideIndicatorDot = (isActiveElement: boolean): ExtendPropValue<CurrentTheme, {}> => {
  return {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: isActiveElement ? "primitive.grey200" : "primitive.grey400",
  };
};

const styles = {
  slideIndicator,
  getSlideIndicatorDot
}

export default styles;