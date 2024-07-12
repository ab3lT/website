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
    >
      <GridItem area= 'logo'>
        <Box>
          <HStack justifyContent={"space-between"} padding="10px">
              <Image src={logo} boxSize="60px" />
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
      <GridItem area= 'bottom' bg= 'dodgerblue'>
        <Box justifyContent={'space-between'}>
          <Link href="#">About</Link>
          <Link href="#">About</Link>
          <Link href="#">About</Link>
          <Link href="#">About</Link>
          <Link href="#">About</Link>
        </Box>
      </GridItem>
    </Grid>
    </>
  );
};

export default Navbar;
