import React from "react";
import Navbar from "../components/Navbar/Navbar"
import HomePageHeader from "../components/Homepage/HomePageHeader";
import HomeFixedWave from "../components/Homepage/HomeFixedWave";
import HomePageBody from "../components/Homepage/HomePageBody";
import '../stylesheet/Home.css';

function Home() {
  return (
    <div>
        <Navbar />
        <HomePageHeader />
        <HomeFixedWave />
        <HomePageBody />
    </div>
  );
}

export default Home;