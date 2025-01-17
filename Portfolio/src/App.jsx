import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PhotoEditing from "./pages/PhotoEditing";
import Figma from "./pages/Figma";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/PhotoEditing" element={<PhotoEditing />} />
        <Route path="/Figma" element={<Figma/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
