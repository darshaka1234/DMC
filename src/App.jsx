import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import Drawer from "./components/news/Drawer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:hash" element={<NewsPage />} />
      <Route path="/test" element={<Drawer />} />
    </Routes>
  );
};

export default App;
