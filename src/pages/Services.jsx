import React from "react";
import Navbar from "../components/Navbar/Navbar"
import ServicesHeaderBlob from "../components/Servicespage/ServicesHeaderBlob";
import Footer from "../components/Footer/Footer"
import CopyRight from "../components/CopyRight/CopyRight"
import ServicesPageCard from "../components/Servicespage/ServicesPageCard";
import ServicesInfo from "../components/Servicespage/servicesInfo";

function Home() {
  return (
    <div>
        <Navbar />
        <ServicesHeaderBlob />
        <ServicesPageCard />
        <ServicesInfo />
        {/* <Footer />
        <CopyRight /> */}
    </div>
  );
}

export default Home;
