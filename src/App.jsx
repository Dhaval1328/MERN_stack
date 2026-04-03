// import About from "./About";
// import Home from "./Home";

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <Home />
//       <About />
//     </div>
//   );
// }

// export default App;

import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Router>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
