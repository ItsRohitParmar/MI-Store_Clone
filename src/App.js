import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as data } from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";

function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="START PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
         
          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
         
          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
          
          <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
          
          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
