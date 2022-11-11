import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  Divider,
} from "@mui/material";
const ProductCard = ({ product }) => {
  return (
    <>
      <Card
        key={product.id}
        sx={{
          p: 2,
          height: { sm: "50vw", md: "30vw", lg: "30vw", xl: "30vw" },
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2">
            {product.description.substring(0, 80).concat("...")}
          </Typography>
          <Divider sx={{ m: 1 }} />
          <Box
            component="div"
            sx={{
              display: "inline",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rating value={product.rating.rate} readOnly />
            <Typography variant="body2">
              {product.rating.count} Reviews
            </Typography>
          </Box>
          <br />
          <Typography variant="h6" component="h5">
            Rs. {product.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
