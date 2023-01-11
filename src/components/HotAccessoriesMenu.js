import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  var location = useLocation();
  
  return (
    <div className='HotAccessoriesMenu'>
        <Link className={`HotAccessoriesLink ${location.pathname==='/music'?"active":""}`} to="/music">Music Store</Link>
        <Link className={`HotAccessoriesLink ${location.pathname==='/smartDevice'?"active":""}`} to="/smartDevice">Smart Devices</Link>
        <Link className={`HotAccessoriesLink ${location.pathname==='/home'?"active":""}`} to="/home">Home</Link>
        <Link className={`HotAccessoriesLink ${location.pathname==='/lifeStyle'?"active":""}`} to="/lifeStyle">Lifestyle</Link>
        <Link className={`HotAccessoriesLink ${location.pathname==='/mobileAccessories'?"active":""}`} to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu