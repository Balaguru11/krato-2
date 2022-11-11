import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import Layout from "./Pages/Layout";

const RouteFile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:catName" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteFile;
