import logo from "../assets/logo2.png";
import { HStack, Image, Grid, GridItem, Box, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <>
     <Grid
      templateAreas={`"logo top" "logo bottom"`}
      templateRows={"40px 1fr"}
      templateColumns={"100px 1fr"}
      height="100%"
      boxShadow='xl'
    >
      <GridItem area= 'logo'>
        <Box>
          <HStack justifyContent={"space-between"} padding="10px">
              <Image src={logo} boxSize="70px" />
          </HStack>
        </Box>
      </GridItem>
      <GridItem area= 'top'>
        <Box>
          <HStack justifyContent={'end'}  padding="10px">
              <ColorModeSwitch />
          </HStack>
        </Box>
      </GridItem>
      <GridItem area= 'bottom'>
        <Box>
          <HStack justifyContent='right' spacing='50px' padding='10px' paddingX= '100px'>
          <Link href="Home" _hover={ {bg: '#36454F', color: 'white' }}>Home</Link>
          <Link href="about">About </Link>
          <Link href="services">Services</Link>
          <Link href="membership">Membership</Link>
          <Link href="contact">Contact Us</Link>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
    </>
  );
};

export default Navbar;
