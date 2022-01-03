import React from "react";
import Navbar from "../components/Navbar/Navbar"
import ServicesHeaderBlob from "../components/Servicespage/ServicesHeaderBlob";
import Footer from "../components/Footer/Footer"
import CopyRight from "../components/CopyRight/CopyRight"
import ServicesPageCard from "../components/Servicespage/ServicesPageCard";

function Home() {
  return (
    <div>
        <Navbar />
        <ServicesHeaderBlob />
        <ServicesPageCard />
        <Footer />
        <CopyRight />
    </div>
  );
}

export default Home;