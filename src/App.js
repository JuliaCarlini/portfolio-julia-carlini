import { Routes, Route } from "react-router-dom";
import Header from "./componetes/sub-components/Header";
import Homepag from "./componetes/Homepag";
import About from "./componetes/About";
import Projects from "./componetes/Projects";
import Contacts from "./componetes/Contacts";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepag />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;

