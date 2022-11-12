import axios from "axios";
import React, { useEffect, useState, useLayoutEffect } from "react";
import ProductCard from "./ProductCard";
import { Box, Typography, Grid, Button } from "@mui/material";

const Category = ({ cat }) => {
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    setCount(1);
    //eslint-disable-next-line
  }, [cat]);

  useEffect(() => {
    getCatProducts(cat);
    //eslint-disable-next-line
  }, [cat, count]);

  const getCatProducts = async (cat) => {
    let trimProducts;
    try {
      let response = await axios.get(
        `https://fakestoreapi.com/products/category/${cat.toLowerCase()}`
      );
      console.log(response);
      if (response?.data?.length) {
        trimProducts = response.data.slice(0, count);
        setProducts(trimProducts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addOneMore = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Box sx={{ p: 2, m: 2 }}>
        <Typography variant="h5" component="h4" gutterBottom>
          {cat}
        </Typography>
      </Box>

      <Box sx={{ p: 2, m: 2 }}>
        <Grid container spacing={2}>
          {products?.map((product) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button onClick={addOneMore} variant="contained" color="secondary">
        Add One
      </Button>
    </>
  );
};

export default Category;
