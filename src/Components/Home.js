import React from "react";
import Navbar from './Navbar.js';
import ContentLayout from './ContentLayout'; // Import the new component
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <ContentLayout/>
        <Navbar/>
    </div>
  
  );
};

export default Home;