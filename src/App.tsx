import "./App.css";
import { GridItem, Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Services from "./pages/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <GridItem area="main">
      <BrowserRouter>
              <Routes>
                <Route index element={<Home/>} />
                <Route path="home" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Membership" element={<Membership/>}/>
                <Route path="Services" element={<Services/>}/>
              </Routes>
            </BrowserRouter>
      </GridItem>
      <GridItem area="footer" bg="charcoal grey">
        <Footer /> {/* Replace with Footer component */}
      </GridItem>
    </Grid>
  );
}

export default App;