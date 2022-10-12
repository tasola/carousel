import { Flex, Link } from "vcc-ui";

interface Props {
  links: Link[];
}

interface Link {
  href: string;
  label: string;
  withArrow?: boolean;
}

const linkWrapper = {
  flexFlow: "row",
  width: "50%",
  margin: "0 auto",
  justifyContent: "space-between",
};

const LinkCollection = ({ links }: Props) => {
  return (
    <Flex extend={linkWrapper}>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          arrow={link.withArrow === false ? null : "right"}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

export default LinkCollection;
