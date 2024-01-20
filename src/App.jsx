import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Services from "./routes/Services";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
