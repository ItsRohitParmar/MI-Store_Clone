import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as data } from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";

function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <Routes>
          <Route exact path="/miPhones" element={<NavOptions miPhones={data.miPhones}/>}/>
          <Route exact path="/redmiPhones" element={<NavOptions redmiPhones={data.redmiPhones}/>}/>
          <Route exact path="/tv" element={<NavOptions tv={data.tv}/>}/>
          <Route exact path="/laptop" element={<NavOptions laptop={data.laptop}/>}/>
          <Route exact path="/fitnessAndLifeStyle" element={<NavOptions fitnessAndLifeStyle={data.fitnessAndLifeStyle}/>}/>
          <Route exact path="/home" element={<NavOptions home={data.home}/>}/>
          <Route exact path="/audio" element={<NavOptions audio={data.audio}/>}/>
          <Route exact path="/accessories" element={<NavOptions accessories={data.accessories}/>}/>
        </Routes>
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

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews}/>

      <Heading text="VIDEOS"/>
      <Videos video={data.videos} />

      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer} />
    </>
  );
}

export default App;
