import { useRouter } from "next/router";
import { Text } from "vcc-ui";

const ShopPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Text>{`Shop page for car with id ${id} not implemented yet!`}</Text>;
};

export default ShopPage;
