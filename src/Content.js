import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Works/Work";

function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Work />} />
      </Routes>
    </div>
  );
}

export default Content;
