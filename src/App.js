import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Localvideo from "./pages/Localvideo";
import Apivideo from "./pages/Apivideo";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="localvideo" element={<Localvideo />} />
          <Route exact path="apivideo" element={<Apivideo />} />

          <Route exact path="About" element={<About />} />
        </Routes>
      </Router>
      {/* <Grid /> */}
      {/* <About /> */}
      {/* <Route /> */}
      {/* <Youtubedata /> */}
      {/* <Vediocard /> */}
    </>
  );
}

export default App;
