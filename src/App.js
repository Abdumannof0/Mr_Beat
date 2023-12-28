import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutWe from "./components/About/AboutWe";
import NotFound from "./Pages/NotFound";
import Recipeitem from "./recipe_item/Recipeitem";
import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutWe />} />
          <Route path="footer" element={<Footer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
