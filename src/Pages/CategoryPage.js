import React from "react";
import Category from "../Components/Category";
import Header from "../Components/Header";
import { useParams } from "react-router";
const CategoryPage = () => {
  const catName = useParams().catName;

  return (
    <>
      <Category cat={catName.toUpperCase() || "Select a Category"} />
    </>
  );
};

export default CategoryPage;
