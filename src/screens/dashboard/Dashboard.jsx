import React from "react";

import { useTheme } from "@mui/material/styles";

import Header from "./Header/Header";
import ProductDetails from "./ProductDetails/ProductDetails";
import Description from "./ProductDetails/ProductDescription/Description";
import SectionWrapper from "./ProductDetails/SectionWrapper";

export const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <SectionWrapper bgColor="#FFF">
        <ProductDetails />
      </SectionWrapper>

      <SectionWrapper bgColor={theme.palette.secondary.light}>
        <Description />
      </SectionWrapper>
    </>
  );
};
