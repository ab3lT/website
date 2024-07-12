import "./App.css";
import { GridItem, Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      templateAreas={`"nav""main" "footer"`}
      templateRows={"100px 1fr 300px"}
      gap="1"
      height="100vh"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main" bg="yellow">
        <p>Main section </p>
      </GridItem>
      <GridItem area="footer" bg="pink">
        <p>footer section</p>
      </GridItem>
    </Grid>
  );
}

export default App;
