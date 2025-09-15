import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsSlider from "./components/NewsSlider";
// Pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/academics";
import Admissions from "./pages/admissions";
import Research from "./pages/research";
import Placement from "./pages/placement";
import Contacts from "./pages/contacts";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <NewsSlider />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/research" element={<Research />} />
         <Route path="/placement" element={<Placement />} />
         <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
