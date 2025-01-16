import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} /> {/* Homepage at root */}
        <Route path="/about" element={<About />} /> {/* About page */}
      </Routes>
    </Router>
  );
}

export default App;
