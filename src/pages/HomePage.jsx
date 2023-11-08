import React from "react";
import NavBar from "../components/common/NavBar";
import TileSection from "../components/home/TileSection";
import BodySection from "../components/home/BodySection";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";

const HomePage = () => {
  const openDrawer = useSelector((state) => state.news.openDrawer);
  return (
    <div className={openDrawer ? "bg-gray-300" : ""}>
      <div className="flex flex-col  justify-items-center mx-12 md:mx-24 lg:mx-52">
        <NavBar />
        <TileSection />
        <BodySection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
