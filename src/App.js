import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import Services from "./containers/Services";
import About from "./containers/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
