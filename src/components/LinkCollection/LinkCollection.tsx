import { Flex, Link } from "vcc-ui";
import styles from "./linkCollection.styles";

interface Props {
  links: Link[];
}

interface Link {
  href: string;
  label: string;
  ariaLabel: string;
  tabbable?: boolean;
  withArrow?: boolean;
}

const LinkCollection = ({ links }: Props) => {
  return (
    <Flex extend={styles.linkWrapper}>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          arrow={link.withArrow === false ? null : "right"}
          tabIndex={link.tabbable === false ? -1 : 0}
          aria-label={link.ariaLabel}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

export default LinkCollection;
