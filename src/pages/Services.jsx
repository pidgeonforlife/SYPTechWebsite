import React from "react";
import Navbar from "../components/Navbar/Navbar"
import ServicesHeaderBlob from "../components/Servicespage/ServicesHeaderBlob";
import ServicesPageCard from "../components/Servicespage/ServicesPageCard";
import ServicesInfo from "../components/Servicespage/servicesInfo";

function Services() {
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

export default Services;
