import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Agence from "./pages/Agence.jsx";
import Projects from "./pages/Projects.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(function () {
    // gsap.from();
  });
  return (
    <div className="text-white">
      <div className="h-screen w-full flex fixed z-20 top-0">
        <div className="h-full w-1/5 bg-black"></div>
        <div className="h-full w-1/5 bg-white"></div>
        <div className="h-full w-1/5 bg-black"></div>
        <div className="h-full w-1/5 bg-white"></div>
        <div className="h-full w-1/5 bg-black"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
