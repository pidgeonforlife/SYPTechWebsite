import React from "react";
import Navbar from "../components/Navbar/Navbar"
import AboutHeader from "../components/AboutUspage/AboutHeader";
import AboutUsCard from "../components/AboutUspage/AboutUsCard";
import AboutTeam from "../components/AboutUspage/aboutMeetTeam";

function About() {
  return (
    <div>
        <Navbar />
        <AboutHeader />
        <AboutUsCard />
        <AboutTeam />
    </div>
  );
}

export default About;