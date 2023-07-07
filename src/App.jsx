//router dom
import { Route, Routes } from "react-router-dom";
//stylesheets
import "./styles/app.scss";
//import components
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
