import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutWe from "./components/About/AboutWe";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutWe />} />
        <Route path="footer" element={<Footer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
