import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";

interface FooterListProps {
  title: string;
  items?: { label: string; href?: string }[];
}

const FooterList: React.FC<FooterListProps> = ({ title, items }) => {
  return (
    <Box>
      <Heading as="h5" fontSize="lg">
        {title}
      </Heading>
      {items ? (
        <List styleType="none" py={0} mx={0}>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <p>{item.label}</p>
              )}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No items</p>
      )}
    </Box>
  );
};

export default FooterList;
