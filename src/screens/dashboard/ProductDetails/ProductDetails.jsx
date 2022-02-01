import React from "react";
import Grid from "@mui/material/Grid";

import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  return (
    <Grid container item direction="row" p={0.5} spacing={1}>
      <Grid container item xs={12} md={6}>
        <ProductGallery />
      </Grid>
      <Grid container item xs={12} md={6}>
        <Grid item display="flex">
          <ProductInfo />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
