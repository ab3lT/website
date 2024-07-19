import { Box, Flex, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import amigosLogo from "./amigos-logo.png";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer style={{ color: "#FF7400" }}>
      <Box maxW="container.lg" mx="auto" p={4}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <FooterList
              title="Location"
              items={[
                {
                  label: "Around St. George",
                },
                {
                  label: "Church; In front of",
                },
                {
                  label: "Addis Ababa",
                },
                {
                  label: "Medical College",
                },
              ]}
            />
          </GridItem>
          <GridItem>
            <FooterList
              title="Office Hours"
              items={[
                { label: "Monday to Friday " },
                { label: "08:30 AM to 07:00 PM" },
                { label: "Saturday" },
                { label: "08:30 AM to 12:30 PM" },
              ]}
            />
          </GridItem>
          <GridItem>
            <FooterList
              title="Our Products"
              items={[
                { label: "Saving Products", href: "/saving-products" },
                { label: "Loan Products", href: "/loan-products" },
                { label: "Insurance Products", href: "/insurance-products" },
                { label: "Member Service", href: "/member-service" },
              ]}
            />
          </GridItem>
          <GridItem>
            <FooterList
              title="Reach us"
              items={[
                { label: "+251-111267675", href: "#" },
                { label: "+251-930086830", href: "#" },
                { label: "Call on 8511", href: "#" },
              ]}
            />
          </GridItem>
        </Grid>
        <Flex justify="space-between" align="center" py={4}>
          <Box>
            <img src={amigosLogo} alt="Amigos Logo" width="50" height="50" />
          </Box>
          <Box textAlign="center">
            <p>&copy; 2016-2024 Amigos Credit and Saving Coop</p>
          </Box>
          <Box textAlign="right">
            <Flex justify="space-between" align="center" gap={2}>
              <Link href="#" target="_blank" _hover={{ color: "blue.500" }}>
                <FontAwesomeIcon icon={faTelegram} />
              </Link>
              <Link href="#" target="_blank" _hover={{ color: "blue.500" }}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="#" target="_blank" _hover={{ color: "blue.500" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="#" target="_blank" _hover={{ color: "blue.500" }}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="#" target="_blank" _hover={{ color: "blue.500" }}>
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
              <Link href="#" target="_blank" _hover={{ color: "blue.500" }}>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
