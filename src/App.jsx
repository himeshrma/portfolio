import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Agence from "./pages/Agence.jsx";
import Projects from "./pages/Projects.jsx";
import Navbar from "./components/Navigation/Navigation.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
