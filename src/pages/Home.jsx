import React from "react";
import Navbar from "../components/Navbar/Navbar"
import HomePageHeader from "../components/Homepage/HomePageHeader";
import ProcessBlob from "../components/Homepage/ProcessBlob";
import SolutionsBlob from "../components/Homepage/SolutionsBlob";
import AffordableBlob from "../components/Homepage/AffordableBlob";
import FooterBlob from "../components/Homepage/FooterBlob";
import '../stylesheet/Home.css';

function Home() {
  return (
    <div>
        <Navbar />
        <HomePageHeader />
        <ProcessBlob />
        <SolutionsBlob />
        <AffordableBlob />
        <FooterBlob />
    </div>
  );
}

export default Home;