import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsSlider from "./components/NewsSlider";
// Pages (make sure paths are correct!)
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <NewsSlider />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
