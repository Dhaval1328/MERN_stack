import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Counter from "./Counter";
import Sum from "./Sum";
import Mapdemo from "./Map";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Router>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |
          <Link to="/counter">Counter</Link> | <Link to="/sum">Sum</Link> |
          <Link to="/map">Map</Link> |
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/sum" element={<Sum />} />
          <Route path="/map" element={<Mapdemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
