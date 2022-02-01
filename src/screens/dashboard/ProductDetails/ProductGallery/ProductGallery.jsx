import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ProductImage from "./ProductImage";

const ProductGallery = () => {
  let itemData = [{ key: 1 }, { key: 2 }];
  return (
    <Grid container p={0.5} spacing={1}>
      <Grid direction="column" container item xs={3} spacing={1}>
        {itemData.map((el) => {
          return (
            <Grid item width="100%" key={el.key}>
              <ProductImage />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={9}>
        <Box>
          <ProductImage withZoom={true} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductGallery;
