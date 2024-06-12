import React from "react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import Marquee from "./components/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import { About } from "./components/About";
import { Eyes } from "./components/Eyes";
import Featured from "./components/Featured";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" min-h-screen bg-zinc-900 w-full text-white h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
