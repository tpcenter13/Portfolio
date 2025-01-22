import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PhotoEditing from "./pages/PhotoEditing";
import Figma from "./pages/Figma";
import Basictroubleshooting from "./pages/BasicTroubleshooting"
import WebsiteDevelopment from "./pages/WebsiteDevelopment"
import WorkBasedProjects from "./pages/WorkBasedProjects"
import ScrollToTop from "./components/ScrollToTop";
import ContactSection from "./components/ContactSection";
import Miniprojects from "./pages/Miniprojects";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/photoEditing" element={<PhotoEditing />} />
        <Route path="/figma" element={<Figma/>} />
        <Route path="/basictroubleshooting" element={<Basictroubleshooting/>} />
        <Route path="/websitedevelopment" element={<WebsiteDevelopment/>} />
        <Route path="/workBasedProjects" element={<WorkBasedProjects/>} />
        <Route path="/contactSection" element={<ContactSection/>} />
        <Route path="/miniprojects" element={<Miniprojects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
