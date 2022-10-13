import { useRouter } from "next/router";
import { Text } from "vcc-ui";

const LearnPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Text>{`Larn page for car with id ${id} not implemented yet!`}</Text>;
};

export default LearnPage;
