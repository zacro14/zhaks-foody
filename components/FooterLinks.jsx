import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const FooterLinks = ({ props, params }) => {
  return (
    <>
      <List>
        <ListItem _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <Link href={`/${params}`}>{props}</Link>
        </ListItem>
      </List>
    </>
  );
};

export default FooterLinks;
