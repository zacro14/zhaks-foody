import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const FooterLinks = ({ props }) => {
  return (
    <>
      <List>
        <ListItem _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <Link passHref href={`/${props.path}`}>
            {props.title}
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default FooterLinks;
