import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stairs from "./components/common/stairs.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavContextProvider } from "./context/NavContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Stairs> */}
      <NavContextProvider>
        <App />
      </NavContextProvider>
      {/* </Stairs> */}
    </BrowserRouter>
  </StrictMode>
);
