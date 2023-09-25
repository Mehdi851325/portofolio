//router dom
import { Route, Routes, useLocation } from "react-router-dom";
//stylesheets
import "./styles/app.scss";
//animation
import { AnimatePresence } from "framer-motion";
//import components
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import DemoPro1 from "./components/DemoPro1";
import DemoPro2 from "./components/DemoPro2";
import DemoPro3 from "./components/DemoPro3";
import DemoPro5 from "./components/DemoPro5";

function App() { 
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route location={location} key={location.pathname} path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project1" element={<DemoPro1 />} />
          <Route path="/project2" element={<DemoPro2 />} />
          <Route path="/project3" element={<DemoPro3 />} />
          <Route path="/project5" element={<DemoPro5 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
