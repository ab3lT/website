import { Box, Container, Flex, Image, Text, Heading } from "@chakra-ui/react";
import AmigosWorkersImage from "../assets/Amigos-workers.png";

const About = () => {
  return (
    <Container maxW="container.lg" pt={20} pb={40}>
      <Flex justify="space-between" align="center" mb={8}>
        <Box mr={8}>
          {" "}
          {/* Add margin right to the Box element */}
          <Heading as="h2" size="lg" mb={2} color="#FF7400">
            Looking back at Amigos
          </Heading>
          <Text fontSize="lg" mb={4} textAlign="justify">
            10 years from now in 2005 E.C. 20 friends (ie. ‘Amigos’) planned and
            founded Amigos saving and credit cooperation with a capital of only
            9,000ETB. Since then, our company has lived to fulfill its purpose
            of making its members successful by providing the most suitable and
            flexible financial service products.
          </Text>
        </Box>
        <Image src={AmigosWorkersImage} boxSize="400px" borderRadius="md" />
      </Flex>
    </Container>
  );
};

export default About;
