import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Characters from "./pages/Characters";
import CharacterInfo from "./pages/CharacterInfo";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router basename="/Module-6-Project">
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;