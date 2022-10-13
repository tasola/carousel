import { Flex, Link } from "vcc-ui";

interface Props {
  links: Link[];
}

interface Link {
  href: string;
  label: string;
  tabbable?: boolean;
  withArrow?: boolean;
}

const linkWrapper = {
  flexFlow: "row",
  width: "80%",
  margin: "0 auto",
  justifyContent: "space-around",

  "@media (max-width: 576px)": {
    width: "60%",
  }
};

const LinkCollection = ({ links }: Props) => {
  return (
    <Flex extend={linkWrapper}>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          arrow={link.withArrow === false ? null : "right"}
          tabIndex={link.tabbable === false ? -1 : 0}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

export default LinkCollection;
