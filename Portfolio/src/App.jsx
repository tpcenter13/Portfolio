import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PhotoEditing from "./pages/PhotoEditing";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect "/" to "/Homepage" */}
        <Route path="/" element={<Navigate to="/Homepage" />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/PhotoEditing" element={<PhotoEditing />} />
      </Routes>
    </Router>
  );
}

export default App;
