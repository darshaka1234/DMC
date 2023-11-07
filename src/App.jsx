import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:hash" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
