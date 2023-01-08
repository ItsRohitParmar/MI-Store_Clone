import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as data } from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading.js"
function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start}/>
        <Offers offer={data.offer}/>
        <Heading text="START PRODUCTS" />
      </Router>
    </>
  );
}

export default App;
