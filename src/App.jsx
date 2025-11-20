import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Agence from "./pages/Agence.jsx";
import Projects from "./pages/Projects.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import FullScreenNav from "./components/Navigation/FullScreenNav.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
