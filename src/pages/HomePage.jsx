import React from "react";
import NavBar from "../components/common/NavBar";
import TileSection from "../components/home/TileSection";
import BodySection from "../components/home/BodySection";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col  justify-items-center mx-12 md:mx-24 lg:mx-52">
      <NavBar />
      <TileSection />
      <BodySection />
      <Footer />
    </div>
  );
};

export default HomePage;
